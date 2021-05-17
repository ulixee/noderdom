import { IBody } from '../../base/interfaces/official';
import BodyBase, { IBodyProperties } from '../../base/official-mixins/Body';
export declare const getState: (instance: IBody) => IBodyProperties, setState: (instance: IBody, properties: Partial<IBodyProperties>) => void;
export default class Body extends BodyBase implements IBody {
}
