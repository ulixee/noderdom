import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IResponse, IBody, IBodyInit, IResponseInit, IHeaders, IResponseType } from '../interfaces/official';
import { IBodyProperties, BodyPropertyKeys, BodyConstantKeys } from '../official-mixins/Body';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IResponse, IResponseProperties>();
export const awaitedHandler = new AwaitedHandler<IResponse>('Response', getState, setState);

export function ResponseGenerator(Body: Constructable<IBody>) {
  return class Response extends Body implements IResponse {
    constructor(_body?: IBodyInit | null, _init?: IResponseInit) {
      super(_body, _init);
      initializeConstantsAndProperties<Response>(this, ResponseConstantKeys, ResponsePropertyKeys);
    }

    // properties

    public get headers(): IHeaders {
      throw new Error('Response.headers getter not implemented');
    }

    public get ok(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'ok', false);
    }

    public get redirected(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'redirected', false);
    }

    public get status(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'status', false);
    }

    public get statusText(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'statusText', false);
    }

    public get type(): Promise<IResponseType> {
      return awaitedHandler.getProperty<IResponseType>(this, 'type', false);
    }

    public get url(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'url', false);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IResponseProperties extends IBodyProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly headers?: IHeaders;
  readonly ok?: Promise<boolean>;
  readonly redirected?: Promise<boolean>;
  readonly status?: Promise<number>;
  readonly statusText?: Promise<string>;
  readonly type?: Promise<IResponseType>;
  readonly url?: Promise<string>;
}

export const ResponsePropertyKeys = [...BodyPropertyKeys, 'headers', 'ok', 'redirected', 'status', 'statusText', 'type', 'url'];

export const ResponseConstantKeys = [...BodyConstantKeys];
