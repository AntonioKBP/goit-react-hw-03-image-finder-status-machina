import PropTypes from 'prop-types';

import { LoadMoreButton, BtnContainer } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <BtnContainer>
      <LoadMoreButton type="button" onClick={onClick}>
        Load more
      </LoadMoreButton>
    </BtnContainer>
  );
};

Button.propTypes = { onClick: PropTypes.func.isRequired };
