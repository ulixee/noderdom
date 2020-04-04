// tslint:disable: prettier
/// <reference no-default-lib="true"/>
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { IHTMLCollection, IHTMLElement } from './dom';

// DocumentIsh //////////

export interface IDocumentIsh {
  readonly URL: string;
  readonly anchors: IHTMLCollection;
  body: IHTMLElement | null;
  readonly characterSet: string;
}

// HTMLCollectionIsh //////////

export interface IHTMLCollectionIsh {}

// HTML ELEMENTS

// HTMLElementIsh //////////

export interface IHTMLElementIsh {}

// SVG ELEMENTS


