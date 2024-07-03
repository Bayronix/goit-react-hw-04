import { useState, useEffect } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import SearchBar from "./SearchBar/SearchBar";
import { Api } from "./ImageGallery/Api/Api";

function App() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState(null);
  useEffect(() => {
    async function getArticles() {
      if (query !== null) {
        const data = await Api(query);
        setArticles(data);
      }
    }

    getArticles();
  }, [query]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <ImageGallery articles={articles} />
    </>
  );
}

export default App;
