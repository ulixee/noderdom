import StateMachine from '../../base/StateMachine';
import { ICSSStyleDeclaration, ICSSRule } from '../../base/interfaces/official';
import { CSSStyleDeclarationGenerator, ICSSStyleDeclarationProperties } from '../../base/official-klasses/CSSStyleDeclaration';
import { createCSSRule } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ICSSStyleDeclaration, ICSSStyleDeclarationProperties>();
const CSSStyleDeclarationBaseClass = CSSStyleDeclarationGenerator();

export default class CSSStyleDeclaration extends CSSStyleDeclarationBaseClass implements ICSSStyleDeclaration {
  public get parentRule(): ICSSRule {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createCSSRule(awaitedPath.addProperty(this, 'parentRule'), awaitedOptions);
  }
}
