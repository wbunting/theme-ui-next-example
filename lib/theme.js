const theme = (colorMode = "light") => ({
  initialColorMode: colorMode,
  useCustomProperties: true,
  colors: {
    text: "#131514",
    background: "#fff",
    modes: {
      dark: {
        text: "#fff",
        background: "#131514"
      }
    }
  }
});

export default theme;
