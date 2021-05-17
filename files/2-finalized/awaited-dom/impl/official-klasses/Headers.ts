import StateMachine from '../../base/StateMachine';
import { IHeaders } from '../../base/interfaces/official';
import { HeadersGenerator, IHeadersProperties } from '../../base/official-klasses/Headers';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHeaders, IHeadersProperties>();
const HeadersBaseClass = HeadersGenerator();

export default class Headers extends HeadersBaseClass implements IHeaders {}
