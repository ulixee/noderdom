import StateMachine from '../../base/StateMachine';
import { ILinkStyle } from '../../base/interfaces/official';
import { ISuperStyleSheet } from '../../base/interfaces/super';
import LinkStyleBase, { ILinkStyleProperties } from '../../base/official-mixins/LinkStyle';
import { createSuperStyleSheet } from '../create';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ILinkStyle, ILinkStyleProperties>();

export default class LinkStyle extends LinkStyleBase implements ILinkStyle {
  public get sheet(): ISuperStyleSheet {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperStyleSheet(awaitedPath.addProperty('sheet'), awaitedOptions);
  }
}
