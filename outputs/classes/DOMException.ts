import InternalHandler from '../InternalHandler';
import { IDOMException } from '../interfaces';

export default class DOMException implements IDOMException {
  public static readonly ABORT_ERR: number = 20;
  public static readonly DATA_CLONE_ERR: number = 25;
  public static readonly DOMSTRING_SIZE_ERR: number = 2;
  public static readonly HIERARCHY_REQUEST_ERR: number = 3;
  public static readonly INDEX_SIZE_ERR: number = 1;
  public static readonly INUSE_ATTRIBUTE_ERR: number = 10;
  public static readonly INVALID_ACCESS_ERR: number = 15;
  public static readonly INVALID_CHARACTER_ERR: number = 5;
  public static readonly INVALID_MODIFICATION_ERR: number = 13;
  public static readonly INVALID_NODE_TYPE_ERR: number = 24;
  public static readonly INVALID_STATE_ERR: number = 11;
  public static readonly NAMESPACE_ERR: number = 14;
  public static readonly NETWORK_ERR: number = 19;
  public static readonly NOT_FOUND_ERR: number = 8;
  public static readonly NOT_SUPPORTED_ERR: number = 9;
  public static readonly NO_DATA_ALLOWED_ERR: number = 6;
  public static readonly NO_MODIFICATION_ALLOWED_ERR: number = 7;
  public static readonly QUOTA_EXCEEDED_ERR: number = 22;
  public static readonly SECURITY_ERR: number = 18;
  public static readonly SYNTAX_ERR: number = 12;
  public static readonly TIMEOUT_ERR: number = 23;
  public static readonly TYPE_MISMATCH_ERR: number = 17;
  public static readonly URL_MISMATCH_ERR: number = 21;
  public static readonly VALIDATION_ERR: number = 16;
  public static readonly WRONG_DOCUMENT_ERR: number = 4;

  public readonly ABORT_ERR: number = 20;
  public readonly DATA_CLONE_ERR: number = 25;
  public readonly DOMSTRING_SIZE_ERR: number = 2;
  public readonly HIERARCHY_REQUEST_ERR: number = 3;
  public readonly INDEX_SIZE_ERR: number = 1;
  public readonly INUSE_ATTRIBUTE_ERR: number = 10;
  public readonly INVALID_ACCESS_ERR: number = 15;
  public readonly INVALID_CHARACTER_ERR: number = 5;
  public readonly INVALID_MODIFICATION_ERR: number = 13;
  public readonly INVALID_NODE_TYPE_ERR: number = 24;
  public readonly INVALID_STATE_ERR: number = 11;
  public readonly NAMESPACE_ERR: number = 14;
  public readonly NETWORK_ERR: number = 19;
  public readonly NOT_FOUND_ERR: number = 8;
  public readonly NOT_SUPPORTED_ERR: number = 9;
  public readonly NO_DATA_ALLOWED_ERR: number = 6;
  public readonly NO_MODIFICATION_ALLOWED_ERR: number = 7;
  public readonly QUOTA_EXCEEDED_ERR: number = 22;
  public readonly SECURITY_ERR: number = 18;
  public readonly SYNTAX_ERR: number = 12;
  public readonly TIMEOUT_ERR: number = 23;
  public readonly TYPE_MISMATCH_ERR: number = 17;
  public readonly URL_MISMATCH_ERR: number = 21;
  public readonly VALIDATION_ERR: number = 16;
  public readonly WRONG_DOCUMENT_ERR: number = 4;

  // store readonly properties

  protected readonly _: IDOMExceptionRps = {};

  // constructor required for this class

  constructor(message?: string, name?: string) {
    InternalHandler.construct(this, [message, name]);
  }

  // properties

  public get code(): number {
    return InternalHandler.get<IDOMException, number>(this, 'code');
  }

  public get message(): string {
    return InternalHandler.get<IDOMException, string>(this, 'message');
  }

  public get name(): string {
    return InternalHandler.get<IDOMException, string>(this, 'name');
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpDOMExceptionKeys: Set<string> = new Set([]);

export interface IDOMExceptionRps {
  readonly code?: number;
  readonly message?: string;
  readonly name?: string;
}

export function setDOMExceptionRps(instance: IDOMException, data: IDOMExceptionRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpDOMExceptionKeys.has(key)) {
      throw new Error(`${key} is not a property of DOMException`);
    }
    properties[key] = value;
  });
}
