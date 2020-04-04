export default interface IChoiceMeta {
  itemType: 'interface' | 'property' | 'method';
  isEnabled: boolean;
  isHidden: boolean;
  isWritable?: boolean;
  isCore?: boolean;
}
