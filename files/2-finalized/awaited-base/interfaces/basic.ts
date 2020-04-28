// tslint:disable: prettier
/// <reference no-default-lib="true"/>
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



export type IDocumentReadyState = 'complete' | 'interactive' | 'loading';

export type IFontFaceLoadStatus = 'error' | 'loaded' | 'loading' | 'unloaded';

export type IFullscreenNavigationUI = 'auto' | 'hide' | 'show';

export type IScrollBehavior = 'auto' | 'smooth';

export type IScrollLogicalPosition = 'center' | 'end' | 'nearest' | 'start';

export type IVisibilityState = 'hidden' | 'prerender' | 'visible';

export type IBinaryData = ArrayBuffer | ArrayBufferView;

export interface IFontFaceDescriptors {
  display?: string;
  featureSettings?: string;
  stretch?: string;
  style?: string;
  unicodeRange?: string;
  variant?: string;
  variationSettings?: string;
  weight?: string;
}

export interface IFullscreenOptions {
  navigationUI?: IFullscreenNavigationUI;
}

export interface IGetRootNodeOptions {
  composed?: boolean;
}

export interface IScrollIntoViewOptions extends IScrollOptions {
  block?: IScrollLogicalPosition;
  inline?: IScrollLogicalPosition;
}

export interface IScrollOptions {
  behavior?: IScrollBehavior;
}