import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLAnchorElement, IHTMLElement, IHTMLHyperlinkElementUtils, IDOMTokenList } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';
import { IHTMLHyperlinkElementUtilsProperties, HTMLHyperlinkElementUtilsPropertyKeys, HTMLHyperlinkElementUtilsConstantKeys } from '../official-mixins/HTMLHyperlinkElementUtils';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLAnchorElement, IHTMLAnchorElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLAnchorElement>('HTMLAnchorElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLAnchorElement>(getState, setState, awaitedHandler);

export function HTMLAnchorElementGenerator(HTMLElement: Constructable<IHTMLElement>, HTMLHyperlinkElementUtils: Constructable<IHTMLHyperlinkElementUtils>) {
  const Parent = (ClassMixer(HTMLElement, [HTMLHyperlinkElementUtils]) as unknown) as Constructable<IHTMLElement & IHTMLHyperlinkElementUtils>;

  return class HTMLAnchorElement extends Parent implements IHTMLAnchorElement, PromiseLike<IHTMLAnchorElement> {
    constructor() {
      super();
      setState(this, {
        createInstanceName: 'createHTMLAnchorElement',
      });
    }

    // properties

    public get download(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'download', false);
    }

    public get hreflang(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'hreflang', false);
    }

    public get referrerPolicy(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'referrerPolicy', false);
    }

    public get rel(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'rel', false);
    }

    public get relList(): IDOMTokenList {
      throw new Error('HTMLAnchorElement.relList getter not implemented');
    }

    public get target(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'target', false);
    }

    public get text(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'text', false);
    }

    public get type(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'type', false);
    }

    public then<TResult1 = IHTMLAnchorElement, TResult2 = never>(onfulfilled?: ((value: IHTMLAnchorElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, HTMLAnchorElementPropertyKeys, HTMLAnchorElementConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLAnchorElementProperties extends IHTMLElementProperties, IHTMLHyperlinkElementUtilsProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly download?: Promise<string>;
  readonly hreflang?: Promise<string>;
  readonly referrerPolicy?: Promise<string>;
  readonly rel?: Promise<string>;
  readonly relList?: IDOMTokenList;
  readonly target?: Promise<string>;
  readonly text?: Promise<string>;
  readonly type?: Promise<string>;
}

export const HTMLAnchorElementPropertyKeys = [...HTMLElementPropertyKeys, ...HTMLHyperlinkElementUtilsPropertyKeys, 'download', 'hreflang', 'referrerPolicy', 'rel', 'relList', 'target', 'text', 'type'];

export const HTMLAnchorElementConstantKeys = [...HTMLElementConstantKeys, ...HTMLHyperlinkElementUtilsConstantKeys];
