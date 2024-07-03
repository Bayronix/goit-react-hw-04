import { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "./ImageCard/ImageCard";

export default function ImageGallery() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function getArticles() {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/search/photos?client_id=I2D2c16iwwIjCTAyZyBcnyzgq5aZ7OGHfcmvU91Ezhk&query=car&page=1"
        );
        setArticles(response.data.results);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    }
    getArticles();
  }, []);

  return (
    <ul>
      {articles.map((article) => (
        <ImageCard key={article.id} image={article} />
      ))}
    </ul>
  );
}
