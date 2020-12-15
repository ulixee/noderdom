import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLTableRowElementIsolate } from '../interfaces/isolate';
import { ISuperHTMLCollection } from '../interfaces/super';
import { IHTMLTableCellElement } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLTableRowElementIsolate, IHTMLTableRowElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLTableRowElementIsolate>('HTMLTableRowElementIsolate', getState, setState);

export default class HTMLTableRowElementIsolate implements IHTMLTableRowElementIsolate {
  public get align(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'align', false);
  }

  public get bgColor(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'bgColor', false);
  }

  public get cells(): ISuperHTMLCollection {
    throw new Error('HTMLTableRowElementIsolate.cells getter not implemented');
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
    throw new Error('HTMLTableRowElementIsolate.insertCell not implemented');
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLTableRowElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly align?: Promise<string>;
  readonly bgColor?: Promise<string>;
  readonly cells?: ISuperHTMLCollection;
  readonly ch?: Promise<string>;
  readonly chOff?: Promise<string>;
  readonly rowIndex?: Promise<number>;
  readonly sectionRowIndex?: Promise<number>;
  readonly vAlign?: Promise<string>;
}

export const HTMLTableRowElementIsolatePropertyKeys = ['align', 'bgColor', 'cells', 'ch', 'chOff', 'rowIndex', 'sectionRowIndex', 'vAlign'];

export const HTMLTableRowElementIsolateConstantKeys = [];
