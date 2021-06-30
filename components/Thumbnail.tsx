import Image from "next/image";
import Link from "next/link";
import { css } from "@emotion/react";
import React from "react";

type Props = {
  id: string;
  slug: string;
  title: string;
  overview: string;
  thumbnailUrl: string;
  published_at: string;
  post_types: [{ postType?: string }];
};

const domainUrl = "http://localhost:1337";

export const Thumbnail: React.VFC<Props> = (props) => {
  return (
    <>
      <Link href={`/posts/${props.slug}`}>
        <a>
          <div>
            <p css={date}>{props.published_at}</p>
            <Image
              src={domainUrl + props.thumbnailUrl}
              alt=""
              width={800}
              height={450}
            />
            <h1 css={title}>{props.title}</h1>
            <p css={description}>{props.overview}</p>
            <div css={tagContainer}>
              {props.post_types.map((post_type) => (
                <span key={post_type.postType} css={categoryTag}>
                  {post_type.postType}
                </span>
              ))}
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
  margin: 14px 0 10px 0;
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
  //&:before {
  //  content: "# ";
  //  font-size: 16px;
  //}
  border: 1px solid #6f7980;
  padding: 3px 9px 2px 9px;
  border-radius: 99px;
`;
