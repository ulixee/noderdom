export enum ObjectType {
  basic = 'basic',
  official = 'official',
  isolate = 'isolate',
  super = 'super',
  element = 'element',
}
export type IObjectType = keyof typeof ObjectType;

export default IObjectType;
