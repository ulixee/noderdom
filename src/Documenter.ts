import * as Types from './types';
import Components from './Components';
import Axios from 'axios';

const DOM: any = require('../inputs/documentation/DOM.json');
const DOM_HTML: any = require('../inputs/documentation/DOM_HTML.json');

export default class Documenter {
  private metaByInterfaceName: Record<string, any> = {};

  constructor(private components: Components) {
    const interfacesByCategory = [
      ...Object.values(DOM.interfacesByCategory),
      ...Object.values(DOM_HTML.interfacesByCategory),
    ];
    interfacesByCategory.forEach(interfacesByName => {
      for (const [name, inter] of Object.entries(interfacesByName as any)) {
        this.metaByInterfaceName[name] = inter;
      }
    });
  }

  public async extract() {
    const promises = Object.values(this.components.interfaces).map(i => {
      return this.extractDocumentation(i);
    });
    return Promise.all(promises);
  }

  public async extractDocumentation(i: Types.Interface) {
    const meta = this.metaByInterfaceName[i.name];
    let html;
    try {
      const response = await Axios.get(meta.url);
      html = response.data;
    } catch (error) {
      console.log(error);
    }
    const document = { name: i.name, html };

    console.log('----------------------------------------');
    console.log(document.name, ' --> ', html);

    return document;
  }
}
