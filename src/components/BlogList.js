
function BlogList({blogs, title, handleDelete}) {

  // const blogs = props.blogs;

  return (
    <div className="blog-list">
    {blogs.map((blog) => (
      <div key={blog.id} className="blog-preview">
        <h2>{blog.title}</h2>
        <p>Author: {blog.author}</p>
        <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
      </div>
    ))}
    </div>
  )
};

export default BlogList;
