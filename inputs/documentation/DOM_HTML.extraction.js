// https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API

function extractInto(interfacesByCategory, category, selector) {
  const interfacesByName = {};
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
    interfacesByName[name] = { i, name, url, category, selector, deprecated, experimental, obsolete };
  });
  interfacesByCategory[category] = interfacesByName;
}

const data = { url: document.location.href, interfacesByCategory: {} };

extractInto(data.interfacesByCategory, 'BrowserWindow', '#Web_app_and_browser_integration_interfaces');
extractInto(data.interfacesByCategory, 'CanvasAndImage', '#Canvas_and_image_interfaces');
extractInto(data.interfacesByCategory, 'DragDrop', '#Drag_and_drop_interfaces');
extractInto(data.interfacesByCategory, 'HTMLElements', '#HTML_element_interfaces_2');
extractInto(data.interfacesByCategory, 'FormSupport', '#Form_support_interfaces');
extractInto(data.interfacesByCategory, 'Media', '#Media_interfaces');
extractInto(data.interfacesByCategory, 'Miscellaneous', '#Miscellaneous_and_supporting_interfaces');
extractInto(data.interfacesByCategory, 'PageHistory', '#Page_history_interfaces');
extractInto(data.interfacesByCategory, 'WebComponents', '#Web_Components_interfaces');

extractInto(data.interfacesByCategory, 'ExternalWebStorage', '#Web_storage_interfaces');
extractInto(data.interfacesByCategory, 'ExternalWebWorkers', '#Web_Workers_interfaces');
extractInto(data.interfacesByCategory, 'ExternalWebSocket', '#WebSocket_interfaces');
extractInto(data.interfacesByCategory, 'ExternalServerSentEvents', '#Server-sent_events_interfaces');

data;
