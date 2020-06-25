import * as Fs from 'fs';
import { DOMParser } from 'noderdom-detached';
import { IDocument, IElement } from 'noderdom/base/interfaces';

export default class DocumentationExtractor {
  public foundFile: boolean = false;
  private readonly html: string;
  private readonly document: IDocument;

  constructor(filepath: string) {
    const domParser = new DOMParser();
    if (!filepath || !Fs.existsSync(filepath)) {
      return;
    }
    this.foundFile = true;
    this.html = Fs.readFileSync(filepath, 'utf-8');
    this.document = domParser.parseFromString(this.html, 'text/html');
  }

  public extractInheritance() {
    const { document } = this;
    const inheritance = [];
    const sidebarDetails = document.querySelectorAll('.sidebar .quick-links ol details');
    for (const sidebarDetail of sidebarDetails) {
      const sidebarElem = sidebarDetail as IElement;
      const summaryElem = sidebarElem.querySelector('summary') as IElement;
      const summaryText = (summaryElem.textContent || '').trim();
      if (summaryText.includes('Inheritance')) {
        const items = sidebarElem.querySelectorAll('ol li a');
        for (const item of items) {
          const href = (item as IElement).getAttribute('href');
          const name = item.textContent;
          inheritance.push({ name, href });
        }
      }
    }
    return inheritance;
  }

  public extractIntro() {
    const { document } = this;
    const intro = [];
    let elem: IElement | null = document.querySelector('article p') as IElement;
    while (elem && elem.localName === 'p') {
      intro.push(elem.innerHTML);
      elem = elem.nextElementSibling;
    }
    return intro;
  }

  public extractProperties(className: string) {
    const properties = extractItemsFrom(this.document, 'h2[id^="Properties"] + *', className);

    const attributes = extractItemsFrom(this.document, 'h2[id^="Attributes"] + *', className);
    properties.items.push(...attributes.items);
    if (!properties.intro.length && attributes.intro.length) {
      properties.intro.push(...attributes.intro);
    }

    if (className === 'Document') {
      const extensions = extractItemsFrom(this.document, 'h3[id="Extensions_for_HTMLDocument"] + *', className);
      properties.items.push(...extensions.items);
    }

    const eventHandlers1 = extractItemsFrom(this.document, 'h2[id="Event_handlers"] + *', className);
    properties.items.push(...eventHandlers1.items);

    const eventHandlers2 = extractItemsFrom(this.document, 'h3[id="Event_handlers"] + *', className);
    properties.items.push(...eventHandlers2.items);

    const eventHandlers3 = extractItemsFrom(this.document, 'h3[id="Handlers"] + *', className);
    properties.items.push(...eventHandlers3.items);

    return properties;
  }

  public extractMethods(className: string) {
    let id = 'Methods';
    if (className === 'Text') id = 'Methods_2';
    if (className === 'TextTrack') id = 'methods';
    const methods = extractItemsFrom(this.document, `h2[id^="${id}"] + *`, className, true);

    if (className === 'Document') {
      const extensions = extractItemsFrom(this.document, 'h3[id^="Extension_for_HTML_documents"] + *', className, true);
      methods.items.push(...extensions.items);
    }

    const staticMethods = extractItemsFrom(this.document, 'h2[id^="Static_methods"] + *', className, true);
    staticMethods.items.forEach((m: IMDNMethodItem) => (m.isStatic = true));
    methods.items.push(...staticMethods.items);

    return methods;
  }

  public extractBrowserSupport() {
    const { document } = this;
    const browserSupport: { [name: string]: { chrome: boolean; isDeprecated: boolean } } = {};

    const tbodyElem: IElement | null = document.querySelector('table.bc-table-web tbody');
    if (!tbodyElem) return browserSupport;

    for (const trElem of tbodyElem.children) {
      const trCodeElem = trElem.querySelector('th code');
      if (!trCodeElem) continue;
      const name = (trCodeElem!.textContent || '').replace('()', '').trim();

      const isDeprecated = !!trElem.querySelector('i.ic-deprecated');

      const chromeElem = trElem.querySelector('td.bc-browser-chrome');
      const chromeSupports = chromeElem && chromeElem.classList.contains('bc-supports-yes');
      if (name) browserSupport[name] = { chrome: !!chromeSupports, isDeprecated };
    }
    return browserSupport;
  }
}

////////////////////

function extractItemsFrom(document: IDocument, selector: string, className: string, isMethod: boolean = false) {
  const details: IExtractedDetails = { intro: [], items: [] };
  let elem: IElement | null = document.querySelector(selector);
  if (!elem) return details;

  while (elem && !['h2', 'h3'].includes(elem.localName)) {
    if (elem.localName === 'p') {
      details.intro.push(elem.innerHTML);
    } else if (elem.localName === 'dl' || (elem.children[0] && elem.children[0].localName === 'dl')) {
      details.items.push(...extractItemsFromDL(elem, className, isMethod));
    } else if (elem.localName === 'table') {
      details.items.push(...extractItemsFromTable(elem, className, isMethod));
    }
    elem = elem.nextElementSibling;
  }
  return details;
}

function extractItemsFromDL(dlElem: IElement, className: string, isMethod: boolean) {
  const items = [];
  const dts = dlElem.querySelectorAll('dt');
  for (const dt of dts) {
    let name;
    let mdnDocumentationPath;
    const dtElem = dt as IElement;
    const aElem = dtElem.querySelector('a') as IElement;
    if (aElem) {
      if (dtElem.querySelectorAll('code').length > 1) {
        name = dtElem.querySelector('code')!.textContent;
      } else {
        mdnDocumentationPath = aElem.getAttribute('href') || '';
        name = aElem.textContent;
      }
    } else {
      const textNodes = Array.from(dtElem.childNodes).filter(n => n.nodeType === 3);
      const textContent = textNodes.map(n => n.textContent).join('');
      name = textContent.trim();
    }
    if (!name) continue;
    if (name.includes('.')) {
      const names = name.split('.');
      if (names[0] !== className) continue;
      name = names[1];
    }
    const isReadonly = !!dtElem.querySelector('span[readOnly]');
    const isExperimental = !!dtElem.querySelector('i.icon-warning-sign');
    const descElem = dtElem.nextElementSibling!;
    if (!descElem) {
      console.log(className);
    }
    const description = descElem.nodeName === 'DD' ? descElem.innerHTML : '';
    if (isMethod) name = name.replace(/\(.+/, '');

    if (isMethod) {
      items.push({ name, mdnDocumentationPath, isExperimental, description } as IMDNPropertyItem);
    } else {
      items.push({ name, mdnDocumentationPath, isReadonly, isExperimental, description } as IMDNPropertyItem);
    }
  }
  return items;
}

function extractItemsFromTable(tableElem: IElement, className: string, isMethod: boolean) {
  const items = [];
  let thElems = tableElem.querySelectorAll('thead > tr > th');
  if (!thElems.length) thElems = tableElem.querySelectorAll('thead > tr > td.header');
  if (!thElems.length) thElems = tableElem.querySelectorAll('tbody > tr > td.header');

  const headers = Array.from(thElems).map(x =>
    (x.textContent || '')
      .toLowerCase()
      .replace('attribute', 'name')
      .replace('name & arguments', 'name'),
  );
  if (!headers.length && tableElem.querySelector('tbody > tr')!.children.length === 2) {
    headers.push('name', 'description');
  }

  for (const rowElem of tableElem.querySelectorAll('tbody > tr')) {
    const data: { [key: string]: string | boolean | null } = {};
    const tdElems = Array.from((rowElem as IElement).children);
    tdElems.forEach((tdElem, i) => {
      const key: string = headers[i] || '';
      let value;
      if (i === 0 && tdElem.querySelector('code')) {
        value = tdElem.querySelector('code')!.textContent || '';
        if (value.includes('.')) {
          const names = value.split('.');
          if (names[0] !== className) return;
          value = names[1];
        }
        data.isReadonly = !!tdElem.querySelector('span.readOnly');
        data.isExperimental = !!tdElem.querySelector('i.icon-warning-sign');
      } else {
        value = tdElem.innerHTML;
      }
      if (key) data[key] = value ? value.trim() : value;
    });

    if (data.name) {
      const name = isMethod ? (data.name as string).replace(/\(.+/, '') : data.name;
      const description = data.description;
      const isReadonly = !!data.isReadonly;
      const isExperimental = !!data.isExperimental;
      if (isMethod) {
        items.push({ name, isExperimental, description } as IMDNPropertyItem);
      } else {
        items.push({ name, isReadonly, isExperimental, description } as IMDNMethodItem);
      }
    }
  }

  return items;
}

export interface IMDNPropertyItem {
  name: string;
  description: string;
  mdnDocumentationPath?: string;
  isReadonly?: boolean;
  isExperimental?: boolean;
}

export interface IMDNMethodItem {
  name: string;
  description: string;
  mdnDocumentationPath?: string;
  isExperimental?: boolean;
  isStatic?: boolean;
}

interface IExtractedDetails {
  intro: string[];
  items: IMDNPropertyItem[];
}
