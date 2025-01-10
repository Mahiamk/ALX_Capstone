import PropTypes from 'prop-types';
import './NewsCard.css';

const NewsCard = ({ article }) => {
  if (!article) {
    return null;  // Return nothing if article is undefined
  }
  // a function to restrict the length of the description
  const shortenDescription = (description, maxLength) => {
    if (!description) {
      return 'No description available.';
    }
    if (description.length <= maxLength) {
      return description;
    }
    return description.slice(0, maxLength - 3) + '...';
  }

  return (
    <div className="news-card">
      <a href={article.url || '#'} rel="noopener noreferrer">
      <img 
        src={article.urlToImage || 'https://via.placeholder.com/300x200?text=No+Image'} 
        alt={article.title || 'No title'}
        className="news-image"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
        }}
      />
      </a>
      <div className="news-content">
        <a href={article.url || '#'} rel="noopener noreferrer">
        <h3 className="news-title">{shortenDescription(article.title, 60) || 'No title'}</h3>
        <p className="news-description">{shortenDescription(article.description, 150) || 'No description available.'}</p>
        <div className="news-metadata">
          <span className="news-author">{article.author || 'Unknown Author'}</span>
          <span className="news-date">
            {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : 'Unknown date'}
          </span>
        </div>
        </a>
        <a 
          href={article.url || '#'} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="read-more"
        >
          Read More
        </a>
      </div>
    </div>
  );
};
NewsCard.propTypes = {
  article: PropTypes.shape({
    urlToImage: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    author: PropTypes.string,
    publishedAt: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })
};

export default NewsCard;