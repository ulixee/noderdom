export default interface INodePointer {
    id: number;
    type: string;
    preview?: string;
    iterableIsState?: boolean;
    iterableItems?: (string | number | boolean | object | INodePointer)[];
}
