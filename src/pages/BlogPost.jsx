import { useParams, Link } from 'react-router-dom';
import { getPostBySlug } from '../data/posts';

function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h1>❌ Artikel nicht gefunden</h1>
        <p>Der Artikel "{slug}" existiert nicht.</p>
        <Link to="/blog" style={{ color: '#3498db' }}>
          ← Zurück zum Blog
        </Link>
      </div>
    );
  }

  return (
    <article style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <Link 
        to="/blog" 
        style={{ 
          color: '#3498db', 
          textDecoration: 'none',
          fontSize: '14px'
        }}
      >
        ← Zurück zum Blog
      </Link>

      <h1 style={{ marginTop: '20px', marginBottom: '8px' }}>
        {post.title}
      </h1>
      
      <p style={{ 
        color: '#7f8c8d', 
        fontSize: '14px',
        marginBottom: '32px' 
      }}>
        Veröffentlicht am {post.date}
      </p>

      <div style={{ 
        lineHeight: '1.8',
        color: '#333',
        whiteSpace: 'pre-line'
      }}>
        {post.content}
      </div>

      <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #ddd' }} />

      <Link 
        to="/blog" 
        style={{ 
          color: '#3498db', 
          textDecoration: 'none'
        }}
      >
        ← Zurück zum Blog
      </Link>
    </article>
  );
}

export default BlogPost;