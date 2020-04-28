export enum BuildType {
  base = 'base',
  impl = 'impl',
}
export type IBuildType = keyof typeof BuildType;

export default IBuildType;
