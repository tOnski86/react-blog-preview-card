import { useState, useEffect } from 'react';
import Card from './Card';

const data = [
  {
    author: 'Greg Hooper',
    authorImage: '/image-avatar.webp',
    articleImage: '/illustration-article.svg',
    category: 'learning',
    date: '1703160060',
    title: 'HTML and CSS foundations',
    previewText:
      'These languages are the backbone of every website, defining structure, content, and presentation.',
  },
];

function dateConverter(timestamp) {
  return new Date(+timestamp * 1000).toLocaleDateString('en-gb', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function capitalizeString(string) {
  return `${string.at(0).toUpperCase()}${string.slice(1)}`;
}

function App() {
  const [article, setArticle] = useState({});

  useEffect(function () {
    function handleSetArticle(obj) {
      const {
        articleImage,
        author,
        authorImage,
        previewText,
        title,
        category,
        date,
      } = obj;

      setArticle({
        articleImage,
        author,
        authorImage,
        previewText,
        title,
        category: capitalizeString(category),
        date: dateConverter(date),
      });
    }

    handleSetArticle(data.at(0));
  }, []);

  return (
    <div>
      <Card article={article} />
    </div>
  );
}

export default App;
