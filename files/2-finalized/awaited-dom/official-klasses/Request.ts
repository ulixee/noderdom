import StateMachine from '../../awaited-base/StateMachine';
import { IRequest, IRequestInfo, IRequestInit, IHeaders } from '../../awaited-base/interfaces/official';
import { RequestGenerator, IRequestProperties } from '../../awaited-base/official-klasses/Request';
import { createHeaders } from '../create';
import Body from '../official-mixins/Body';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IRequest, IRequestProperties>();
const RequestBaseClass = RequestGenerator(Body);

export default class Request extends RequestBaseClass implements IRequest {
  constructor(_input: IRequestInfo, _init?: IRequestInit) {
    super(_input, _init);
  }

  // properties

  public get headers(): IHeaders {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHeaders(awaitedPath.addProperty('headers'), awaitedOptions);
  }
}
