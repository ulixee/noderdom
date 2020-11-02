import StateMachine from '../../base/StateMachine';
import { IStorage } from '../../base/interfaces/official';
import { StorageGenerator, IStorageProperties } from '../../base/official-klasses/Storage';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IStorage, IStorageProperties>();
const StorageBaseClass = StorageGenerator();

export default class Storage extends StorageBaseClass implements IStorage {}
