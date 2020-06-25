import { IBody } from '../../base/interfaces/official';
import BodyBase, { IBodyProperties } from '../../base/official-mixins/Body';
export declare const getState: <C = IBody, P = IBodyProperties>(instance: C) => P, setState: <P = IBodyProperties>(instance: IBody, properties: P) => void;
export default class Body extends BodyBase implements IBody {
}
