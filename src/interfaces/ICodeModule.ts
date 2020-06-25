export default interface ICodeModule {
  name: string;
  definedObjects: string[];
  referencedObjects: string[];
  category?: string;
  elementNamespace?: string;
  code: string;
}
