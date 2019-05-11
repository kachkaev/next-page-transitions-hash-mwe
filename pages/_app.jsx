import App, { Container } from "next/app";
import React from "react";
import { PageTransition } from "next-page-transitions";

const PAGE_TRANSITIONS_ENABLED = true;

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;
    if (PAGE_TRANSITIONS_ENABLED) {
      return (
        <Container>
          <PageTransition
            timeout={300}
            classNames="page-transition"
            monkeyPatchScrolling={true}
            skipInitialTransition={true}
          >
            <Component {...pageProps} key={router.route} />
          </PageTransition>
          <style jsx global>{`
            .page-transition-enter {
              opacity: 0;
            }
            .page-transition-enter-active {
              opacity: 1;
              transition: opacity 300ms;
            }
            .page-transition-exit {
              opacity: 1;
            }
            .page-transition-exit-active {
              opacity: 0;
              transition: opacity 300ms;
            }
          `}</style>
        </Container>
      );
    } else {
      return (
        <Container>
          <Component {...pageProps} />
        </Container>
      );
    }
  }
}
