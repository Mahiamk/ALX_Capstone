import { useState } from "react";
import { Link } from "react-router-dom";
import newsApi from "../../../api/newsApi";
import './Header.css';

const Header = () => {
  const [navbar, setnavbar] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);  // To manage loading state
  const [error, setError] = useState(null);  // To manage error state
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  // const navigate = useNavigate();

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.style.backgroundColor = isDarkTheme ? '#ffffff' : '#1a1a1a';
    document.body.style.color = isDarkTheme ? '#000000' : '#ffffff';
  };



  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleCategoryChange = async (category) => {
    console.log('Selected category:', category);
    setCategories(categories);
    // Validate category before calling the API
    if (typeof category !== 'string') {
      console.error('Invalid category:', category);
      return;
    }

    try {
      const newsData = await newsApi.fetchNewsByCategory(category);
      console.log('Fetched news data:', newsData);
      if (Response.status === 'ok') {
        setCategories(newsData.articles);
      } else {
        setError("No Headlines found in the response.");
      }
      // Handle the fetched news data
    } catch (error) {
      console.error('Error fetching news:', error);
    }
    setnavbar(false);
    // navigate(`/${category}`);
  };
if(error) {
  return <div className="error">{error}</div>
}

  return (
    <header>
      <div className="container paddingSmal">
        <Link to="/" className="newsname">Daily-Pulse</Link>
        <button onClick={toggleTheme} className="theme-toggle">
          {isDarkTheme ? '☀️' : '🌙'}
        </button>

        <form>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            className="search"
            placeholder="Search news here..."
          />

          <nav>
            <ul className={navbar ? "navbar" : 'flex'} onClick={() => setnavbar(false)}>
              <li><Link to='/' style={{ color: window.location.pathname === '/' ? 'crimson' : '' }}>Home</Link></li>
              <li><Link to="/technology" style={{ color: window.location.pathname === '/technology' ? 'crimson' : '' }}>Technology</Link></li>
              <li><Link to="/business" style={{ color: window.location.pathname === '/business' ? 'crimson' : '' }}>Business</Link></li>
              <li><Link to="/sports" style={{ color: window.location.pathname === '/sports' ? 'crimson' : '' }}>Sports</Link></li>
              <li><Link to="/health" style={{ color: window.location.pathname === '/health' ? 'crimson' : '' }}>Health</Link></li>
              <li><Link to='/entertainment' 
                onClick={() => handleCategoryChange('entertainment')}
                style={{ color: window.location.pathname === '/entertainment' ? 'crimson' : '' }}
              >Entertainment</Link></li>
            </ul>
            <button className='barIcon' onClick={() => setnavbar(!navbar)}>
              {navbar ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
            </button>
          </nav>

        </form>
      </div>
    </header>
  );
};

export default Header;
