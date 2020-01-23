export default class InternalHandler {
  public static construct<C>(instance: C, _args: any[]) {
    throw new Error(`${(instance as any).constructor.name} constructor not implemented`);
  }
  public static get<C, T>(instance: C, name: string): T {
    throw new Error(`${(instance as any).constructor.name}.${name} getter not implemented`);
  }

  public static set<C, T>(instance: C, name: string, _value: T) {
    throw new Error(`${(instance as any).constructor.name}.${name} setter not implemented`);
  }

  public static run<C, T>(instance: C, name: string, _args: any[]): T {
    throw new Error(`${(instance as any).constructor.name}.${name} method not implemented`);
  }
}
