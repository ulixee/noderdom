import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IRequest, IBody, IRequestInfo, IRequestInit, IRequestCache, IRequestCredentials, IRequestDestination, IHeaders, IRequestMode, IRequestRedirect, IReferrerPolicy } from '../interfaces/official';
import { IBodyProperties, BodyPropertyKeys, BodyConstantKeys } from '../official-mixins/Body';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IRequest, IRequestProperties>();
export const awaitedHandler = new AwaitedHandler<IRequest>('Request', getState, setState);

export function RequestGenerator(Body: Constructable<IBody>) {
  return class Request extends Body implements IRequest {
    constructor(_input: IRequestInfo, _init?: IRequestInit) {
      super(_input, _init);
      initializeConstantsAndProperties<Request>(this, RequestConstantKeys, RequestPropertyKeys);
    }

    // properties

    public get cache(): Promise<IRequestCache> {
      return awaitedHandler.getProperty<IRequestCache>(this, 'cache', false);
    }

    public get credentials(): Promise<IRequestCredentials> {
      return awaitedHandler.getProperty<IRequestCredentials>(this, 'credentials', false);
    }

    public get destination(): Promise<IRequestDestination> {
      return awaitedHandler.getProperty<IRequestDestination>(this, 'destination', false);
    }

    public get headers(): IHeaders {
      throw new Error('Request.headers getter not implemented');
    }

    public get integrity(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'integrity', false);
    }

    public get isHistoryNavigation(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'isHistoryNavigation', false);
    }

    public get isReloadNavigation(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'isReloadNavigation', false);
    }

    public get keepalive(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'keepalive', false);
    }

    public get method(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'method', false);
    }

    public get mode(): Promise<IRequestMode> {
      return awaitedHandler.getProperty<IRequestMode>(this, 'mode', false);
    }

    public get redirect(): Promise<IRequestRedirect> {
      return awaitedHandler.getProperty<IRequestRedirect>(this, 'redirect', false);
    }

    public get referrer(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'referrer', false);
    }

    public get referrerPolicy(): Promise<IReferrerPolicy> {
      return awaitedHandler.getProperty<IReferrerPolicy>(this, 'referrerPolicy', false);
    }

    public get url(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'url', false);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IRequestProperties extends IBodyProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly cache?: Promise<IRequestCache>;
  readonly credentials?: Promise<IRequestCredentials>;
  readonly destination?: Promise<IRequestDestination>;
  readonly headers?: IHeaders;
  readonly integrity?: Promise<string>;
  readonly isHistoryNavigation?: Promise<boolean>;
  readonly isReloadNavigation?: Promise<boolean>;
  readonly keepalive?: Promise<boolean>;
  readonly method?: Promise<string>;
  readonly mode?: Promise<IRequestMode>;
  readonly redirect?: Promise<IRequestRedirect>;
  readonly referrer?: Promise<string>;
  readonly referrerPolicy?: Promise<IReferrerPolicy>;
  readonly url?: Promise<string>;
}

export const RequestPropertyKeys = [...BodyPropertyKeys, 'cache', 'credentials', 'destination', 'headers', 'integrity', 'isHistoryNavigation', 'isReloadNavigation', 'keepalive', 'method', 'mode', 'redirect', 'referrer', 'referrerPolicy', 'url'];

export const RequestConstantKeys = [...BodyConstantKeys];
