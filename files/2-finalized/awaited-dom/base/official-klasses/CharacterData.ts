import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { ICharacterData, INode, INonDocumentTypeChildNode } from '../interfaces/official';
import { INodeProperties, NodePropertyKeys, NodeConstantKeys } from './Node';
import { INonDocumentTypeChildNodeProperties, NonDocumentTypeChildNodePropertyKeys, NonDocumentTypeChildNodeConstantKeys } from '../official-mixins/NonDocumentTypeChildNode';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ICharacterData, ICharacterDataProperties>();
export const awaitedHandler = new AwaitedHandler<ICharacterData>('CharacterData', getState, setState);
export const nodeFactory = new NodeFactory<ICharacterData>(getState, setState, awaitedHandler);

export function CharacterDataGenerator(Node: Constructable<INode>, NonDocumentTypeChildNode: Constructable<INonDocumentTypeChildNode>) {
  const Parent = (ClassMixer(Node, [NonDocumentTypeChildNode]) as unknown) as Constructable<INode & INonDocumentTypeChildNode>;

  return class CharacterData extends Parent implements ICharacterData, PromiseLike<ICharacterData> {
    constructor() {
      super();
      initializeConstantsAndProperties<CharacterData>(this, CharacterDataConstantKeys, CharacterDataPropertyKeys);
      setState(this, {
        createInstanceName: 'createCharacterData',
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

    public then<TResult1 = ICharacterData, TResult2 = never>(onfulfilled?: ((value: ICharacterData) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ICharacterDataProperties extends INodeProperties, INonDocumentTypeChildNodeProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly data?: Promise<string>;
  readonly length?: Promise<number>;
}

export const CharacterDataPropertyKeys = [...NodePropertyKeys, ...NonDocumentTypeChildNodePropertyKeys, 'data', 'length'];

export const CharacterDataConstantKeys = [...NodeConstantKeys, ...NonDocumentTypeChildNodeConstantKeys];
