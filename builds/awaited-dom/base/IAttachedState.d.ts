export default interface IAttachedState {
    id: number;
    type: string;
    iterableIsCustomType: boolean;
    iterableIds?: number[];
    iterableItems?: any[];
    properties?: {
        [key: string]: any;
    };
}
