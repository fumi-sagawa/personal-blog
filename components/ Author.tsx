import Image from "next/image";
import { css } from "@emotion/react";

export const Author = () => {
  return (
    <>
      <div css={profileContainer}>
        <Image
          src="/profile_icon.jpg"
          alt="プロフィール画像"
          width={100}
          height={100}
          css={profileIcon}
        />
        <div css={profile}>
          <div css={profileTitle}>
            <p css={profileName}>サガワフミヤ / 佐川史弥</p>
            <div css={sns}>
              <a href="https://twitter.com/fumi_sagawa">
                <Image
                  src="/TWITTER_icon-icons.com_62686.svg"
                  alt="twitterアイコン"
                  width={20}
                  height={20}
                />
              </a>
              <a href="https://github.com/fumi-sagawa">
                <Image
                  src="/github_icon.svg"
                  alt="githubアイコン"
                  width={19}
                  height={19}
                />
              </a>
            </div>
          </div>
          <p css={profileDescription}>
            Webクリエイター。
            企画、写真撮影、ライティング、デザインから実装まで。
            <br />
            「いかに情報の伝達をスムーズにできるか」を考え、直近では表示速度向上を目指しフロントエンドに力を入れています。
          </p>
        </div>
      </div>
    </>
  );
};

const profileContainer = css`
  padding-top: 40px;
  padding-bottom: 40px;

  border-top: solid 2px #e6e6e6;
  border-bottom: solid 2px #e6e6e6;

  display: grid;
  grid-auto-flow: column;
  column-gap: 34px;
  justify-items: start;
  align-items: start;
`;

const profileIcon = css`
  border-radius: 99px;
`;

const profile = css`
  display: grid;
  row-gap: 22px;
`;

const profileTitle = css`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  align-items: center;
  column-gap: 25px;
`;

const profileName = css`
  font-size: 16px;
  font-weight: 600;
`;

const sns = css`
  display: grid;
  grid-auto-flow: column;
  column-gap: 14px;
  align-items: center;
`;

const profileDescription = css`
  font-size: 14px;
  line-height: 2;
`;
