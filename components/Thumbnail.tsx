import Image from "next/image";
import Link from "next/link";
import { css } from "@emotion/react";

export const Thumbnail = () => {
  return (
    <>
      <Link href="/posts/1">
        <a>
          <div>
            <p css={date}> 2021.06.29</p>
            <Image src="/nyan-cat.jpg" alt="" width={800} height={450} />
            <h1 css={title}>
              {" "}
              良いタイトル思いつかないから、とりあえず記念パピコ🎉
            </h1>
            <p css={description}>
              なんかいい感じのディスクリプション。
              これはどっから持ってくるかな。
            </p>
            <div css={tagContainer}>
              <span css={categoryTag}>雑記</span>
              <span css={categoryTag}>雑記</span>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};

const date = css`
  font-size: 14px;
  color: #6f7980;
  margin-bottom: 10px;
`;

const imageContainer = css`
  position: relative;
  width: 100%;
  height: 180px;
`;

const title = css`
  font-size: 17px;
  font-weight: 600;
  color: #242424;
  line-height: 28px;
  margin: 14px 0;
`;
const description = css`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 14px;
  color: #6f7980;
`;

const tagContainer = css`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  column-gap: 5px;
`;

const categoryTag = css`
  font-size: 13px;
  color: #6f7980;
  border: 1px solid #6f7980;
  padding: 4px 9px;
  border-radius: 99px;
`;
