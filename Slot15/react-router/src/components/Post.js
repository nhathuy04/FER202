import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Post() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Không thể tải danh sách bài viết');
        }
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((error) => {
        console.error('Lỗi khi tải bài viết:', error);
        setError('Không thể tải dữ liệu. Vui lòng thử lại sau.');
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Danh Sách Bài Viết</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Post;