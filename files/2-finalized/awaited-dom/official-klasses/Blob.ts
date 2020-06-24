import StateMachine from '../../awaited-base/StateMachine';
import { IBlob } from '../../awaited-base/interfaces/official';
import { BlobGenerator, IBlobProperties } from '../../awaited-base/official-klasses/Blob';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IBlob, IBlobProperties>();
const BlobBaseClass = BlobGenerator();

export default class Blob extends BlobBaseClass implements IBlob {}
