import InternalHandler from '../InternalHandler';
import { IDOMStringMap, IHTMLOrSVGElement } from '../interfaces';

export default class HTMLOrSVGElement implements IHTMLOrSVGElement {
  public get dataset(): IDOMStringMap {
    return InternalHandler.get<IHTMLOrSVGElement, IDOMStringMap>(this, 'dataset');
  }

  public get nonce(): string {
    return InternalHandler.get<IHTMLOrSVGElement, string>(this, 'nonce');
  }

  public set nonce(value: string) {
    InternalHandler.set<IHTMLOrSVGElement, string>(this, 'nonce', value);
  }

  public get tabIndex(): number {
    return InternalHandler.get<IHTMLOrSVGElement, number>(this, 'tabIndex');
  }

  public set tabIndex(value: number) {
    InternalHandler.set<IHTMLOrSVGElement, number>(this, 'tabIndex', value);
  }

  // methods

  public blur(): void {
    InternalHandler.run<IHTMLOrSVGElement, void>(this, 'blur', []);
  }

  public focus(): void {
    InternalHandler.run<IHTMLOrSVGElement, void>(this, 'focus', []);
  }
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLOrSVGElementProperties {
  dataset?: IDOMStringMap;
  nonce?: string;
  tabIndex?: number;
}

export interface IHTMLOrSVGElementReadonlyProperties {
  dataset?: IDOMStringMap;
}
