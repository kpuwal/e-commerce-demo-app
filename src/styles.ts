import { StyleType } from './types';

export const styleType = {
  product: {
    h3: {fontSize: '30px'},
    h4: {fontSize: '27px'},
    size: '45%',
    counterWidth: '',
    counterHeight: '',
    attrSize: '100%',
    useCaps: true
  },
  cart: {
    h3: {fontSize: '1.5em'},
    h4: {fontSize: '1.5em'},
    size: '35%',
    counterWidth: '-7%',
    counterHeight: '12em',
    attrSize: '30%',
    useCaps: true
  },
  miniCart: {
    h3: {fontSize: '.9em'},
    h4: {fontSize: '.9em'},
    size: '90%',
    counterWidth: '-15%',
    counterHeight: '5em',
    attrSize: '45%',
    useCaps: false
  }
} as StyleType;
