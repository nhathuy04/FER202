import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/posts/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Bài viết không tìm thấy');
        }
        return response.json();
      })
      .then((data) => setPost(data))
      .catch((error) => {
        console.error('Lỗi khi tải bài viết:', error);
        setError('Bài viết không tồn tại hoặc có lỗi server.');
      });
  }, [id]);

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!post) {
    return <h2>Đang tải...</h2>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;