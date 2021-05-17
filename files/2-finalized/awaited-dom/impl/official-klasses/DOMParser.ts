import StateMachine from '../../base/StateMachine';
import { IDOMParser, ISupportedType } from '../../base/interfaces/official';
import { ISuperDocument } from '../../base/interfaces/super';
import { DOMParserGenerator, IDOMParserProperties } from '../../base/official-klasses/DOMParser';
import { createSuperDocument } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDOMParser, IDOMParserProperties>();
const DOMParserBaseClass = DOMParserGenerator();

export default class DOMParser extends DOMParserBaseClass implements IDOMParser {
  public parseFromString(str: string, type: ISupportedType): ISuperDocument {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperDocument(awaitedPath.addMethod(this, 'parseFromString', str, type), awaitedOptions);
  }
}
