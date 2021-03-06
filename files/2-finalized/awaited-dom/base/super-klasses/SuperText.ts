import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { ISuperText } from '../interfaces/super';
import { ICharacterDataIsolate, INodeIsolate } from '../interfaces/isolate';
import { INonDocumentTypeChildNode, ISlotable } from '../interfaces/official';
import { ICharacterDataIsolateProperties, CharacterDataIsolatePropertyKeys, CharacterDataIsolateConstantKeys } from '../isolate-mixins/CharacterDataIsolate';
import { INodeIsolateProperties, NodeIsolatePropertyKeys, NodeIsolateConstantKeys } from '../isolate-mixins/NodeIsolate';
import { INonDocumentTypeChildNodeProperties, NonDocumentTypeChildNodePropertyKeys, NonDocumentTypeChildNodeConstantKeys } from '../official-mixins/NonDocumentTypeChildNode';
import { ISlotableProperties, SlotablePropertyKeys, SlotableConstantKeys } from '../official-mixins/Slotable';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperText, ISuperTextProperties>();
export const awaitedHandler = new AwaitedHandler<ISuperText>('SuperText', getState, setState);
export const nodeFactory = new NodeFactory<ISuperText>(getState, setState, awaitedHandler);

export function SuperTextGenerator(CharacterDataIsolate: Constructable<ICharacterDataIsolate>, NodeIsolate: Constructable<INodeIsolate>, NonDocumentTypeChildNode: Constructable<INonDocumentTypeChildNode>, Slotable: Constructable<ISlotable>) {
  const Parent = (ClassMixer(CharacterDataIsolate, [NodeIsolate, NonDocumentTypeChildNode, Slotable]) as unknown) as Constructable<ICharacterDataIsolate & INodeIsolate & INonDocumentTypeChildNode & ISlotable>;

  return class SuperText extends Parent implements ISuperText, PromiseLike<ISuperText> {
    constructor(_data?: string) {
      super(_data);
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
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, SuperTextPropertyKeys, SuperTextConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISuperTextProperties extends ICharacterDataIsolateProperties, INodeIsolateProperties, INonDocumentTypeChildNodeProperties, ISlotableProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly wholeText?: Promise<string>;
}

export const SuperTextPropertyKeys = [...CharacterDataIsolatePropertyKeys, ...NodeIsolatePropertyKeys, ...NonDocumentTypeChildNodePropertyKeys, ...SlotablePropertyKeys, 'wholeText'];

export const SuperTextConstantKeys = [...CharacterDataIsolateConstantKeys, ...NodeIsolateConstantKeys, ...NonDocumentTypeChildNodeConstantKeys, ...SlotableConstantKeys];
