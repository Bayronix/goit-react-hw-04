import { useState, useEffect } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import SearchBar from "./SearchBar/SearchBar";
import { Api } from "./ImageGallery/Api/Api";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import Loader from "./Loader/Loader";
import { toast, Toaster } from "react-hot-toast";

function App() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getArticles = async () => {
      if (query !== null) {
        setLoading(true);
        setError(null);
        try {
          const data = await Api(query, 1);
          if (data.length === 0) {
            setError("No results found for your query. Please try again.");
            setArticles([]);
            toast.error("No results found for your query. Please try again.");
          } else {
            setArticles(data);
            setPage(2);
          }
        } catch (err) {
          setError("Failed to fetch images. Please try again.");
          toast.error("Failed to fetch images. Please try again.");
        }
        setLoading(false);
      }
    };

    if (query) {
      getArticles();
    }
  }, [query]);

  const handleSearch = (newQuery) => {
    setTimeout(() => {
      setQuery(newQuery);
      setArticles([]);
      setPage(1);
      setError(null);
    }, 500);
  };

  const handleLoadMore = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await Api(query, page);

      setTimeout(() => {
        setArticles((prevArticles) => [...prevArticles, ...data]);
        setPage((prevPage) => prevPage + 1);
        setLoading(false);
      }, 500);
    } catch (err) {
      setError("Failed to fetch images. Please try again.");
      toast.error("Failed to fetch images. Please try again.");
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <Toaster position="top-right" />
      <ImageGallery articles={articles} />
      {loading && <Loader />}
      {articles.length > 0 && !loading && !error && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </>
  );
}

export default App;
