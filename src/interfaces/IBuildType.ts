export enum BuildType {
  awaited = 'awaited',
  detached = 'detached',
  standard = 'standard',
}
export type IBuildType = keyof typeof BuildType;

export default IBuildType;
