declare type Constructable<T = {}> = new (...args: any[]) => T;
export declare type Constructablish<T = {}> = Constructable | (Function & {
    prototype: T;
});
export default Constructable;
