import { css } from "@emotion/react";
import { Thumbnail } from "../components/Thumbnail";
import { request } from "graphql-request";
import React from "react";
import { GetStaticProps } from "next";
import { graphCmslUrl } from "../variables/url";

export const getStaticProps: GetStaticProps = async () => {
  const query = `
  query getBlogposts {
  blogposts(orderBy: publishedAt_DESC)  {
    id
    slug
    title
    overview
    thumbnail{
      url
    }
    updatedAt
    postTypes{
      postType
    }
  }
}
  `;
  const post = await request(graphCmslUrl, query);
  return { props: { blogposts: post.blogposts } };
};

type Props = {
  blogposts: [
    {
      id: string;
      slug: string;
      title: string;
      overview: string;
      thumbnail: {
        url: string;
      };
      updatedAt: string;
      postTypes: [{ postType?: string }];
    }
  ];
};

const Home: React.VFC<Props> = ({ blogposts }) => {
  return (
    <>
      <div css={container}>
        <div css={thumbnailGrid}>
          {blogposts.map((blogpost) => (
            <Thumbnail
              key={blogpost.id}
              id={blogpost.id}
              slug={blogpost.slug}
              title={blogpost.title}
              overview={blogpost.overview}
              postTypes={blogpost.postTypes}
              thumbnailUrl={blogpost.thumbnail.url}
              updatedAt={blogpost.updatedAt.split("T")[0].replace(/-/g, ".")}
            />
          ))}
        </div>
      </div>
    </>
  );
};

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
  row-gap: 70px;
`;

export default Home;
