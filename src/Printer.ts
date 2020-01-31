import * as Types from './types';
import { makeNullable } from './utils';
import Components from './Components';

export default class Printer {
  private output: string;
  private indent: number;
  private lineStart: boolean;
  private isStartOfNewSection: boolean = true;
  // private stack: { content: string; indent: number }[] = [];

  constructor(private newLine: string = '\n') {
    this.reset();
  }

  public increaseIndent() {
    this.isStartOfNewSection = true;
    this.indent += 1;
  }

  public decreaseIndent() {
    this.isStartOfNewSection = false;
    this.indent -= 1;
  }

  public printLine(s: string = '') {
    this.print(s);
    this.endLine();
  }

  public printLines(s: string | null | undefined) {
    if (!s) return;
    s.split('\n').forEach(l => this.printLine(l));
  }

  public prependLine(s: string) {
    this.output = `${s}\n${this.output}`;
  }

  public getResult() {
    return this.output;
  }

  public print(s: string) {
    this.isStartOfNewSection = false;
    if (this.lineStart) {
      this.output += s ? this.getIndentString(this.indent) : '';
      this.lineStart = false;
    }
    this.output += s;
  }

  public printSeparatorLine(comment?: string) {
    if (this.isStartOfNewSection) return;
    this.endLine();
    if (comment) this.printLine(comment);
  }

  public reset(): void {
    this.output = '';
    this.indent = 0;
    this.lineStart = true;
    // this.stack = [];
  }

  public endLine(s: string = '') {
    if (s) {
      this.output += s;
    }
    this.output += this.newLine;
    this.lineStart = true;
  }

  public printSignatures(
    method: {
      signature?: Types.Signature[];
    },
    name: string,
    components: Components,
  ) {
    if (method.signature) {
      method.signature.forEach(s => this.printSignature(s, name, components));
    }
  }

  private printSignature(
    s: Types.Signature,
    name: string | undefined,
    components: Components,
  ) {
    const paramsString = s.param ? components.paramsToString(s.param, true) : '';
    let returnType = components.convertDomTypeToTsType(s, true);
    returnType = s.nullable ? makeNullable(returnType) : returnType;
    this.printLine(`${name || ''}(${paramsString}): ${returnType};`);
  }

  private getIndentString(level: number) {
    return '  '.repeat(level);
  }
}
