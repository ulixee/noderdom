export enum DomType {
  awaited = 'awaited',
  detached = 'detached',
  standard = 'standard',
}
export type IDomType = keyof typeof DomType;

export default IDomType;
