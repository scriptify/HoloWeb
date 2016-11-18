import './css/holo-view.css';
import setMarkup, { setSize } from './implementations/vanilla';
import on from './events';
import { PRIMARY_ACTION, SECONDARY_ACTION, RESIZE_BIGGER, RESIZE_SMALLER } from './events';

const classNames = {
  holoContainer: 'holo-container',
  holoView: 'holo-view',
  holoSide1: 'holo-side side-1',
  holoSide2: 'holo-side side-2',
  holoSide3: 'holo-side side-3',
  holoSide4: 'holo-side side-4'
};

export default classNames;
/******** Testing Vanilla JS implementation
setMarkup(`<div class="test-content" style="color: #FFF; font-size: 100%;">Hello World!</div>`, document.querySelector('#app'));
*/
