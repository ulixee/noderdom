import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { ISuperText } from '../interfaces/super';
import { ICharacterDataIsolate, INodeIsolate } from '../interfaces/isolate';
import { ICharacterDataIsolateProperties, CharacterDataIsolatePropertyKeys, CharacterDataIsolateConstantKeys } from '../isolate-mixins/CharacterDataIsolate';
import { INodeIsolateProperties, NodeIsolatePropertyKeys, NodeIsolateConstantKeys } from '../isolate-mixins/NodeIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperText, ISuperTextProperties>();
export const awaitedHandler = new AwaitedHandler<ISuperText>('SuperText', getState, setState);
export const nodeAttacher = new NodeAttacher<ISuperText>(getState, awaitedHandler);

export function SuperTextGenerator(CharacterDataIsolate: Constructable<ICharacterDataIsolate>, NodeIsolate: Constructable<INodeIsolate>) {
  const Parent = (ClassMixer(CharacterDataIsolate, [NodeIsolate]) as unknown) as Constructable<ICharacterDataIsolate & INodeIsolate>;

  return class SuperText extends Parent implements ISuperText, PromiseLike<ISuperText> {
    constructor(_data?: string) {
      super();
      initializeConstantsAndProperties<SuperText>(this, SuperTextConstantKeys, SuperTextPropertyKeys);
      setState(this, {
        createInstanceName: 'createSuperText',
      });
    }

    // properties

    public get wholeText(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'wholeText', false);
    }

    // methods

    public splitText(offset: number): Promise<ISuperText> {
      return awaitedHandler.runMethod<ISuperText>(this, 'splitText', [offset]);
    }

    public then<TResult1 = ISuperText, TResult2 = never>(onfulfilled?: ((value: ISuperText) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISuperTextProperties extends ICharacterDataIsolateProperties, INodeIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly wholeText?: Promise<string>;
}

export const SuperTextPropertyKeys = [...CharacterDataIsolatePropertyKeys, ...NodeIsolatePropertyKeys, 'wholeText'];

export const SuperTextConstantKeys = [...CharacterDataIsolateConstantKeys, ...NodeIsolateConstantKeys];
