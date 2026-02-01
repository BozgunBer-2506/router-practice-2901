import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import './Blog.css';

function Blog() {
  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1 className="blog-title">Blog</h1>
        <p className="blog-subtitle">{posts.length} Artikel verfügbar</p>
      </div>

      <div className="blog-grid">
        {posts.map(post => (
          <article key={post.slug} className="blog-card">
            <div className="blog-card-header">
              <h2 className="blog-card-title">
                <Link to={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              <span className="blog-card-date">{post.date}</span>
            </div>
            
            <p className="blog-card-excerpt">{post.excerpt}</p>
            
            <Link to={`/blog/${post.slug}`} className="blog-card-link">
              Weiterlesen
              <span className="arrow">→</span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Blog;