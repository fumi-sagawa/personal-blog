import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Global, css } from "@emotion/react";
import { Layout } from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={Initializer} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

const Initializer = css`
  body {
    font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN",
      "Hiragino Sans", Meiryo, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default MyApp;
