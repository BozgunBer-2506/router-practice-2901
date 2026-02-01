import { useParams, Link } from 'react-router-dom';
import { getPostBySlug } from '../data/posts';
import './BlogPost.css';

function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="post-not-found">
        <div className="error-icon">❌</div>
        <h1>Artikel nicht gefunden</h1>
        <p>Der Artikel "{slug}" existiert nicht.</p>
        <Link to="/blog" className="back-link">
          ← Zurück zum Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="post-container">
      <Link to="/blog" className="back-link">
        ← Zurück zum Blog
      </Link>

      <div className="post-header">
        <h1 className="post-title">{post.title}</h1>
        <p className="post-date">
          Veröffentlicht am {post.date}
        </p>
      </div>

      <div className="post-content">
        {post.content}
      </div>

      <div className="post-footer">
        <Link to="/blog" className="footer-link">
          ← Zurück zum Blog
        </Link>
      </div>
    </article>
  );
}

export default BlogPost;