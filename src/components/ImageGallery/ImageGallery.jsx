import ImageCard from "./ImageCard/ImageCard";
import PropTypes from "prop-types";
import styles from "./ImageGallery.module.css";

export default function ImageGallery({ articles }) {
  return (
    <ul className={styles.ul}>
      {articles.map((article) => (
        <ImageCard key={article.id} image={article} />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};
