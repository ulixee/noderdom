import StateMachine from '../../base/StateMachine';
import { IBlob } from '../../base/interfaces/official';
import { BlobGenerator, IBlobProperties } from '../../base/official-klasses/Blob';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IBlob, IBlobProperties>();
const BlobBaseClass = BlobGenerator();

export default class Blob extends BlobBaseClass implements IBlob {}
