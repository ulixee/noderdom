export enum ObjectStruct {
  class = 'class',
  interface = 'interface',
}
export type IObjectStruct = keyof typeof ObjectStruct;

export default IObjectStruct;
