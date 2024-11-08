import PropTypes from 'prop-types';

function Card({ article }) {
  return (
    <div className='bg-white w-96 p-5 rounded-2xl border-solid border border-gray-950 text-gray-950 relative after:absolute after:w-full after:h-full after:bg-gray-950 after:left-2 after:top-2 after:-z-10 after:rounded-2xl'>
      <img
        src={article.articleImage}
        alt={article.title}
        className='w-full rounded-xl'
      />
      <h3 className='bg-yellow text-sm font-bold mt-5 mb-3 inline-block py-1 px-3 rounded-md'>
        {article.category}
      </h3>
      <div className='grid grid-cols-1 gap-4'>
        <p className='text-sm font-medium'>Published {article.date}</p>
        <h2 className='text-2xl font-extrabold hover:text-yellow hover:cursor-pointer transition-all	'>
          {article.title}
        </h2>
        <p className='text-gray-500 text-base font-medium'>
          {article.previewText}
        </p>
        <div className='flex items-center gap-3 mb-2'>
          <img src={article.authorImage} alt={article.author} className='w-8' />
          <h3 className='text-sm font-bold '>{article.author}</h3>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  article: PropTypes.object,
};

export default Card;
