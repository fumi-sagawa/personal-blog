import Image from "next/image";
import { css } from "@emotion/react";
import { Author } from "../../components/ Author";
import { request } from "graphql-request";
import React from "react";
import ReactMarkdown from "react-markdown";
import { GetStaticProps, GetStaticPaths } from "next";
import { format } from "date-fns";

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `
query getBlogposts {
  blogposts {
    id
slug
  }
}

  `;
  const posts = await request("http://localhost:1337/graphql", query);
  return {
    paths: posts.blogposts.map((post: { id: string; slug: string }) => ({
      params: {
        id: post.id,
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const slug = context.params.slug;
  const query = `
 query getBlogposts {
blogposts(where: {slug:"${slug}"}) {
    id
    title
    text
    thumbnail{
      url
    }
    published_at
post_types{
      postType
    }
  }
}

  `;
  const data = await request("http://localhost:1337/graphql", query);
  //graphQLのwhereクエリの仕様で返り値が配列となるため
  return { props: { blogpost: data.blogposts[0] } };
};

type Props = {
  blogpost: {
    id: string;
    title: string;
    overview: string;
    text: string;
    thumbnail: {
      url: string;
    };
    published_at: string;
    post_types: [{ postType?: string }];
  };
};

const domainUrl = "http://localhost:1337";

const Post: React.VFC<Props> = ({ blogpost }) => {
  return (
    <div css={container}>
      <h1 css={postTitle}>{blogpost.title}</h1>
      <div css={information}>
        <span css={date}>
          {blogpost.published_at.split("T")[0].replace(/-/g, ".")}
        </span>
        <div css={tagContainer}>
          {blogpost.post_types.map((post_type) => (
            <span key={post_type.postType} css={categoryTag}>
              {post_type.postType}
            </span>
          ))}
        </div>
      </div>
      <Image
        src={domainUrl + blogpost.thumbnail.url}
        alt=""
        width={800}
        height={450}
      />
      <div css={markdownStyle}>
        <ReactMarkdown>{blogpost.text}</ReactMarkdown>
      </div>
      <div css={author}>
        <Author />
      </div>
    </div>
  );
};

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
  column-gap: 8px;
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

const author = css`
  margin-top: 120px;
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
    margin: 30px 0;
  }
`;

export default Post;
