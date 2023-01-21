export type ThemeTypes = {
    colors: {
      colorLightBlue: string;
      colorDarkerGray: string
      colorDarkGray: string
      colorLightGray: string
      colorWhite: string
      colorBlack: string
    },
    device: {
      small: string
      custom500: string
      tablet: string
      desktop: string
    },
    mixins: object,
  }
  
  const theme:ThemeTypes = {
    colors: {
      colorLightBlue: 'rgba(3, 169, 244, 1)',
      colorDarkerGray: 'rgba(51, 51, 51, 1)',
      colorDarkGray: 'rgba(70, 70, 70, 1)',
      colorLightGray: 'rgba(235, 235, 235, 1)',
      colorWhite: 'rgba(255, 255, 255, 1)',
      colorBlack: 'rgba(0, 0, 0, 1)',
    },
    device: {
      small: 'min-width: 375px',
      custom500: 'min-width: 500px',
      tablet: 'min-width: 768px',
      desktop: 'min-width: 1100px',
    },
    mixins: {},
  }

  export default {
    ...theme,
  }