import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IElementContentEditable } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IElementContentEditable, IElementContentEditableProperties>();
export const awaitedHandler = new AwaitedHandler<IElementContentEditable>('ElementContentEditable', getState, setState);

export default class ElementContentEditable implements IElementContentEditable {
  public get contentEditable(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'contentEditable', false);
  }

  public get isContentEditable(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'isContentEditable', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IElementContentEditableProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly contentEditable?: Promise<string>;
  readonly isContentEditable?: Promise<boolean>;
}

export const ElementContentEditablePropertyKeys = ['contentEditable', 'isContentEditable'];

export const ElementContentEditableConstantKeys = [];
