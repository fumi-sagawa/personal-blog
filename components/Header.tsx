import Link from "next/link";
import Image from "next/image";
import { css } from "@emotion/react";

export const Header = () => {
  return (
    <header css={header}>
      <Link href="/">
        <a>
          <Image src="/logo_arifureta.svg" alt="ロゴ" width={110} height={43} />
        </a>
      </Link>
    </header>
  );
};

const header = css`
  position: fixed;
  top: 24px;
  left: 48px;
  z-index: 100;
  transition: 0.3s;
  &:hover {
    opacity: 0.5;
  }
`;
