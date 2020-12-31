import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IAbstractRange } from '../interfaces/official';
import { ISuperNode } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IAbstractRange, IAbstractRangeProperties>();
export const awaitedHandler = new AwaitedHandler<IAbstractRange>('AbstractRange', getState, setState);

export function AbstractRangeGenerator() {
  return class AbstractRange implements IAbstractRange {
    constructor() {
      initializeConstantsAndProperties<AbstractRange>(this, AbstractRangeConstantKeys, AbstractRangePropertyKeys);
    }

    // properties

    public get collapsed(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'collapsed', false);
    }

    public get endContainer(): ISuperNode {
      throw new Error('AbstractRange.endContainer getter not implemented');
    }

    public get endOffset(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'endOffset', false);
    }

    public get startContainer(): ISuperNode {
      throw new Error('AbstractRange.startContainer getter not implemented');
    }

    public get startOffset(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'startOffset', false);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IAbstractRangeProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly collapsed?: Promise<boolean>;
  readonly endContainer?: ISuperNode;
  readonly endOffset?: Promise<number>;
  readonly startContainer?: ISuperNode;
  readonly startOffset?: Promise<number>;
}

export const AbstractRangePropertyKeys = ['collapsed', 'endContainer', 'endOffset', 'startContainer', 'startOffset'];

export const AbstractRangeConstantKeys = [];
