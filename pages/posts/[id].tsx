import Image from "next/image";
import { css } from "@emotion/react";

const text =
  "\n" +
  "どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。\n" +
  "\n" +
  "しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。この書生というのは時々我々を捕えて煮て食うという話である。しかしその当時は何という考もなかったから別段恐しいとも思わなかった。ただ彼の掌に載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。\n";

export default function Post() {
  return (
    <div css={container}>
      <h1 css={postTitle}>記事タイトル</h1>
      <div css={information}>
        <span css={date}>2021.06.29</span>
        <div css={tagContainer}>
          <span css={categoryTag}>雑記</span>
          <span css={categoryTag}>開発</span>
        </div>
      </div>
      <Image src="/nyan-cat.jpg" alt="" width={800} height={450} />
      <div css={markdownStyle}>
        <h1>見出し1</h1>
        <p>{text}</p>
        <h2>見出し2</h2>
        <p>{text}</p>
        <p>
          強調のテスト<strong>強調</strong>のテスト
        </p>
        <h3>見出し3</h3>
        <p>{text}</p>
        <blockquote>引用文のテスト</blockquote>
        <img
          src="https://yuyakinoshita.com/wp-cms/wp-content/uploads/eyecatch-image-aspect-ratio-1280x720.png"
          alt=""
        />
      </div>
    </div>
  );
}

const container = css`
  padding-top: 270px;
  display: grid;
  //幅の確保
  grid-template-columns:
    minmax(48px, 1fr)
    minmax(auto, 700px)
    minmax(48px, 1fr);
  //全ての子要素を中央に
  > * {
    grid-column: 2;
  }
`;

const postTitle = css`
  font-size: 36px;
  font-weight: 600;
  color: #242424;
  margin-bottom: 24px;
`;

const date = css`
  font-size: 18px;
  color: #4a5155;
`;

const information = css`
  display: grid;
  column-gap: 26px;
  grid-auto-flow: column;
  justify-content: start;
  align-items: end;
  margin-bottom: 47px;
`;

const tagContainer = css`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  column-gap: 5px;
`;

const categoryTag = css`
  font-size: 16px;
  color: #6f7980;
`;

const imageContainer = css`
  position: relative;
  width: 100%;
  height: 395px;
`;

const markdownStyle = css`
  h1 {
    font-size: 30px;
    font-weight: 600;
    margin: 100px 0 30px 0;
  }
  h2 {
    font-size: 24px;
    font-weight: 600;
    margin: 60px 0 30px 0;
  }
  h3 {
    font-size: 20px;
    font-weight: 600;
    margin: 40px 0 20px 0;
  }
  p {
    font-size: 17px;
    line-height: 2;
    margin: 20px 0 20px 0;
  }
  blockquote {
    font-size: 17px;
    line-height: 2;
    color: #676767;
    margin: 20px 0 20px 0;
    padding-left: 20px;
    border-left: solid 3px #d6d6d6;
  }
  strong {
    font-weight: 600;
  }
  img {
    width: 100%;
    height: auto;
  }
`;
