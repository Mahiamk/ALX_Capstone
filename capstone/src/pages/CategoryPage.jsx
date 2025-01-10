import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import newsApi from "../api/newsApi";
import NewsCard from "../api/NewsCard";
const CategoryPage = () => {
  const { category } = useParams(); // Get the category from the URL
  // console.log('category from params: ', category)
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (category) {
      setLoading(true);
      setError(null);
      newsApi
        .fetchNewsByCategory(category)
        .then((data) => {
          // console.log("Fetched news data in category:", data.articles);
          // filter and dont display the article if only all title , description, urlToImage and url is present
          const articleData = data.articles.filter(
            (article) =>
              article.title &&
              article.description &&
              article.urlToImage &&
              article.url
          );
          setArticles(articleData);
          setLoading(false);

        })
        .catch((err) => {
          setError(err.message || "Something went wrong");
          setLoading(false);
        });
    }
  }, [category]); // Fetch data whenever the category changes

  if (loading) return <p>Loading category data...</p>;
  if (error) return <p>Error while fetching data from category: {error}</p>;

  return (
    <div>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <ul
          style={{
            listStyleType: 'none',
            padding: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)', // 3 columns
            gap: '1rem', // Space between grid items
          }}>
          {articles.map((article, index) => (
            <li
              key={index}
              style={{
                padding: '1rem',
                cursor: 'pointer'
              }}
            >
              <NewsCard article={article} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryPage;
import PropTypes from 'prop-types';

CategoryPage.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      url: PropTypes.string.isRequired,
      urlToImage: PropTypes.string,
      publishedAt: PropTypes.string.isRequired,
      content: PropTypes.string,
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};
