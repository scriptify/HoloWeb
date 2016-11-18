import bindPeripheralEvents from './peripheral';

export const UP = 'UP';
export const DOWN = 'DOWN';
export const LEFT = 'LEFT';
export const RIGHT = 'RIGHT';
export const PRIMARY_ACTION = 'PRIMARY_ACTION';
export const SECONDARY_ACTION = 'SECONDARY_ACTION';
export const TEXT_INPUT = 'TEXT_INPUT';
export const RESIZE_BIGGER = 'RESIZE_BIGGER';
export const RESIZE_SMALLER = 'RESIZE_SMALLER';

let events = {
  up: [],
  down: [],
  left: [],
  right: [],
  primary: [],
  secondary: [],
  textInput: [],
  resizeBigger: [],
  resizeSmaller: []
}

const on = (eventType, cb) => {
  switch(eventType) {
    case UP:
      events.up.push(cb);
    break;
    case DOWN:
      events.down.push(cb);
    break;
    case LEFT:
      events.left.push(cb);
    break;
    case RIGHT:
      events.right.push(cb);
    break;
    case PRIMARY_ACTION:
      events.primary.push(cb);
    break;
    case SECONDARY_ACTION:
      events.secondary.push(cb);
    break;
    case TEXT_INPUT:
      events.textInput.push(cb);
    break;
    case RESIZE_BIGGER:
      events.resizeBigger.push(cb);
    break;
    case RESIZE_SMALLER:
      events.resizeSmaller.push(cb);
    break;
  }
};

bindPeripheralEvents(events);

export default on;
