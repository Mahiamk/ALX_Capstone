import { useState, useEffect } from "react";
import { useParams, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import Homepages from "./pages/Homepages";
import CategoryPage from "./pages/CategoryPage";
import "./App.css";
import Head from "./components/common/header/Head";
import newsApi from "./api/newsApi";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { category } = useParams(); // Extract category from URL params

  useEffect(() => {
    if (category) {
      setLoading(true);
      setError(null);
      newsApi.fetchNewsByCategory(category)
        .then(data => {
          console.log('Fetched news data:', data);
          setArticles(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
  }, [category]); // Dependency on `category`

  const handleCategoryChange = (categoryArtcile) => {
    setArticles(categoryArtcile);
    setLoading(true);
    setError(null);
  };

  return (
    <Router>
      <Head />
      <Header onCategoryChange={handleCategoryChange} />
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/:category" element={<CategoryPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
