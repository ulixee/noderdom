import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import AwaitedIterator from '../AwaitedIterator';
import NodeFactory from '../NodeFactory';
import { IHTMLSelectElement, IHTMLElement, IHTMLFormElement, IHTMLOptionsCollection, IValidityState, IHTMLOptionElement } from '../interfaces/official';
import { ISuperNodeList, ISuperHTMLCollection, ISuperElement } from '../interfaces/super';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLSelectElement, IHTMLSelectElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLSelectElement>('HTMLSelectElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLSelectElement>(getState, setState, awaitedHandler);
export const awaitedIterator = new AwaitedIterator<IHTMLSelectElement, ISuperElement>(getState, setState, awaitedHandler);

export function HTMLSelectElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLSelectElement extends HTMLElement implements IHTMLSelectElement, PromiseLike<IHTMLSelectElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLSelectElement>(this, HTMLSelectElementConstantKeys, HTMLSelectElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLSelectElement',
        createIterableName: 'createSuperElement',
      });
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
          if (!isNaN(prop as number)) {
            const param = parseInt(prop as string, 10);
            return target.item(param);
          }
        },
      });

      recordProxy(proxy, this);
      return proxy;
    }

    // properties

    public get autocomplete(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'autocomplete', false);
    }

    public get autofocus(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'autofocus', false);
    }

    public get disabled(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'disabled', false);
    }

    public get form(): IHTMLFormElement {
      throw new Error('HTMLSelectElement.form getter not implemented');
    }

    public get labels(): ISuperNodeList {
      throw new Error('HTMLSelectElement.labels getter not implemented');
    }

    public get length(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'length', false);
    }

    public get multiple(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'multiple', false);
    }

    public get name(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'name', false);
    }

    public get options(): IHTMLOptionsCollection {
      throw new Error('HTMLSelectElement.options getter not implemented');
    }

    public get required(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'required', false);
    }

    public get selectedIndex(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'selectedIndex', false);
    }

    public get selectedOptions(): ISuperHTMLCollection {
      throw new Error('HTMLSelectElement.selectedOptions getter not implemented');
    }

    public get size(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'size', false);
    }

    public get type(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'type', false);
    }

    public get validationMessage(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'validationMessage', false);
    }

    public get validity(): Promise<IValidityState> {
      return awaitedHandler.getProperty<IValidityState>(this, 'validity', false);
    }

    public get value(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'value', false);
    }

    public get willValidate(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'willValidate', false);
    }

    // methods

    public checkValidity(): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'checkValidity', []);
    }

    public item(index: number): ISuperElement {
      throw new Error('HTMLSelectElement.item not implemented');
    }

    public namedItem(name: string): IHTMLOptionElement {
      throw new Error('HTMLSelectElement.namedItem not implemented');
    }

    public reportValidity(): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'reportValidity', []);
    }

    public then<TResult1 = IHTMLSelectElement, TResult2 = never>(onfulfilled?: ((value: IHTMLSelectElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public [Symbol.iterator](): IterableIterator<ISuperElement> {
      return awaitedIterator.iterateNodePointers(this)[Symbol.iterator]();
    }

    [index: number]: ISuperElement;
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLSelectElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;
  createIterableName: string;

  readonly autocomplete?: Promise<string>;
  readonly autofocus?: Promise<boolean>;
  readonly disabled?: Promise<boolean>;
  readonly form?: IHTMLFormElement;
  readonly labels?: ISuperNodeList;
  readonly length?: Promise<number>;
  readonly multiple?: Promise<boolean>;
  readonly name?: Promise<string>;
  readonly options?: IHTMLOptionsCollection;
  readonly required?: Promise<boolean>;
  readonly selectedIndex?: Promise<number>;
  readonly selectedOptions?: ISuperHTMLCollection;
  readonly size?: Promise<number>;
  readonly type?: Promise<string>;
  readonly validationMessage?: Promise<string>;
  readonly validity?: Promise<IValidityState>;
  readonly value?: Promise<string>;
  readonly willValidate?: Promise<boolean>;
}

export const HTMLSelectElementPropertyKeys = [...HTMLElementPropertyKeys, 'autocomplete', 'autofocus', 'disabled', 'form', 'labels', 'length', 'multiple', 'name', 'options', 'required', 'selectedIndex', 'selectedOptions', 'size', 'type', 'validationMessage', 'validity', 'value', 'willValidate'];

export const HTMLSelectElementConstantKeys = [...HTMLElementConstantKeys];
