import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { ISuperCharacterData } from '../interfaces/super';
import { ICharacterDataIsolate, INodeIsolate, ITextIsolate } from '../interfaces/isolate';
import { INonDocumentTypeChildNode } from '../interfaces/official';
import { ICharacterDataIsolateProperties, CharacterDataIsolatePropertyKeys, CharacterDataIsolateConstantKeys } from '../isolate-mixins/CharacterDataIsolate';
import { INodeIsolateProperties, NodeIsolatePropertyKeys, NodeIsolateConstantKeys } from '../isolate-mixins/NodeIsolate';
import { INonDocumentTypeChildNodeProperties, NonDocumentTypeChildNodePropertyKeys, NonDocumentTypeChildNodeConstantKeys } from '../official-mixins/NonDocumentTypeChildNode';
import { ITextIsolateProperties, TextIsolatePropertyKeys, TextIsolateConstantKeys } from '../isolate-mixins/TextIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperCharacterData, ISuperCharacterDataProperties>();
export const awaitedHandler = new AwaitedHandler<ISuperCharacterData>('SuperCharacterData', getState, setState);
export const nodeAttacher = new NodeAttacher<ISuperCharacterData>(getState, setState, awaitedHandler);

export function SuperCharacterDataGenerator(CharacterDataIsolate: Constructable<ICharacterDataIsolate>, NodeIsolate: Constructable<INodeIsolate>, NonDocumentTypeChildNode: Constructable<INonDocumentTypeChildNode>, TextIsolate: Constructable<ITextIsolate>) {
  const Parent = (ClassMixer(CharacterDataIsolate, [NodeIsolate, NonDocumentTypeChildNode, TextIsolate]) as unknown) as Constructable<ICharacterDataIsolate & INodeIsolate & INonDocumentTypeChildNode & ITextIsolate>;

  return class SuperCharacterData extends Parent implements ISuperCharacterData, PromiseLike<ISuperCharacterData> {
    constructor() {
      super();
      initializeConstantsAndProperties<SuperCharacterData>(this, SuperCharacterDataConstantKeys, SuperCharacterDataPropertyKeys);
      setState(this, {
        createInstanceName: 'createSuperCharacterData',
      });
    }

    // properties

    public get data(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'data', false);
    }

    public get length(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'length', false);
    }

    // methods

    public substringData(offset: number, count: number): Promise<string> {
      return awaitedHandler.runMethod<string>(this, 'substringData', [offset, count]);
    }

    public then<TResult1 = ISuperCharacterData, TResult2 = never>(onfulfilled?: ((value: ISuperCharacterData) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISuperCharacterDataProperties extends ICharacterDataIsolateProperties, INodeIsolateProperties, INonDocumentTypeChildNodeProperties, ITextIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly data?: Promise<string>;
  readonly length?: Promise<number>;
}

export const SuperCharacterDataPropertyKeys = [...CharacterDataIsolatePropertyKeys, ...NodeIsolatePropertyKeys, ...NonDocumentTypeChildNodePropertyKeys, ...TextIsolatePropertyKeys, 'data', 'length'];

export const SuperCharacterDataConstantKeys = [...CharacterDataIsolateConstantKeys, ...NodeIsolateConstantKeys, ...NonDocumentTypeChildNodeConstantKeys, ...TextIsolateConstantKeys];