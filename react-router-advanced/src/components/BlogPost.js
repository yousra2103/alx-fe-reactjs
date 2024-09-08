import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  // Get the dynamic part of the URL (postId)
  const { postId } = useParams();

  return (
    <div>
      <h1>Blog Post</h1>
      <p>Displaying post with ID: {postId}</p>
    </div>
  );
};

export default BlogPost;