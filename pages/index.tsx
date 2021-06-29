import { css } from "@emotion/react";
import { Header } from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import { Thumbnail } from "../components/Thumbnail";
import { Footer } from "../components/Footer";
import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <>
      <div css={container}>
        <div css={thumbnailGrid}>
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
        </div>
      </div>
    </>
  );
}

const container = css`
  padding-top: 280px;
  display: grid;
  //幅の確保
  grid-template-columns:
    minmax(48px, 1fr)
    minmax(auto, 1088px)
    minmax(48px, 1fr);
  //全ての子要素を中央に
  > * {
    grid-column: 2;
  }
`;

const thumbnailGrid = css`
  display: grid;
  //grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  column-gap: 38px;
  row-gap: 88px;
`;
