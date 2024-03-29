export interface IComponentFilterItem {
  isEnabled: boolean;
  isWritable?: boolean;
  isAbstract?: boolean;
}

export interface IComponentFilter extends IComponentFilterItem {
  propertiesByName: { [name: string]: IComponentFilterItem };
  methodsByName: { [name: string]: IComponentFilterItem };
}

export default interface IComponentFilters {
  [klassName: string]: IComponentFilter;
}
