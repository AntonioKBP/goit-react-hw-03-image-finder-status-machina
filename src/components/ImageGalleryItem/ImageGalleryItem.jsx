import PropTypes from 'prop-types';
import { Image, ListItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image, onhandleModal }) => {
  return (
    <>
      {image.map(img => (
        <ListItem
          key={img.id}
          onClick={() => onhandleModal(img.largeImageURL, img.user)}
        >
          <Image src={img.webformatURL} alt={img.user} />
        </ListItem>
      ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.arrayOf(PropTypes.object.isRequired),
};
