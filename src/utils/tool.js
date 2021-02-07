function getTarget(ev) {
  const e = ev || window.event;
  return e.target || e.srcElement;
}

function getEventType (ev) {
  const e = ev || window.event;
  return e.type;
}

export {
  getTarget,
  getEventType
}