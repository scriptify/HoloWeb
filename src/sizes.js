
export const INITIAL_HEIGHT = 80;
export const INITIAL_WIDTH = 120;

export const holoView = {
  top: (width, height) => {
    return (window.innerHeight / 2) - ( (width * 2 + height) / 2 );
  },
  left: width => {
    return window.innerWidth / 2 - width / 2 ;
  }
};

export const side1 = {
  height: width => width,
  width: height => height,
  left: () => 0,
  top: () => 0
};

export const side2 = {
  height: height => height,
  width: width => width,
  left: height => height,
  top: () => 0
};

export const side3 = {
  height: width => width,
  width: height => height,
  left: () => 0,
  top: () => 0
};

export const side4 = {
  height: height => height,
  width: width => width,
  left: width => -width,
  top: (width, height) => -( width + height )
};

export const persistSize = (width, height) => {
  localStorage.setItem('holoweb-width', width);
  localStorage.setItem('holoweb-height', height);
};

export const getCurrentSize = () => {
  const width = localStorage.getItem('holoweb-width') || INITIAL_WIDTH;
  const height = localStorage.getItem('holoweb-height') || INITIAL_HEIGHT;

  return { width, height };
};
