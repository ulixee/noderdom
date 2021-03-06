import StateMachine from '../../base/StateMachine';
import { IResponse, IBodyInit, IResponseInit, IHeaders } from '../../base/interfaces/official';
import { ResponseGenerator, IResponseProperties } from '../../base/official-klasses/Response';
import { createHeaders } from '../create';
import Body from '../official-mixins/Body';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IResponse, IResponseProperties>();
const ResponseBaseClass = ResponseGenerator(Body);

export default class Response extends ResponseBaseClass implements IResponse {
  constructor(_body?: IBodyInit | null, _init?: IResponseInit) {
    super(_body, _init);
  }

  // properties

  public get headers(): IHeaders {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHeaders(awaitedPath.addProperty(this, 'headers'), awaitedOptions);
  }
}
