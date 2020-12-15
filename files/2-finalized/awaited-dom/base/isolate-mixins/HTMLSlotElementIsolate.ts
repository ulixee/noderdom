import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLSlotElementIsolate } from '../interfaces/isolate';
import { IAssignedNodesOptions } from '../interfaces/official';
import { ISuperElement, ISuperNode } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLSlotElementIsolate, IHTMLSlotElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLSlotElementIsolate>('HTMLSlotElementIsolate', getState, setState);

export default class HTMLSlotElementIsolate implements IHTMLSlotElementIsolate {
  public get name(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'name', false);
  }

  // methods

  public assignedElements(options?: IAssignedNodesOptions): Promise<Iterable<ISuperElement>> {
    return awaitedHandler.runMethod<Iterable<ISuperElement>>(this, 'assignedElements', [options]);
  }

  public assignedNodes(options?: IAssignedNodesOptions): Promise<Iterable<ISuperNode>> {
    return awaitedHandler.runMethod<Iterable<ISuperNode>>(this, 'assignedNodes', [options]);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLSlotElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly name?: Promise<string>;
}

export const HTMLSlotElementIsolatePropertyKeys = ['name'];

export const HTMLSlotElementIsolateConstantKeys = [];
