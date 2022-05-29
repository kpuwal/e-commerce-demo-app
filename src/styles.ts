import { StyleType } from './types';

export const styleType = {
  product: {
    attributeName: {
      fontSize: '27px',
      fontWeight: 400
    },
    attributeBrand: {
      fontSize: '27px',
      fontWeight: 600
    },
    attrHeaderPadding: '13px',
    attrLabel: {
      textTransform: 'uppercase',
      fontSize: '18px',
      fontWeight: 700,
    },
    attrSwatch: {
      colorSizeBorder: '32px',
      isCart: false,
      colorPad: '4px',
      textSizeW: '63px',
      textSizeH: '45px',
      textPad: '12px',
      textFont: '16px'
    },
    priceFont: {
      fontSize: '18px',
      fontWeight: 700
    },
    size: '45%',
    counterWidth: '',
    counterHeight: '',
    attrContainerSize: '100%'
  },

  cart: {
    attributeName: {
      fontSize: '30px',
      fontWeight: 400
    },
    attributeBrand: {
      fontSize: '30px',
      fontWeight: 600
    },
    attrHeaderPadding: '20px',
    attrLabel: {
      textTransform: 'uppercase',
      fontSize: '',
      fontWeight: 0,
    },
    attrSwatch: {
      colorSizeBorder: '36px',
      isCart: true,
      colorPad: '6px',
      textSizeW: '63px',
      textSizeH: '45px',
      textPad: '8px',
      textFont: '16px'
    },
    priceFont: {
      fontSize: '24px',
      fontWeight: 700
    },
    size: '35%',
    counterWidth: '-7%',
    counterHeight: '12em',
    attrContainerSize: '30%'
  },

  miniCart: {
    attributeName: {
      fontSize: '16px',
      fontWeight: 300,
    },
    attributeBrand: {
      fontSize: '16px',
      fontWeight: 300,
    },
    attrHeaderPadding: '4px',
    attrLabel: {
      textTransform: 'capitalize',
      fontSize: '14px',
      fontWeight: 400,
    },
    attrSwatch: {
      colorSizeBorder: '16px',
      isCart: true,
      colorPad: '4px',
      textSizeW: '42px',
      textSizeH: '24px',
      textPad: '8px',
      textFont: '10px'
    },
    priceFont: {
      fontSize: '16px',
      fontWeight: 500
    },
    size: '90%',
    counterWidth: '-15%',
    counterHeight: '8em',
    attrContainerSize: '45%'
  }
} as StyleType;
