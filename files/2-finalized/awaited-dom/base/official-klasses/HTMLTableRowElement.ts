import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IHTMLTableRowElement, IHTMLElement, IHTMLTableCellElement } from '../interfaces/official';
import { ISuperHTMLCollection } from '../interfaces/super';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLTableRowElement, IHTMLTableRowElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLTableRowElement>('HTMLTableRowElement', getState, setState);
export const nodeAttacher = new NodeAttacher<IHTMLTableRowElement>(getState, setState, awaitedHandler);

export function HTMLTableRowElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLTableRowElement extends HTMLElement implements IHTMLTableRowElement, PromiseLike<IHTMLTableRowElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLTableRowElement>(this, HTMLTableRowElementConstantKeys, HTMLTableRowElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLTableRowElement',
      });
    }

    // properties

    public get align(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'align', false);
    }

    public get bgColor(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'bgColor', false);
    }

    public get cells(): ISuperHTMLCollection {
      throw new Error('HTMLTableRowElement.cells getter not implemented');
    }

    public get ch(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'ch', false);
    }

    public get chOff(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'chOff', false);
    }

    public get rowIndex(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'rowIndex', false);
    }

    public get sectionRowIndex(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'sectionRowIndex', false);
    }

    public get vAlign(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'vAlign', false);
    }

    // methods

    public deleteCell(index: number): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'deleteCell', [index]);
    }

    public insertCell(index?: number): IHTMLTableCellElement {
      throw new Error('HTMLTableRowElement.insertCell not implemented');
    }

    public then<TResult1 = IHTMLTableRowElement, TResult2 = never>(onfulfilled?: ((value: IHTMLTableRowElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLTableRowElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly align?: Promise<string>;
  readonly bgColor?: Promise<string>;
  readonly cells?: ISuperHTMLCollection;
  readonly ch?: Promise<string>;
  readonly chOff?: Promise<string>;
  readonly rowIndex?: Promise<number>;
  readonly sectionRowIndex?: Promise<number>;
  readonly vAlign?: Promise<string>;
}

export const HTMLTableRowElementPropertyKeys = [...HTMLElementPropertyKeys, 'align', 'bgColor', 'cells', 'ch', 'chOff', 'rowIndex', 'sectionRowIndex', 'vAlign'];

export const HTMLTableRowElementConstantKeys = [...HTMLElementConstantKeys];
