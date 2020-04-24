// tslint:disable:variable-name
import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import { IBinaryData, IFontFaceDescriptors, IFontFaceLoadStatus } from '../interfaces/types';
import { IFontFace } from '../interfaces/dom';

export const { getState, setState, setHiddenState, setReadonlyOfFontFace } = StateMachine<
  IFontFace,
  IFontFaceProperties,
  IFontFaceReadonlyProperties
>('FontFace');

export const awaitedHandler = new AwaitedHandler<IFontFace>('FontFace', getState, setState);

export default class FontFace implements IFontFace {
  constructor(_family: string, _source: string | IBinaryData, _descriptors?: IFontFaceDescriptors) {
    initializeConstantsAndProperties<FontFace>(FontFace, this, FontFaceConstantKeys, FontFacePropertyKeys);
  }

  // properties

  public get display(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'display', false);
  }

  public set display(value: string) {
    awaitedHandler.setProperty<string>(this, 'display', value);
  }

  public get family(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'family', false);
  }

  public set family(value: string) {
    awaitedHandler.setProperty<string>(this, 'family', value);
  }

  public get featureSettings(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'featureSettings', false);
  }

  public set featureSettings(value: string) {
    awaitedHandler.setProperty<string>(this, 'featureSettings', value);
  }

  public get loaded(): Promise<Promise<IFontFace>> {
    return awaitedHandler.getProperty<Promise<IFontFace>>(this, 'loaded', false);
  }

  public get status(): Promise<IFontFaceLoadStatus> {
    return awaitedHandler.getProperty<IFontFaceLoadStatus>(this, 'status', false);
  }

  public get stretch(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'stretch', false);
  }

  public set stretch(value: string) {
    awaitedHandler.setProperty<string>(this, 'stretch', value);
  }

  public get style(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'style', false);
  }

  public set style(value: string) {
    awaitedHandler.setProperty<string>(this, 'style', value);
  }

  public get unicodeRange(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'unicodeRange', false);
  }

  public set unicodeRange(value: string) {
    awaitedHandler.setProperty<string>(this, 'unicodeRange', value);
  }

  public get variant(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'variant', false);
  }

  public set variant(value: string) {
    awaitedHandler.setProperty<string>(this, 'variant', value);
  }

  public get variationSettings(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'variationSettings', false);
  }

  public set variationSettings(value: string) {
    awaitedHandler.setProperty<string>(this, 'variationSettings', value);
  }

  public get weight(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'weight', false);
  }

  public set weight(value: string) {
    awaitedHandler.setProperty<string>(this, 'weight', value);
  }

  // methods

  public load(): Promise<Promise<IFontFace>> {
    return awaitedHandler.runMethod<Promise<IFontFace>>(this, 'load', []);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IFontFaceReadonlyProperties {
  readonly loaded?: Promise<Promise<IFontFace>>;
  readonly status?: Promise<IFontFaceLoadStatus>;
}

export interface IFontFaceProperties extends IFontFaceReadonlyProperties {
  display?: Promise<string>;
  family?: Promise<string>;
  featureSettings?: Promise<string>;
  stretch?: Promise<string>;
  style?: Promise<string>;
  unicodeRange?: Promise<string>;
  variant?: Promise<string>;
  variationSettings?: Promise<string>;
  weight?: Promise<string>;
}

export const FontFacePropertyKeys = ['display', 'family', 'featureSettings', 'loaded', 'status', 'stretch', 'style', 'unicodeRange', 'variant', 'variationSettings', 'weight'];

export const FontFaceConstantKeys = [];
