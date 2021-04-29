import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLTableCellElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLTableCellElement, IHTMLTableCellElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLTableCellElement>('HTMLTableCellElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLTableCellElement>(getState, setState, awaitedHandler);

export function HTMLTableCellElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLTableCellElement extends HTMLElement implements IHTMLTableCellElement, PromiseLike<IHTMLTableCellElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLTableCellElement>(this, HTMLTableCellElementConstantKeys, HTMLTableCellElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLTableCellElement',
      });
    }

    public then<TResult1 = IHTMLTableCellElement, TResult2 = never>(onfulfilled?: ((value: IHTMLTableCellElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLTableCellElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;
}

export const HTMLTableCellElementPropertyKeys = [...HTMLElementPropertyKeys];

export const HTMLTableCellElementConstantKeys = [...HTMLElementConstantKeys];
