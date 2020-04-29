import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import { ISuperText } from '../interfaces/super';
import { ICharacterData, INode, IText } from '../interfaces/official';
import { ICharacterDataProperties, CharacterDataPropertyKeys, CharacterDataConstantKeys } from '../official-klasses/CharacterData';
import { INodeProperties, NodePropertyKeys, NodeConstantKeys } from '../official-klasses/Node';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperText, ISuperTextProperties>();
export const awaitedHandler = new AwaitedHandler<ISuperText>('SuperText', getState, setState);

export function SuperTextGenerator(CharacterData: Constructable<ICharacterData>, Node: Constructable<INode>) {
  const Parent = (ClassMixer(CharacterData, [Node]) as unknown) as Constructable<ICharacterData & INode>;

  return class SuperText extends Parent implements ISuperText {
    constructor(_data?: string) {
      super();
      initialize(SuperText, this);
    }

    // properties

    public get wholeText(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'wholeText', false);
    }

    // methods

    public splitText(offset: number): Promise<IText> {
      return awaitedHandler.runMethod<IText>(this, 'splitText', [offset]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISuperTextProperties extends ICharacterDataProperties, INodeProperties {
  readonly wholeText?: Promise<string>;
}

export const SuperTextPropertyKeys = [...CharacterDataPropertyKeys, ...NodePropertyKeys, 'wholeText'];

export const SuperTextConstantKeys = [...CharacterDataConstantKeys, ...NodeConstantKeys];

// INITIALIZE CONSTANTS AND PROPERTIES ///////////////////////////////////////

export function initialize(Klass: Constructable<ISuperText>, self: ISuperText) {
  initializeConstantsAndProperties<ISuperText>(Klass, self, SuperTextConstantKeys, SuperTextPropertyKeys);
}
