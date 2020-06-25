type Constructable<T = {}> = new (...args: any[]) => T;

export type Constructablish<T = {}> = Constructable | (Function & { prototype: T });

export default Constructable;
