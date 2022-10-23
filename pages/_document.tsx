import { createGetInitialProps } from "@mantine/next";
import Document, { Head, Html, Main, NextScript } from "next/document";
import Header from "../components/Header";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head />
        <div className="hidden md:flex absolute left-0 right-0 top-0">
          <Header />
        </div>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
