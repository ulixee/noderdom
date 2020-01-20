import * as Types from './types';
import { makeNullable } from './helpers';
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

  public printLine(c: string) {
    this.print(c);
    this.endLine();
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
      this.output += this.getIndentString(this.indent);
      this.lineStart = false;
    }
    this.output += s;
  }

  public printComment(comment: string | null | undefined) {
    if (!comment) return;
    comment.split('\n').forEach(l => this.printLine(l));
  }

  public printSeparatorLine(comment?: string) {
    if (this.isStartOfNewSection) return;
    this.endLine();
    if (comment) this.printLine(comment);
  }

  public printDepreciated() {
    this.print(`/** @deprecated */`);
  }

  public reset(): void {
    this.output = '';
    this.indent = 0;
    this.lineStart = true;
    // this.stack = [];
  }

  public endLine() {
    this.output += this.newLine;
    this.lineStart = true;
  }

  public printSignatures(
    method: {
      signature?: Types.Signature[];
    },
    prefix: string,
    name: string,
    components: Components,
    convertToIType: boolean = false,
  ) {
    if (method.signature) {
      method.signature.forEach(s => this.emitSignature(s, prefix, name, components, convertToIType));
    }
  }

  private emitSignature(
    s: Types.Signature,
    prefix: string | undefined,
    name: string | undefined,
    components: Components,
    convertToIType: boolean = false,
  ) {
    const paramsString = s.param ? components.paramsToString(s.param, convertToIType) : '';
    let returnType = components.convertDomTypeToTsType(s, convertToIType);
    returnType = s.nullable ? makeNullable(returnType) : returnType;
    if (s.deprecated) this.printDepreciated();
    this.printLine(`${prefix || ''}${name || ''}(${paramsString}): ${returnType};`);
  }

  private getIndentString(level: number) {
    return '  '.repeat(level);
  }
}
