# DailyPulse

DailyPulse is a news application that provides the latest news across various categories such as Technology, Business, Sports, Health, and Entertainment. The application is built using React and Vite, with a backend server implemented using Express and MongoDB.

## Features

- View top headlines and news articles by category
- Search for news articles
- Toggle between light and dark themes
- User authentication (register and login)
- Save favorite news articles

## Project Structure
.
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── api
│   │   ├── NewsCard.css
│   │   ├── NewsCard.jsx
│   │   ├── NewsList.css
│   │   ├── NewsList.jsx
│   │   ├── newsApi.js
│   │   └── newsSearch.jsx
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── category
│   │   ├── common
│   │   │   ├── footer
│   │   │   │   ├── Footer.css
│   │   │   │   └── Footer.jsx
│   │   │   └── header
│   │   │       ├── Head.jsx
│   │   │       ├── Header.css
│   │   │       └── Header.jsx
│   │   ├── home
│   │   └── log
│   ├── images
│   │   ├── IMG_20241019_220936.jpg
│   │   ├── image.png
│   │   ├── logo.png
│   │   ├── logoname.png
│   │   ├── logonword.png
│   │   ├── sport.png
│   │   └── tech.png
│   ├── index.css
│   ├── main.jsx
│   ├── pages
│   │   ├── CategoryPage.jsx
│   │   ├── Homepages.jsx
│   │   ├── favoriteNews.jsx
│   │   ├── settings.jsx
│   │   └── technology.jsx
│   ├── server
│   └── ui
└── vite.config.js


## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/mahiamk/capstone.git
   cd capstone

2. Install dependecies:
    npm install
3. Create a .env file in the root directory and add your API key:
    VITE_REACT_APP_API_KEY=your_api_key_here
4. Start the development server:

    npm run dev
5. Start the backend server:
  node src/server/server.js



## Usage
  1. Open your browser and navigate to http://localhost:3000 to view the application.
  2. Use the navigation bar to switch between different news categories.  
  3. Use the search bar to find news articles.
  4. Toggle between light and dark themes using the theme toggle button.
  5. Register and log in to save your favorite news articles.


## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License.

