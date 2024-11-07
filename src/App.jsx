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

function App() {
  function dateConverter(timestamp) {
    return new Date(+timestamp * 1000).toLocaleDateString('en-gb', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }
  // console.log(dateConverter(data[0].date));

  return (
    <div>
      <h1 className='text-gray-950'>Hello React!</h1>
    </div>
  );
}

export default App;
