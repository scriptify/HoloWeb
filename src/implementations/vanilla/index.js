import classNames from '../../index';
import { holoView, side1, side2, side3, side4, getCurrentSize, persistSize } from '../../sizes';
import on, { RESIZE_BIGGER, RESIZE_SMALLER } from '../../events';

const { height, width } = getCurrentSize();
let currentHeight = parseFloat(height);
let currentWidth = parseFloat(width);

const setResizeListener = () => {

  on(RESIZE_BIGGER, e => {
    setSize(++currentWidth, ++currentHeight);
    persistSize(currentWidth, currentHeight);
  });

  on(RESIZE_SMALLER, e => {
    setSize(--currentWidth, --currentHeight);
    persistSize(currentWidth, currentHeight);
  });
};

setResizeListener();

const setMarkup = (content = '', element) => {

  const contentClass = 'holoweb-vanilla-content';

  element.innerHTML = `
    <div class="${ classNames.holoContainer }">
      <div class="${ classNames.holoView }">
        <div class="${ classNames.holoSide1 }">
          <div class="${ contentClass }">${ content }</div>
        </div>
        <div class="${ classNames.holoSide2 }">
          <div class="${ contentClass }">${ content }</div>
        </div>
        <div class="${ classNames.holoSide3 }">
          <div class="${ contentClass }">${ content }</div>
        </div>
        <div class="${ classNames.holoSide4 }">
          <div class="${ contentClass }">${ content }</div>
        </div>
      </div>
    </div>
  `;

  setSize(currentWidth, currentHeight);
};


export default setMarkup;

export const setSize = (width, height) => {
  // Pixel

  const domClass = classes => {
    // classes is in the following format
    return `.${ classes.split(' ').join('.') }`;
  };

  const holoViewDom = document.querySelector(domClass(classNames.holoView));
  const holoSide1 = document.querySelector(domClass(classNames.holoSide1));
  const holoSide2 = document.querySelector(domClass(classNames.holoSide2));
  const holoSide3 = document.querySelector(domClass(classNames.holoSide3));
  const holoSide4 = document.querySelector(domClass(classNames.holoSide4));
  const allContainer = document.querySelectorAll('.holoweb-vanilla-content');

  holoViewDom.style.left = holoView.left(width, height) + 'px';
  holoViewDom.style.top = holoView.top(width) + 'px';

  holoSide1.style.height = side1.height(width) + 'px';
  holoSide1.style.width = side1.width(height) + 'px';
  holoSide1.style.marginLeft = side1.left() + 'px';
  holoSide1.style.top = side1.top() + 'px';

  holoSide2.style.height = side2.height(height) + 'px';
  holoSide2.style.width = side2.width(width) + 'px';
  holoSide2.style.marginLeft = side2.left(height) + 'px';
  holoSide2.style.marginTop = side2.top() + 'px';

  holoSide3.style.height = side3.height(width) + 'px';
  holoSide3.style.width = side3.width(height) + 'px';
  holoSide3.style.marginLeft = side3.left() + 'px';
  holoSide3.style.marginTop = side3.top() + 'px';

  holoSide4.style.height = side4.height(height) + 'px';
  holoSide4.style.width = side4.width(width) + 'px';
  holoSide4.style.marginLeft = side4.left(width) + 'px';
  holoSide4.style.marginTop = side4.top(width, height) + 'px';

  allContainer.forEach(container => {
    container.style.width = height + 'px';
  });

};
