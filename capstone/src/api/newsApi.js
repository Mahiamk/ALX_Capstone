import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2';  // Base URL for the News API
const apikey = import.meta.env.VITE_REACT_APP_API_KEY; // API key for the News API

const newsApi = {  // News API object
  fetchNews: async () => { // Fetch news articles
    try {
      const response = await axios.get(`${BASE_URL}/everything`, {
        params: {
          country: 'us',
          apiKey: apikey
        },
      });
      return response.data.articles;
    } catch (error) {
      console.error('Error fetching news:', error);
      throw error;
    }
  },
  getTopHeadlines: async (country = 'us') => {
    try {
      const response = await axios.get(`${BASE_URL}/top-headlines`, {
        params: {
          country,
          apiKey: apikey,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching top headlines:', error);
      throw error;
    }
  },
  searchNews: async (query, sortBy = 'relevancy', page = 1) => {
    try {
      const response = await axios.get(`${BASE_URL}/everything`, {
        params: {
          q: query,
          sortBy,
          page,
          apiKey: apikey,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error searching news:', error);
      throw error;
    }
  },

  fetchNewsByCategory: async (category) => {
    try {
      // Ensure the category is a valid string
      if (typeof category !== 'string') {
        throw new Error('Category must be a string. Received: ' + typeof category);
      }
    
      const response = await axios.get(`${BASE_URL}/top-headlines`, {
        params: {
          category,
          apiKey: apikey,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching news by category:', error.message);
      throw error;
    }
  },
  
};
export const { fetchNewsByCategory } = newsApi;

export default newsApi;