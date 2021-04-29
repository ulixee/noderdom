export default interface INodePointer {
  id: number;
  // the type of remote node
  type: string;
  preview?: string;
  iterableIsState?: boolean;
  iterableItems?: (string | number | boolean | object | INodePointer)[];
}
