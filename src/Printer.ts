export default class Printer {
  public didPrint: boolean = false;
  private local: {
    output: string;
    indent: number;
    lineStart: boolean;
  };
  private isStartOfSection: boolean;
  private readonly parent: Printer;
  private readonly newLine: string = '\n';

  constructor(parent?: Printer) {
    if (parent) {
      this.parent = parent;
      this.parent.endLine();
    }
    this.reset();
  }

  public increaseIndent() {
    this.isStartOfSection = true;
    this.indent += 1;
  }

  public decreaseIndent() {
    this.isStartOfSection = false;
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
    this.isStartOfSection = false;
    if (this.lineStart) {
      this.output += s ? this.getIndentString(this.indent) : '';
      this.lineStart = false;
    }
    this.output += s;
  }

  public printSeparatorLine(comment?: string) {
    if (this.isStartOfSection && this.lineStart) return;
    this.printLine(comment);
  }

  public reset(): void {
    this.isStartOfSection = true;
    this.local = {
      output: '',
      indent: 0,
      lineStart: true,
    };
  }

  public endLine(s: string = '') {
    if (s) {
      this.output += s;
    }
    if (!this.lineStart) {
      this.output += this.newLine;
      this.lineStart = true;
    }
  }

  public deleteNewLine() {
    if (!this.lineStart) return;
    this.output = this.output.slice(0, -this.newLine.length);
  }

  // PRIVATE ////////

  private get output(): string {
    return this.parent ? this.parent.output : this.local.output;
  }

  private set output(value: string) {
    this.didPrint = !!value;
    if (this.parent) {
      this.parent.output = value;
    } else {
      this.local.output = value;
    }
  }

  private get indent(): number {
    return this.parent ? this.parent.indent : this.local.indent;
  }

  private set indent(value: number) {
    if (this.parent) {
      this.parent.indent = value;
    } else {
      this.local.indent = value;
    }
  }

  private get lineStart(): boolean {
    return this.parent ? this.parent.lineStart : this.local.lineStart;
  }

  private set lineStart(value: boolean) {
    if (this.parent) {
      this.parent.lineStart = value;
    } else {
      this.local.lineStart = value;
    }
  }

  private getIndentString(level: number) {
    return '  '.repeat(level);
  }
}
