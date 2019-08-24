import React from "react";
import App, { Container } from "next/app";
import { ThemeProvider, Styled, ColorMode } from "theme-ui";

import theme from "../lib/theme";
import parseCookies from "../lib/parseCookies";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const { colorMode } = parseCookies(ctx.req);

    return { pageProps, colorMode };
  }

  render() {
    const { Component, pageProps, colorMode } = this.props;

    return (
      <Container>
        <ThemeProvider theme={theme(colorMode)}>
          <ColorMode />
          <Styled.root>
            <Component {...pageProps} />
          </Styled.root>
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
