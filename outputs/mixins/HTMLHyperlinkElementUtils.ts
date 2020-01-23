import InternalHandler from '../InternalHandler';
import { IHTMLHyperlinkElementUtils } from '../interfaces';

type Constructor<T = {}> = new (...args: any[]) => T;

export default function HTMLHyperlinkElementUtils<TBase extends Constructor>(base: TBase) {
  return class extends base implements IHTMLHyperlinkElementUtils {
    public get hash(): string {
      return InternalHandler.get<IHTMLHyperlinkElementUtils, string>(this, 'hash');
    }

    public set hash(value: string) {
      InternalHandler.set<IHTMLHyperlinkElementUtils, string>(this, 'hash', value);
    }

    public get host(): string {
      return InternalHandler.get<IHTMLHyperlinkElementUtils, string>(this, 'host');
    }

    public set host(value: string) {
      InternalHandler.set<IHTMLHyperlinkElementUtils, string>(this, 'host', value);
    }

    public get hostname(): string {
      return InternalHandler.get<IHTMLHyperlinkElementUtils, string>(this, 'hostname');
    }

    public set hostname(value: string) {
      InternalHandler.set<IHTMLHyperlinkElementUtils, string>(this, 'hostname', value);
    }

    public get href(): string {
      return InternalHandler.get<IHTMLHyperlinkElementUtils, string>(this, 'href');
    }

    public set href(value: string) {
      InternalHandler.set<IHTMLHyperlinkElementUtils, string>(this, 'href', value);
    }

    public get origin(): string {
      return InternalHandler.get<IHTMLHyperlinkElementUtils, string>(this, 'origin');
    }

    public get password(): string {
      return InternalHandler.get<IHTMLHyperlinkElementUtils, string>(this, 'password');
    }

    public set password(value: string) {
      InternalHandler.set<IHTMLHyperlinkElementUtils, string>(this, 'password', value);
    }

    public get pathname(): string {
      return InternalHandler.get<IHTMLHyperlinkElementUtils, string>(this, 'pathname');
    }

    public set pathname(value: string) {
      InternalHandler.set<IHTMLHyperlinkElementUtils, string>(this, 'pathname', value);
    }

    public get port(): string {
      return InternalHandler.get<IHTMLHyperlinkElementUtils, string>(this, 'port');
    }

    public set port(value: string) {
      InternalHandler.set<IHTMLHyperlinkElementUtils, string>(this, 'port', value);
    }

    public get protocol(): string {
      return InternalHandler.get<IHTMLHyperlinkElementUtils, string>(this, 'protocol');
    }

    public set protocol(value: string) {
      InternalHandler.set<IHTMLHyperlinkElementUtils, string>(this, 'protocol', value);
    }

    public get search(): string {
      return InternalHandler.get<IHTMLHyperlinkElementUtils, string>(this, 'search');
    }

    public set search(value: string) {
      InternalHandler.set<IHTMLHyperlinkElementUtils, string>(this, 'search', value);
    }

    public get username(): string {
      return InternalHandler.get<IHTMLHyperlinkElementUtils, string>(this, 'username');
    }

    public set username(value: string) {
      InternalHandler.set<IHTMLHyperlinkElementUtils, string>(this, 'username', value);
    }
  };
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLHyperlinkElementUtilsKeys: Set<string> = new Set([]);

export interface IHTMLHyperlinkElementUtilsRps {
  readonly origin?: string;
}
