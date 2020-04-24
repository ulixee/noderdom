export default interface IChoiceMeta {
  itemType: IChoiceItemType;
  isEnabled: boolean;
  isHidden: boolean;
  isWritable?: boolean;
  isCore?: boolean;
  isSuper?: boolean;
  isSuperDescendent?: boolean;
  isLocal?: boolean;
}

export enum ChoiceItemType {
  interface = 'interface',
  property = 'property',
  method = 'method',
}

export type IChoiceItemType = keyof typeof ChoiceItemType;
