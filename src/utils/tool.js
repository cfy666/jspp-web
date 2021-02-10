function getTarget(ev) {
  const e = ev || window.event;
  return e.target || e.srcElement;
}

function getEventType (ev) {
  const e = ev || window.event;
  return e.type;
}

function trimSpace (str) {
  return str.replace(/\s+/g, '');
}
export {
  getTarget,
  getEventType,
  trimSpace
}