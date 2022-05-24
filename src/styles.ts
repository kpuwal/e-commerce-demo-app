import { StyleType } from './types';

export const styleType = {
  product: {
    h3: {fontSize: '30px'},
    h4: {fontSize: '27px'},
    size: '45%',
    counterWidth: '',
    attrSize: '100%',
    useCaps: true
  },
  cart: {
    h3: {fontSize: '1.5em'},
    h4: {fontSize: '1.5em'},
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
} as StyleType;
