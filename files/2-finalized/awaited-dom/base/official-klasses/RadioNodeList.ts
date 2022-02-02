import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IRadioNodeList, INodeList } from '../interfaces/official';
import { ISuperNode } from '../interfaces/super';
import { INodeListProperties, NodeListPropertyKeys, NodeListConstantKeys } from './NodeList';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IRadioNodeList, IRadioNodeListProperties>();
export const awaitedHandler = new AwaitedHandler<IRadioNodeList>('RadioNodeList', getState, setState);

export function RadioNodeListGenerator(NodeList: Constructable<INodeList>) {
  return class RadioNodeList extends NodeList implements IRadioNodeList {
    constructor() {
      super();
      // proxy supports indexed property access
      const proxy = new Proxy(this, {
        get(target, prop) {
          if (prop in target) {
            // @ts-ignore
            const value: any = target[prop];
            if (typeof value === 'function') return value.bind(target);
            return value;
          }

          // delegate to indexer property
          if ((typeof prop === 'string' || typeof prop === 'number') && !isNaN(prop as unknown as number)) {
            const param = parseInt(prop as string, 10);
            return target.item(param);
          }
        },
      });

      return proxy;
    }

    // properties

    public get value(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'value', false);
    }


    [index: number]: ISuperNode;

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, RadioNodeListPropertyKeys, RadioNodeListConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IRadioNodeListProperties extends INodeListProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly value?: Promise<string>;
}

export const RadioNodeListPropertyKeys = [...NodeListPropertyKeys, 'value'];

export const RadioNodeListConstantKeys = [...NodeListConstantKeys];
