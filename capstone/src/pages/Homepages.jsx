import { colors } from "@mui/material";
import { useState, useEffect } from "react";
import newsApi from "../api/newsApi";
import NewsCard from "../api/NewsCard";

const Homepages = () => {
  const [isLoading, setIsLoading] = useState(true);  // To manage loading state
  const [error, setError] = useState(null);
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        setIsLoading(true);  // Start loading state
        const response = await newsApi.getTopHeadlines();
        console.log('API Response:', response);  // Log the full response to see its structure

        // Check if response and response.sources exist before proceeding
        if (response.status === 'ok') {
          const articleData = response.articles.filter(
            (article) =>
              article.title &&
              article.description &&
              article.urlToImage &&
              article.url
          );
          setHeadlines(articleData);
        } else {
          setError("No Headlines found in the response.");
        }
      } catch (error) {
        setError("Failed to fetch Headlines: " + error.message);  // Handle the error properly
      } finally {
        setIsLoading(false);  // Set loading false when finished
      }
    };

    fetchHeadlines();
  }, []);
  return (
    <div>
      <h1><em style={colors}>Welcome to Daily_Pulse</em></h1>
      {isLoading ? (
        <p>Loading categories...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
         <ul
                  style={{
                    listStyleType: 'none',
                    padding: 0,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)', // 3 columns
                    gap: '1rem', // Space between grid items
                  }}
                  >
                  {headlines.map((article, index) => (
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
        // <ul>
        //   {headlines.map((article, index) => (
        //     <li key={index} onClick={() => handleCategoryChange(article)}>
        //       {article.author}
        //     </li>
        //   ))}
        // </ul>
      )
      }
    </div>
  )
}

export default Homepages;