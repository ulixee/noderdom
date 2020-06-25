import { BuildType } from './IBuildType';

export enum PathType {
  root = 'root',
  interfaces = 'interfaces',
  officialKlasses = 'officialKlasses',
  officialMixins = 'officialMixins',
  superKlasses = 'superKlasses',
  isolateMixins = 'isolateMixins',
}

export type IPathType = keyof typeof PathType;

export default interface IPaths {
  [PathType.root]: string;
  [PathType.interfaces]: string;
  [PathType.officialKlasses]: string;
  [PathType.officialMixins]: string;
  [PathType.superKlasses]: string;
  [PathType.isolateMixins]: string;
}

export interface IPathsByBuildType {
  [BuildType.base]: IPaths;
  [BuildType.impl]: Omit<IPaths, PathType.interfaces>;
}
