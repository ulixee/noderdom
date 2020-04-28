import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import Constructable from '../Constructable';
import { IFontFace } from '../interfaces/official';
import { IBinaryData, IFontFaceDescriptors, IFontFaceLoadStatus } from '../interfaces/basic';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IFontFace, IFontFaceProperties>();
export const awaitedHandler = new AwaitedHandler<IFontFace>('FontFace', getState, setState);

export function FontFaceGenerator() {
  return class FontFace implements IFontFace {
    constructor(_family: string, _source: string | IBinaryData, _descriptors?: IFontFaceDescriptors) {
      initialize(FontFace, this);
    }

    // properties

    public get display(): Promise<string> | any {
      return awaitedHandler.getProperty<string>(this, 'display', false);
    }

    public set display(value: string | any) {
      awaitedHandler.setProperty<string>(this, 'display', value);
    }

    public get family(): Promise<string> | any {
      return awaitedHandler.getProperty<string>(this, 'family', false);
    }

    public set family(value: string | any) {
      awaitedHandler.setProperty<string>(this, 'family', value);
    }

    public get featureSettings(): Promise<string> | any {
      return awaitedHandler.getProperty<string>(this, 'featureSettings', false);
    }

    public set featureSettings(value: string | any) {
      awaitedHandler.setProperty<string>(this, 'featureSettings', value);
    }

    public get loaded(): Promise<Promise<IFontFace>> {
      return awaitedHandler.getProperty<Promise<IFontFace>>(this, 'loaded', false);
    }

    public get status(): Promise<IFontFaceLoadStatus> {
      return awaitedHandler.getProperty<IFontFaceLoadStatus>(this, 'status', false);
    }

    public get stretch(): Promise<string> | any {
      return awaitedHandler.getProperty<string>(this, 'stretch', false);
    }

    public set stretch(value: string | any) {
      awaitedHandler.setProperty<string>(this, 'stretch', value);
    }

    public get style(): Promise<string> | any {
      return awaitedHandler.getProperty<string>(this, 'style', false);
    }

    public set style(value: string | any) {
      awaitedHandler.setProperty<string>(this, 'style', value);
    }

    public get unicodeRange(): Promise<string> | any {
      return awaitedHandler.getProperty<string>(this, 'unicodeRange', false);
    }

    public set unicodeRange(value: string | any) {
      awaitedHandler.setProperty<string>(this, 'unicodeRange', value);
    }

    public get variant(): Promise<string> | any {
      return awaitedHandler.getProperty<string>(this, 'variant', false);
    }

    public set variant(value: string | any) {
      awaitedHandler.setProperty<string>(this, 'variant', value);
    }

    public get variationSettings(): Promise<string> | any {
      return awaitedHandler.getProperty<string>(this, 'variationSettings', false);
    }

    public set variationSettings(value: string | any) {
      awaitedHandler.setProperty<string>(this, 'variationSettings', value);
    }

    public get weight(): Promise<string> | any {
      return awaitedHandler.getProperty<string>(this, 'weight', false);
    }

    public set weight(value: string | any) {
      awaitedHandler.setProperty<string>(this, 'weight', value);
    }

    // methods

    public load(): Promise<Promise<IFontFace>> {
      return awaitedHandler.runMethod<Promise<IFontFace>>(this, 'load', []);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IFontFaceProperties {
  display?: Promise<string> | any;
  family?: Promise<string> | any;
  featureSettings?: Promise<string> | any;
  readonly loaded?: Promise<Promise<IFontFace>>;
  readonly status?: Promise<IFontFaceLoadStatus>;
  stretch?: Promise<string> | any;
  style?: Promise<string> | any;
  unicodeRange?: Promise<string> | any;
  variant?: Promise<string> | any;
  variationSettings?: Promise<string> | any;
  weight?: Promise<string> | any;
}

export const FontFacePropertyKeys = ['display', 'family', 'featureSettings', 'loaded', 'status', 'stretch', 'style', 'unicodeRange', 'variant', 'variationSettings', 'weight'];

export const FontFaceConstantKeys = [];

// INITIALIZE CONSTANTS AND PROPERTIES ///////////////////////////////////////

export function initialize(Klass: Constructable<IFontFace>, self: IFontFace) {
  initializeConstantsAndProperties<IFontFace>(Klass, self, FontFaceConstantKeys, FontFacePropertyKeys);
}
