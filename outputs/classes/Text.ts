import InternalHandler from '../InternalHandler';
import { IText } from '../interfaces';
import CharacterData, { ICharacterDataRps, rpCharacterDataKeys } from './CharacterData';
import Slotable, { ISlotableRps, rpSlotableKeys } from '../mixins/Slotable';

// tslint:disable-next-line:variable-name
const TextBase = Slotable(CharacterData);

export default class Text extends TextBase implements IText {
  protected readonly _: ITextRps = {};

  // constructor required for this class

  constructor(data?: string) {
    super();
    InternalHandler.construct(this, [data]);
  }

  // properties

  public get wholeText(): string {
    return InternalHandler.get<IText, string>(this, 'wholeText');
  }

  // methods

  public splitText(offset: number): IText {
    return InternalHandler.run<IText, IText>(this, 'splitText', [offset]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpTextKeys: Set<string> = new Set([...rpCharacterDataKeys, ...rpSlotableKeys]);

export interface ITextRps extends ICharacterDataRps, ISlotableRps {
  readonly wholeText?: string;
}

export function setTextRps(instance: IText, data: ITextRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpTextKeys.has(key)) {
      throw new Error(`${key} is not a property of Text`);
    }
    properties[key] = value;
  });
}
