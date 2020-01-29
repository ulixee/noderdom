import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { ICSSRule, ICSSStyleDeclaration } from '../interfaces';

export default class CSSStyleDeclaration implements ICSSStyleDeclaration {
  public get cssFloat(): string {
    return InternalHandler.get<ICSSStyleDeclaration, string>(this, 'cssFloat');
  }

  public set cssFloat(value: string) {
    InternalHandler.set<ICSSStyleDeclaration, string>(this, 'cssFloat', value);
  }

  public get cssText(): string {
    return InternalHandler.get<ICSSStyleDeclaration, string>(this, 'cssText');
  }

  public set cssText(value: string) {
    InternalHandler.set<ICSSStyleDeclaration, string>(this, 'cssText', value);
  }

  public get length(): number {
    return InternalHandler.get<ICSSStyleDeclaration, number>(this, 'length');
  }

  public get parentRule(): ICSSRule | null {
    return InternalHandler.get<ICSSStyleDeclaration, ICSSRule | null>(this, 'parentRule');
  }

  // methods

  public getPropertyPriority(property: string): string {
    return InternalHandler.run<ICSSStyleDeclaration, string>(this, 'getPropertyPriority', [property]);
  }

  public getPropertyValue(property: string): string {
    return InternalHandler.run<ICSSStyleDeclaration, string>(this, 'getPropertyValue', [property]);
  }

  public item(index: number): string {
    return InternalHandler.run<ICSSStyleDeclaration, string>(this, 'item', [index]);
  }

  public removeProperty(property: string): string {
    return InternalHandler.run<ICSSStyleDeclaration, string>(this, 'removeProperty', [property]);
  }

  public setProperty(property: string, value: string, priority?: string): void {
    InternalHandler.run<ICSSStyleDeclaration, void>(this, 'setProperty', [property, value, priority]);
  }

  [index: number]: string;
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface ICSSStyleDeclarationProperties {
  cssFloat?: string;
  cssText?: string;
  length?: number;
  parentRule?: ICSSRule | null;
}

export interface ICSSStyleDeclarationReadonlyProperties {
  length?: number;
  parentRule?: ICSSRule | null;
}

export const { getState, setState, setReadonlyOfCSSStyleDeclaration } = InternalStateGenerator<
  ICSSStyleDeclaration,
  ICSSStyleDeclarationProperties,
  ICSSStyleDeclarationReadonlyProperties
>('CSSStyleDeclaration');
