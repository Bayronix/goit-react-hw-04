import PropTypes from "prop-types";
import styles from "./ImageCard.module.css";

function ImageCard({ image }) {
  return (
    <li className={styles.li}>
      <img
        className={styles.img}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </li>
  );
}

ImageCard.propTypes = {
  image: PropTypes.shape({
    urls: PropTypes.shape({
      small: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default ImageCard;
