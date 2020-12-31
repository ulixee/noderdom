import StateMachine from '../../base/StateMachine';
import { IXMLSerializer } from '../../base/interfaces/official';
import { XMLSerializerGenerator, IXMLSerializerProperties } from '../../base/official-klasses/XMLSerializer';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IXMLSerializer, IXMLSerializerProperties>();
const XMLSerializerBaseClass = XMLSerializerGenerator();

export default class XMLSerializer extends XMLSerializerBaseClass implements IXMLSerializer {}
