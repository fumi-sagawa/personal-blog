import { css } from "@emotion/react";
import { Thumbnail } from "../components/Thumbnail";
import { request } from "graphql-request";
import React from "react";

export async function getStaticProps() {
  const query = `
  query getBlogposts {
  blogposts {
    id
    slug
    title
    overview
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

  const post = await request("http://localhost:1337/graphql", query);
  return { props: { blogposts: post.blogposts } };
}

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
      published_at: string;
      post_types: [{ postType?: string }];
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
              post_types={blogpost.post_types}
              thumbnailUrl={blogpost.thumbnail.url}
              published_at={blogpost.published_at}
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
  row-gap: 88px;
`;

export default Home;

// <div>
//   {blogposts.map((blogpost) => (
//     <div key={blogpost.id}>
//       {blogpost.title + blogpost.overview}
//       <img src={domainUrl + blogpost.thumbnail.url} alt="" />
//     </div>
//   ))}
// </div>
