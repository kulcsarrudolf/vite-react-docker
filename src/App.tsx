import { useEffect } from 'react';
import { useApi } from './api/useApi';
import config from './../config';

interface Post {
  id: number;
  title: string;
  body: string;
}

function App() {
  const { data: posts, loading, error, request } = useApi<Post[]>();

  useEffect(() => {
    request('GET', '/posts');
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📡 useAxios Example</h1>
      <h2>Environment: {config.environment}</h2>
      <h2>API URL: {config.apiUrl}</h2>

      <hr />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}

      {posts &&
        posts.slice(0, 5).map((post) => (
          <div key={post.id} style={{ marginBottom: '1rem' }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
