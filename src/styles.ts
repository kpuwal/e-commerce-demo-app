
const breakpoints = [480, 768, 992, 1200];
export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export const unit = 8;
export const widths = {
  largePageWidth: 1600,
  regularPageWidth: 1100,
  textPageWidth: 800,
};

export const colors = {
  primary: '#f1f1f1',
  // secondary: SKColors.teal.base,
  // accent: SKColors.pink.base,
  background: '#f1f1f1',
  // grey: SKColors.silver.dark,
  text: '#1f1f1f',
  // textSecondary: SKColors.grey.dark,
  // ...SKColors,
}

export const styleType = {
  product: {
    h3: {fontSize: '1.7em'},
    h4: {fontSize: '1.5em'},
    size: '35%',
    counterWidth: '',
    attrSize: '100%',
    useCaps: true
  },
  cart: {
    h3: {fontSize: '1.5em'},
    h4: {fontSize: '.5em'},
    size: '35%',
    counterWidth: '-14%',
    attrSize: '30%',
    useCaps: true
  },
  miniCart: {
    h3: {fontSize: '1em'},
    h4: {fontSize: '1em'},
    size: '100%',
    counterWidth: '-30%',
    attrSize: '35%',
    useCaps: false
  }
}