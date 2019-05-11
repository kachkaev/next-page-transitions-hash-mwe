import App, { Container } from "next/app";
import React from "react";
import { PageTransition } from "next-page-transitions";
import getConfig from "next/config";

const {
  publicRuntimeConfig: { PAGE_TRANSITIONS_ENABLED }
} = getConfig();

const TransitionsEnabledIndicator = () => (
  <code style={{ color: PAGE_TRANSITIONS_ENABLED ? "#393" : "#666" }}>
    PAGE_TRANSITIONS_ENABLED=
    {JSON.stringify(PAGE_TRANSITIONS_ENABLED)}
  </code>
);

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
          <TransitionsEnabledIndicator />
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
          <TransitionsEnabledIndicator />
          <Component {...pageProps} />
        </Container>
      );
    }
  }
}
