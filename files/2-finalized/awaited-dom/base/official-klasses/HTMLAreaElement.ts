import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLAreaElement, IHTMLElement, IHTMLHyperlinkElementUtils, IDOMTokenList } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';
import { IHTMLHyperlinkElementUtilsProperties, HTMLHyperlinkElementUtilsPropertyKeys, HTMLHyperlinkElementUtilsConstantKeys } from '../official-mixins/HTMLHyperlinkElementUtils';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLAreaElement, IHTMLAreaElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLAreaElement>('HTMLAreaElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLAreaElement>(getState, setState, awaitedHandler);

export function HTMLAreaElementGenerator(HTMLElement: Constructable<IHTMLElement>, HTMLHyperlinkElementUtils: Constructable<IHTMLHyperlinkElementUtils>) {
  const Parent = (ClassMixer(HTMLElement, [HTMLHyperlinkElementUtils]) as unknown) as Constructable<IHTMLElement & IHTMLHyperlinkElementUtils>;

  return class HTMLAreaElement extends Parent implements IHTMLAreaElement, PromiseLike<IHTMLAreaElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLAreaElement>(this, HTMLAreaElementConstantKeys, HTMLAreaElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLAreaElement',
      });
    }

    // properties

    public get alt(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'alt', false);
    }

    public get coords(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'coords', false);
    }

    public get download(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'download', false);
    }

    public get hreflang(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'hreflang', false);
    }

    public get noHref(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'noHref', false);
    }

    public get referrerPolicy(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'referrerPolicy', false);
    }

    public get rel(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'rel', false);
    }

    public get relList(): IDOMTokenList {
      throw new Error('HTMLAreaElement.relList getter not implemented');
    }

    public get shape(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'shape', false);
    }

    public get target(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'target', false);
    }

    public get type(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'type', false);
    }

    public then<TResult1 = IHTMLAreaElement, TResult2 = never>(onfulfilled?: ((value: IHTMLAreaElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLAreaElementProperties extends IHTMLElementProperties, IHTMLHyperlinkElementUtilsProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly alt?: Promise<string>;
  readonly coords?: Promise<string>;
  readonly download?: Promise<string>;
  readonly hreflang?: Promise<string>;
  readonly noHref?: Promise<boolean>;
  readonly referrerPolicy?: Promise<string>;
  readonly rel?: Promise<string>;
  readonly relList?: IDOMTokenList;
  readonly shape?: Promise<string>;
  readonly target?: Promise<string>;
  readonly type?: Promise<string>;
}

export const HTMLAreaElementPropertyKeys = [...HTMLElementPropertyKeys, ...HTMLHyperlinkElementUtilsPropertyKeys, 'alt', 'coords', 'download', 'hreflang', 'noHref', 'referrerPolicy', 'rel', 'relList', 'shape', 'target', 'type'];

export const HTMLAreaElementConstantKeys = [...HTMLElementConstantKeys, ...HTMLHyperlinkElementUtilsConstantKeys];
