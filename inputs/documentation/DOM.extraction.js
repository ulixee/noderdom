// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

function extractInto(interfacesByCategory, category, selector, overrides = {}) {
  const interfacesByName = interfacesByCategory[category] || {};
  let elem = document.querySelector(selector);
  while (elem.className !== 'index') {
    elem = elem.nextElementSibling;
  }
  elem.querySelectorAll('li a').forEach((n, i) => {
    const name = n.textContent;
    const url = n.href;
    const deprecated = !!n.parentElement.querySelector('i.icon-thumbs-down-alt');
    const experimental = !!n.parentElement.querySelector('i.icon-beaker');
    const obsolete = !!n.parentElement.querySelector('i.icon-trash');
    if (interfacesByName[name]) {
      throw new Error(`${name} already exists in interfacesByName: ${interfacesByName[name]}`)
    }
    interfacesByName[name] = Object.assign({ i, name, url, category, selector, deprecated, experimental, obsolete }, overrides);
  });
  interfacesByCategory[category] = interfacesByName;
}

const data = { url: document.location.href, interfacesByCategory: {} };

extractInto(data.interfacesByCategory, 'DOMCore', '#DOM_interfaces');
extractInto(data.interfacesByCategory, 'DOMCore', '#Obsolete_DOM_interfaces', { obsolete: true });
extractInto(data.interfacesByCategory, 'SVGElements', '#SVG_interfaces');
extractInto(data.interfacesByCategory, 'SVGStaticTypes', '#Static_type');
extractInto(data.interfacesByCategory, 'SVGAnimatedTypes', '#Animated_type');
extractInto(data.interfacesByCategory, 'SVGSMIL', '#SMIL_related_interfaces');
extractInto(data.interfacesByCategory, 'SVGOther', '#Other_SVG_interfaces');

data;
