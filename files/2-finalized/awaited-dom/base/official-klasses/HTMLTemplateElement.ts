import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLTemplateElement, IHTMLElement, IDocumentFragment } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLTemplateElement, IHTMLTemplateElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLTemplateElement>('HTMLTemplateElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLTemplateElement>(getState, setState, awaitedHandler);

export function HTMLTemplateElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLTemplateElement extends HTMLElement implements IHTMLTemplateElement, PromiseLike<IHTMLTemplateElement> {
    constructor() {
      super();
      setState(this, {
        createInstanceName: 'createHTMLTemplateElement',
      });
    }

    // properties

    public get content(): IDocumentFragment {
      throw new Error('HTMLTemplateElement.content getter not implemented');
    }

    public then<TResult1 = IHTMLTemplateElement, TResult2 = never>(onfulfilled?: ((value: IHTMLTemplateElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, HTMLTemplateElementPropertyKeys, HTMLTemplateElementConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLTemplateElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly content?: IDocumentFragment;
}

export const HTMLTemplateElementPropertyKeys = [...HTMLElementPropertyKeys, 'content'];

export const HTMLTemplateElementConstantKeys = [...HTMLElementConstantKeys];
