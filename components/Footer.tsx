import { css } from "@emotion/react";

export const Footer = () => {
  return (
    <div css={footer}>
      <p>©︎ Fumiya Sagawa</p>
    </div>
  );
};

const footer = css`
  padding: 100px 0 34px 0;
  display: grid;
  justify-items: center;
  font-size: 14px;
  color: #242424;
`;
