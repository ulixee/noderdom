// https://svgwg.org/svg2-draft/types.html#InterfaceSVGElement
interface SVGElement : Element {};

SVGElement includes GlobalEventHandlers;
SVGElement includes DocumentAndElementEventHandlers;
// SVGElement includes SVGElementInstance;
SVGElement includes HTMLOrSVGElement;
