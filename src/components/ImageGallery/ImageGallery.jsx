import PropTypes from 'prop-types';

import { ImagesList } from './ImageGallery.styled';

export const ImageGallery = ({ children }) => {
  return <ImagesList>{children}</ImagesList>;
};

ImageGallery.propTypes = {
  children: PropTypes.any.isRequired,
};
