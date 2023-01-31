import { useSelector } from "react-redux";

import React from "react";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  const posts = useSelector((state) => state.posts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <section>
        <h2>Posts</h2>

        {orderedPosts.map((post) => {
          return (
            <article key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content.substring(0, 100)}</p>
              <p className="postCredit">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
              </p>
              <ReactionButtons post={post} />
            </article>
          );
        })}
      </section>
    </>
  );
};

export default PostsList;
