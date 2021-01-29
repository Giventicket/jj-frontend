import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BlogPanel from "../components/blogpanel/BlogPanel";
import { usePreloader } from "../lib/PreloaderContext";
import { getPosts } from "../modules/posts";

const BlogPanelContainer = ({ plusButton = false, navigator = false }) => {
  const posts = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();

  usePreloader(() => dispatch(getPosts()));
  useEffect(() => {
    if (posts) {
      return;
    }
    dispatch(getPosts());
  }, [dispatch, posts]);

  if (!posts) return null;
  return (
    <BlogPanel
      posts={posts}
      plusButton={plusButton}
      navigator={navigator}
      to="/blog"
    />
  );
};

export default BlogPanelContainer;
