import React, { useEffect, useState } from 'react';
import BlogList from './BlogList'

const Blog = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My New Website', body: 'Lorem ipsum.....', author: 'Mario', id: '1' },
    { title: 'My Second Post', body: 'Lorem ipsum.....', author: 'Luigi', id: '2' },
    { title: 'Web Dev Top Tips', body: 'Lorem ipsum.....', author: 'Peach', id: '3' }
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs);
  }

  useEffect(() => {

  })

  return (
    <div>
      <BlogList blogs={blogs} handleDelete={handleDelete}/>
    </div>
  );
};

export default Blog;
