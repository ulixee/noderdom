<template>
  <div class="ChooseProperties">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <div class="topbar">
      <div class="left" v-if="klasses">
        <a @click="scrollToTop">{{ coreKlasses.length }}/{{ coreKlasses.length }} core klasses</a>,
        {{ enabledCount }}/{{ klasses.length }} total klasses
        <!--| show-->
        <!--selectoption custom
option all
option active
option inactive-->
      </div>
      <div class="right">
        <label>Build</label>
        <select v-model="domType" @change="refreshBuildData">
          <option>awaited</option>
          <option>detached</option>
        </select>
        <button class="save" @click="saveSelection" :class="{ error: hadErrorSaving }">
          <template v-if="isSaving">saving...</template><template v-else-if="hadErrorSaving">error saving</template>
          <template v-else>save</template>
        </button>
      </div>
    </div>
    <div class="core-klasses">
      <ul class="core-klasses-list" v-if="klasses">
        <li v-for="klass of coreKlasses" :key="klass.name">
          <a :href="`#${klass.name}`">{{ klass.name }}</a>
        </li>
      </ul>
    </div>
    <form v-if="klasses">
      <ul class="klasses">
        <li v-for="klass of klasses" :key="klass.name" :enabled="klass.meta.isEnabled">
          <div class="klass-name" :id="klass.name">
            <a @click="toggleEnableKlass(klass)">
              <input type="checkbox" v-model="klass.meta.isEnabled" />
              <span>
                {{ klass.name }}<i class="tag" v-if="klass.meta.isCore">Core</i>
                <i class="tag" v-if="klass.meta.isSuper">Super</i>
                <i class="tag" v-if="klass.meta.isSuperDescendent">SuperDescendent</i>
              </span>
            </a>
            <a
              class="hide"
              @click="toggleHideKlass(klass)"
              :class="{ hidden: klass.meta.isHidden }"
              :title="klass.meta.isCore ? 'Core interfaces cannot be hidden' : ''"
            >
              <i class="material-icons">remove_red_eye</i>
            </a>
          </div>
          <template v-if="klass.isEnabled || !klass.meta.isHidden">
            <div class="klass desc">
              <p v-for="p of klass.docOverview" v-html="p"></p>
            </div>
            <div class="linkage">
              <div class="dependencies" v-if="klass.dependencies.length">
                <div class="title">Inherits From:</div>
                <ul class="list">
                  <li v-for="dependency of klass.dependencies">
                    <a :href="`#${dependency}`" :class="{ active: isActiveDependency(dependency) }">{{ dependency }}</a>
                  </li>
                </ul>
              </div>
              <div class="dependents" v-if="klass.dependents.length">
                <div class="title">Inherited By:</div>
                <ul class="list">
                  <li v-for="dependent of klass.dependents">
                    <a :href="`#${dependent}`" :class="{ active: isActiveDependent(dependent) }">{{ dependent }}</a>
                  </li>
                </ul>
              </div>
              <div class="referenced-by" v-if="klass.referencedBy.length">
                <div class="title">Referenced By:</div>
                <ul class="list">
                  <li v-for="reference of klass.referencedBy">
                    <a :href="`#${reference}`" :class="{ active: isActiveReferencedBy(klass, reference) }">{{
                      reference
                    }}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="properties" v-if="klass.properties.length">
              <div class="title">
                Properties
                <div class="toggle-all" v-if="klass.extra.hiddenPropertyCount">
                  (<a @click="toggleHideProperties(klass)">
                    {{ klass.extra.unhideHiddenProperties ? 'rehide' : 'unhide' }}
                    {{ klass.extra.hiddenPropertyCount }} </a
                  >)
                </div>
              </div>
              <TransitionGroup class="items" name="list-fade" tag="ul">
                <li
                  v-for="prop of klass.properties.filter(
                    x => x.meta.isEnabled || klass.extra.unhideHiddenProperties || !x.meta.isHidden,
                  )"
                  :key="prop.name"
                >
                  <div class="details">
                    <div class="name">
                      {{ prop.readonly ? 'R ' : '' }} {{ prop.name }}:&nbsp;
                      <a v-for="type of prop.customTypes" :href="`#${type}`" :class="{ active: prop.meta.isEnabled }"
                        >{{ type }}
                      </a>
                      <span v-for="type of prop.nativeTypes">{{ type }}</span>
                    </div>
                    <div class="desc" v-html="prop.docOverview"></div>
                  </div>
                  <div class="actions">
                    <ul class="toggle">
                      <li
                        @click="toggleItem($event, prop)"
                        :id="`${prop.name}:false`"
                        :class="{ selected: !prop.meta.isEnabled }"
                      >
                        off
                      </li>
                      <li
                        @click="toggleItem($event, prop)"
                        :id="`${prop.name}:true`"
                        :class="{ selected: prop.meta.isEnabled && !prop.meta.isAbstract }"
                      >
                        on
                      </li>
                      <li
                        @click="toggleItem($event, prop)"
                        :id="`${prop.name}:abstract`"
                        :class="{ selected: prop.meta.isEnabled && prop.meta.isAbstract }"
                      >
                        abstract
                      </li>
                    </ul>
                    <template v-if="!prop.isReadonly">
                      <input
                        type="checkbox"
                        :id="`${prop.name}:writable`"
                        v-model="prop.meta.isWritable"
                        @click="toggleItem($event, prop)"
                      />
                      <label :for="`${prop.name}:writable`" :class="{ selected: prop.meta.isWritable }">
                        writable
                      </label>
                    </template>
                    <a class="hide" @click="toggleHideItem(property)" :class="{ hidden: prop.meta.isHidden }">
                      <i class="material-icons">remove_red_eye</i>
                    </a>
                  </div>
                </li>
              </TransitionGroup>
            </div>
            <div class="methods" v-if="klass.methods.length">
              <div class="title">
                Methods
                <div class="toggle-all" v-if="klass.extra.hiddenMethodCount">
                  (<a @click="toggleHideMethods(klass)"
                    >{{ klass.extra.unhideHiddenMethods ? 'rehide' : 'unhide' }} {{ klass.extra.hiddenMethodCount }}</a
                  >)
                </div>
              </div>
              <TransitionGroup class="items" name="list-fade" tag="ul">
                <template v-for="method of klass.methods">
                  <li v-if="!method">empty method {{ klass.name }}</li>
                </template>
                <li
                  v-for="method of klass.methods.filter(
                    x => x.isEnabled || klass.extra.unhideHiddenMethods || !x.meta.isHidden,
                  )"
                  :key="method.name"
                >
                  <div class="details">
                    <div class="name">
                      {{ method.name }}(<a v-for="type of method.customArgTypes" :href="`#${type}`">{{ type }},</a
                      >):&nbsp;<a v-for="type of method.customReturnTypes" :href="`#${type}`">{{ type }},</a
                      ><span v-for="type of method.nativeReturnTypes">{{ type }},</span>
                    </div>
                    <div class="desc" v-html="method.docOverview"></div>
                  </div>
                  <div class="actions">
                    <ul class="toggle">
                      <li
                        @click="toggleItem($event, method)"
                        :id="`${method.name}:false`"
                        :class="{ selected: !method.meta.isEnabled }"
                      >
                        off
                      </li>
                      <li
                        @click="toggleItem($event, method)"
                        :id="`${method.name}:true`"
                        :class="{ selected: method.meta.isEnabled &amp;&amp; !method.meta.isAbstract }"
                      >
                        on
                      </li>
                      <li
                        @click="toggleItem($event, method)"
                        :id="`${method.name}:abstract`"
                        :class="{ selected: method.meta.isEnabled &amp;&amp; method.meta.isAbstract }"
                      >
                        abstract
                      </li>
                    </ul>
                    <a class="hide" @click="toggleHideItem(method)" :class="{ hidden: method.meta.isHidden }"
                      ><i class="material-icons">remove_red_eye</i></a
                    >
                  </div>
                </li>
              </TransitionGroup>
            </div>
          </template>
        </li>
      </ul>
    </form>
  </div>
</template>

<script lang="ts">
import * as Vue from 'vue';
import IChoiceMeta from './customizer/IChoiceMeta';
import Axios from 'axios';

enum DomType {
  awaited = 'awaited',
  detached = 'detached',
  standard = 'standard',
}

interface IKlassExtra {
  hasEnabledProperties: boolean;
  hasEnabledMethods: boolean;
  activelyReferencedBy: Set<string>;
  activeDependencies: Set<string>;
  hiddenPropertyCount: number;
  hiddenMethodCount: number;
  unhideHiddenProperties: boolean;
  unhideHiddenMethods: boolean;
}

export default Vue.defineComponent({
  name: 'Customizer',
  components: {},
  setup() {
    const klasses = Vue.ref<any[]>([]);
    const klassesByName = Vue.ref<{ [name: string]: any }>({});
    const isSaving = Vue.ref(false);
    const hadErrorSaving = Vue.ref(false);
    const domType = Vue.ref<DomType.awaited | DomType.detached>(DomType.awaited);
    const choicesMetaMap = Vue.ref<{ [domType: string]: { [name: string]: IChoiceMeta } }>({
      detached: {},
      awaited: {},
    });
    const coreKlasses = Vue.ref([]);
    const enabledCount = Vue.computed(() => {
      let enabledCount: number = 0;
      if (klasses.value)
        for (const { meta } of klasses.value) {
          if (meta.isEnabled) enabledCount += 1;
        }
      return enabledCount;
    });

    return {
      enabledCount,
      klasses,
      klassesByName,
      isSaving,
      hadErrorSaving,
      domType,
      choicesMetaMap,
      coreKlasses,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },

    isActiveDependency(name: string) {
      const { meta } = this.klassesByName[name];
      return !!(meta && meta.isEnabled);
    },

    isActiveDependent(name: string) {
      const { meta } = this.klassesByName[name];
      return !!(meta && meta.isEnabled);
    },

    isActiveReferencedBy(klass: any, reference: string) {
      klass.extra.activelyReferencedBy.has(reference);
    },

    toggleEnableKlass(klass: any) {
      if (klass.meta.isCore) return;
      if (klass.meta.isEnabled && !this.klassHasActiveItems(klass)) {
        klass.meta.isEnabled = false;
        klass.meta.isHidden = true;
      } else {
        klass.meta.isEnabled = true;
        klass.meta.isHidden = false;
      }
    },

    toggleHideKlass(klass: any) {
      if (klass.meta.isEnabled) return;
      klass.meta.isHidden = !klass.meta.isHidden;
    },

    toggleHideItem(item: any) {
      const type = item.meta.itemType.charAt(0).toUpperCase() + item.meta.itemType.slice(1);
      if (item.meta.isHidden) {
        item.meta.isHidden = false;
        item.klass.extra[`hidden${type}Count`] -= 1;
      } else if (!item.meta.isEnabled && !item.meta.isWritable) {
        item.meta.isHidden = true;
        item.klass.extra[`hidden${type}Count`] += 1;
      }
    },

    toggleHideProperties(klass: any) {
      klass.extra.unhideHiddenProperties = !klass.extra.unhideHiddenProperties;
    },

    toggleHideMethods(klass: any) {
      klass.extra.unhideHiddenProperties = !klass.extra.unhideHiddenProperties;
    },

    toggleItem(event: any, item: any) {
      try {
        const id = event.target.id;
        const type = id.replace(`${item.name}:`, '');
        if (type === 'true') {
          item.meta.isEnabled = true;
        } else if (type === 'false') {
          item.meta.isEnabled = false;
        } else if (type === 'writable') {
          item.meta.isWritable = !item.meta.isWritable;
        }
        if (type === 'abstract') {
          item.meta.isEnabled = true;
          item.meta.isAbstract = true;
        } else if (item.meta.hasOwnProperty('isAbstract')) {
          item.meta.isAbstract = false;
        }
        this.calcKlassStatus(item.klass);
      } catch (error) {
        console.log(error);
      }
    },

    calcKlassStatus(klass: any) {
      let hasEnabledProperties = false;
      let hasEnabledMethods = false;
      let hiddenPropertyCount = 0;
      let hiddenMethodCount = 0;
      const references: string[] = [];
      const activeReferences: string[] = [];

      klass.properties.forEach((p: any) => {
        references.push(...p.customTypes);
        if (p.meta.isHidden) hiddenPropertyCount += 1;
        if (!p.meta.isEnabled) return;
        hasEnabledProperties = true;
        activeReferences.push(...p.customTypes);
      });

      klass.methods.forEach((m: any) => {
        references.push(...m.customTypes);
        if (m.meta.isHidden) hiddenMethodCount += 1;
        if (!m.meta.isEnabled) return;
        hasEnabledMethods = true;
        activeReferences.push(...m.customTypes);
      });

      klass.extra.hasEnabledProperties = hasEnabledProperties;
      klass.extra.hasEnabledMethods = hasEnabledMethods;
      klass.extra.hiddenPropertyCount = hiddenPropertyCount;
      klass.extra.hiddenMethodCount = hiddenMethodCount;
      klass.meta.isEnabled = klass.meta.isEnabled || this.klassHasActiveItems(klass);
      this.updateReferences(klass, new Set(references), new Set(activeReferences));
    },

    klassHasActiveItems(klass: any): boolean {
      const { isCore } = klass.meta;
      const { activelyReferencedBy, hasEnabledProperties, hasEnabledMethods } = klass.extra;
      const hasActiveReferences = !!activelyReferencedBy.size;
      return isCore || hasEnabledProperties || hasEnabledMethods || hasActiveReferences;
    },

    updateReferences(referencingKlass: any, references: Set<string>, activeReferences: Set<string>) {
      references.forEach(reference => {
        const referencedKlass = this.klassesByName[reference];
        if (!referencedKlass) {
          // console.log(`COULD NOT FIND ${reference}`);
          return;
        }
        const { activelyReferencedBy } = referencedKlass.extra;
        if (activeReferences.has(reference)) {
          activelyReferencedBy.add(referencingKlass.name);
          this.klassHasActiveItems(referencedKlass);
        } else if (activelyReferencedBy.has(reference)) {
          activelyReferencedBy.delete(referencingKlass.name);
          this.klassHasActiveItems(referencedKlass);
        }
        referencedKlass.meta.isEnabled = this.klassHasActiveItems(referencedKlass);
      });
    },

    async saveSelection() {
      if (this.isSaving) return;
      const metasByName: any = {};
      this.isSaving = true;
      this.klasses.forEach(klass => {
        metasByName[klass.name] = klass.meta;
        klass.properties.forEach(p => (metasByName[p.name] = p.meta));
        klass.methods.forEach(m => (metasByName[m.name] = m.meta));
      });

      const params = { domType: this.domType, metasByName };
      try {
        await Axios.post('/choices', params);
      } catch (error) {
        console.log('ERROR SAVING: ', error);
        this.hadErrorSaving = true;
        setTimeout(() => (this.hadErrorSaving = false), 5000);
      }
      this.isSaving = false;
    },

    createKlassExtra(): IKlassExtra {
      return {
        hasEnabledProperties: false,
        hasEnabledMethods: false,
        activelyReferencedBy: new Set(),
        activeDependencies: new Set(),
        hiddenPropertyCount: 0,
        hiddenMethodCount: 0,
        unhideHiddenProperties: false,
        unhideHiddenMethods: false,
      };
    },

    refreshBuildData() {
      const metaByName = this.choicesMetaMap[this.domType];

      for (const klass of this.klasses) {
        klass.extra = this.createKlassExtra();
        klass.meta = metaByName[klass.name];
        for (const property of klass.properties) {
          property.meta = metaByName[property.name];
        }
        for (const method of klass.methods) {
          method.meta = metaByName[method.name];
        }
      }

      for (const klass of this.klasses) {
        this.calcKlassStatus(klass);
      }
    },
  },

  async mounted() {
    const {
      data: { klasses, choicesMetaMap },
    } = await Axios.get('/data');
    const metaByName = choicesMetaMap[this.domType];

    for (const klass of klasses) {
      klass.extra = this.createKlassExtra();
      klass.meta = metaByName[klass.name];

      for (const property of klass.properties) {
        property.klass = klass;
        property.meta = metaByName[property.name];
      }
      for (const method of klass.methods) {
        method.klass = klass;
        method.meta = metaByName[method.name];
      }
      if (klass.meta.isCore) {
        this.coreKlasses.push(klass);
      }
      this.klassesByName[klass.name] = klass;
    }

    Object.assign(this.klasses, klasses);
    Object.assign(this.choicesMetaMap, choicesMetaMap);

    for (const klass of this.klasses) {
      this.calcKlassStatus(klass);
    }
  },
});
</script>

<style lang="scss">
$panelWidth: 325px;

@mixin reset-ul {
  list-style-type: none;
  list-style-position: outside;
  text-indent: 0;
  padding-left: 0;
  margin: 0;
  line-height: inherit;
  & > li {
    margin: 0;
  }
}

a {
  cursor: pointer;
}

.topbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  background: white;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  z-index: 100;
  line-height: 30px;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: $panelWidth + 10px;
    height: 100vh;
    width: 1px;
    background: rgba(0, 0, 0, 0.1);
    z-index: 0;
  }
  .left {
    float: left;
    padding-left: 10px;
    box-sizing: border-box;
    width: calc(100% - #{$panelWidth + 10px});
  }
  .right {
    float: right;
    width: $panelWidth;
    box-sizing: border-box;
  }
  select {
    margin-left: 5px;
  }
  button.save {
    float: right;
    margin-right: 10px;
    margin-top: 7px;
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: inset 1px 1px 0 rgba(255, 255, 255, 0.3);
    border-radius: 3px;
    &.error {
      background: red;
      color: pink;
    }
  }
}

.core-klasses {
  margin-top: 50px;
  ul {
    @include reset-ul();
    li {
      padding: 0 0 20px 20px;
      display: inline-block;
      width: 33.333%;
      box-sizing: border-box;
    }
  }
}

ul.klasses {
  @include reset-ul();
  & > li {
    border-top: 2px solid rgba(0, 0, 0, 0.7);
    padding: 0 0 20px 20px;
    opacity: 0.5;
    &[enabled] {
      opacity: 1;
    }
  }
  a.hide {
    cursor: pointer;
    width: 24px;
    font-size: 14px;
    float: right;
    padding-right: 5px;
    &.hidden {
      opacity: 0.3;
    }
  }
}

.klass-name {
  padding-top: 45px;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 16px;
  input[type='checkbox'] {
    width: 16px;
    height: 16px;
    margin-left: -1px;
    pointer-events: none;
  }
  label {
    padding-left: 5px;
  }
  i.tag {
    display: inline-block;
    margin-left: 10px;
    background: rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    font-style: normal;
    font-weight: 100;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
    text-shadow: 1px 1px 0 white;
    padding: 2px 5px 1px;
  }
}
.title {
  font-weight: bold;
  margin-bottom: 5px;
  .toggle-all {
    display: inline-block;
    font-weight: 100;
    margin-left: 5px;
  }
}
.desc {
  opacity: 0.5;
  pointer-events: none;
  width: calc(100% - #{$panelWidth + 10px});
  a {
    color: black;
    text-decoration: none;
  }
}
.list-fade-leave-active {
  transition: opacity 0.3s;
}
.list-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
ul.items {
  @include reset-ul();
}
ul.items > li {
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px 0;
  &:hover {
    background: rgb(248, 243, 253);
  }
  a {
    color: rgba(0, 0, 0, 0.5);
    &.active {
      color: green;
    }
  }
  .details,
  .actions {
    display: inline-block;
    vertical-align: top;
  }
  .details {
    width: calc(100% - #{$panelWidth});
  }
  .actions {
    width: $panelWidth;
    box-sizing: border-box;
    line-height: 16px;
    input[type='checkbox'] {
      margin-left: 15px;
      cursor: pointer;
    }
    input[type='checkbox']:first-child {
      margin-left: 10px;
    }
    label {
      padding-left: 3px;
      text-transform: uppercase;
      font-weight: 100;
      font-size: 13px;
      color: rgba(0, 0, 0, 0.5);
      &.selected {
        color: black;
      }
      cursor: pointer;
    }
    ul.toggle {
      @include reset-ul();
      display: inline-block;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 3px;
      margin-left: 5px;
      margin-top: 2px;
      text-transform: uppercase;
      font-weight: 100;
      font-size: 13px;
      li {
        display: inline-block;
        padding: 2px 5px 0px;
        color: rgba(0, 0, 0, 0.5);
        position: relative;
        cursor: pointer;
        min-width: 35px;
        text-align: center;
        &:nth-child(1) {
          border-radius: 3px 0 0 3px;
          &.selected {
            background: gray;
          }
        }
        &:nth-child(2) {
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-top: none;
          border-bottom: none;
          &.selected {
            background: dodgerblue;
          }
        }
        &:nth-child(3) {
          border-radius: 0 3px 3px 0;
          &.selected {
            background: deeppink;
            box-shadow: inset 1px 1px 0 rgba(255, 255, 255, 0.1), 0 -1px 0 rgba(0, 0, 0, 0.3),
              0 1px 0 rgba(0, 0, 0, 0.5);
          }
        }
        &.selected {
          color: white;
          box-shadow: inset 1px 1px 0 rgba(255, 255, 255, 0.1), 0 -1px 0 rgba(0, 0, 0, 0.5), 0 1px 0 rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
}
.linkage {
  margin-bottom: 20px;
}
.dependencies,
.dependents,
.referenced-by {
  width: calc(100% - #{$panelWidth});
  font-size: 15px;
  margin-bottom: 10px;
  line-height: 1.3em;
  .title {
    display: inline;
    font-weight: bold;
    margin-right: 10px;
    opacity: 0.5;
  }
  ul.list {
    @include reset-ul();
    display: inline;
    li {
      display: inline-block;
      margin-right: 10px;
    }
  }
  a {
    color: rgba(0, 0, 0, 0.5);
    &.active {
      color: green;
    }
  }
}
.properties + .methods {
  padding-top: 20px;
}
</style>
