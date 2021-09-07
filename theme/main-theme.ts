const theme = {
  color: {
    black: '#000',
    white: '#FFF',
    lightBlue: '#00ace2',
    darkBlue: '#143894',
  },
  menu: {
    width: {
      collapsed: '90px',
      expanded: '288px',
    },
    mobileHeight: '83px', // leave it for now to avoid conflicts with typescript
    height: {
      desktop: '100px',
      mobile: '60px',
    },
  },
  fonts: {
    openSans: 'Open Sans',
    roboto: 'Roboto',
  },
  easing: {
    transitionIn: 'cubic-bezier(0.2, 0, 0, 1)',
  },
  floatingImageSize: '31vw',
  sitePadding: {
    mobile: '9.7%',
  },
};

export default theme;

type CustomTheme = typeof theme;

export type ThemeColors = keyof typeof theme.color;

export type ColorProp = {
  $color?: ThemeColors;
};

// this will redeclare the global `DefaultTheme` so it is aware of our custom theme.
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends CustomTheme {}
}
