import { RESIZE_BIGGER, RESIZE_SMALLER, UP, DOWN, LEFT, RIGHT, PRIMARY_ACTION, SECONDARY_ACTION } from './';

const bindEvents = events => {
  window.addEventListener('keydown', e => {
    switch(e.keyCode) {
      case 38: // UP
        events.up.forEach(fn => fn({ type: UP }));
      break;

      case 40: // DOWN
        events.down.forEach(fn => fn({ type: DOWN }));
      break;

      case 37: // LEFT
        events.left.forEach(fn => fn({ type: LEFT }));
      break;

      case 39: // RIGHT
        events.right.forEach(fn => fn({ type: RIGHT }));
      break;

      case 107: // PLUS -> RESIZE_BIGGER
        events.resizeBigger.forEach(fn => fn({ type: RESIZE_BIGGER }));
      break;

      case 109: // MINUS -> RESIZE_SMALLER
        events.resizeSmaller.forEach(fn => fn({ type: RESIZE_SMALLER }));
      break;

      default: // SEND TEXT_INPUT
        events.textInput.forEach(fn => fn({
          type: TEXT_INPUT,
          value: e.keyCode
        }));

    }
  });

  window.addEventListener('click', e => {
    e.preventDefault();
    events.primary.forEach(fn => fn({ type: PRIMARY_ACTION }));
  });

  window.addEventListener('contextmenu', e => {
    e.preventDefault();
    events.secondary.forEach(fn => fn({ type: SECONDARY_ACTION }));
  });
};


export default bindEvents;
