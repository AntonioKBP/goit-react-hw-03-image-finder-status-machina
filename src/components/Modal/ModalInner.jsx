import PropTypes from 'prop-types';

import { ModalImage } from './Modal.styled';

export const ModalInner = ({ url, alt }) => {
  return (
    <>
      <ModalImage src={url} alt={alt} />
    </>
  );
};

ModalInner.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
