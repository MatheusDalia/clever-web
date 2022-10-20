import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      primary: {
        bold: string;
        semi_bold: string;
        regular: string;
      };
      secondary: {
        bold: string;
        semi_bold: string;
        regular: string;
      };
    };
    colors: {
      white: string;
      black: string;
      blue: string;
    };
  }
}
