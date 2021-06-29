import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { css } from "@emotion/react";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <div css={backGround}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

const backGround = css`
  background-color: #f2f2f2;
  min-height: 100vh;
`;
