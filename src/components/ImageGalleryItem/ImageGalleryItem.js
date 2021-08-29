import PropTypes from "prop-types";
import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags, modalOpen }) => {
  return (
    <li className={s.ImageGalleryItem} onClick={modalOpen}>
      <img
        src={webformatURL}
        alt={tags}
        className={s.ImageGalleryItemImage}
        data-source={largeImageURL}
      />
    </li>
  );
};
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  modalOpen: PropTypes.func,
  tags: PropTypes.string,
};
