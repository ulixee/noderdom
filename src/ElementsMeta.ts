const elementsMetaByName: Record<string, IElementMeta> = require('../files/0-imported/elementsMeta.json');

export interface IElementMeta {
  name: string;
  namespace: string;
  tags: IElementMetaTag[];
}

interface IElementMetaTag {
  name: string;
  deprecated?: boolean;
  selfClosing?: boolean;
}

export default class ElementsMeta {
  public static get(interfaceName: string): IElementMeta {
    return elementsMetaByName[interfaceName];
  }
}
