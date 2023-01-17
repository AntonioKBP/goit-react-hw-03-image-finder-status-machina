import PropTypes from 'prop-types';

import { Component } from 'react';
import { createPortal } from 'react-dom';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { ModalOverlay, ModalWindow, ModalBtn } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const style = { width: '32px', height: '32px', color: 'aqua' };

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleBackDrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { children, onClose } = this.props;

    return createPortal(
      <>
        <ModalOverlay onClick={this.handleBackDrop}>
          <ModalBtn onClick={onClose} type="button">
            <IoIosCloseCircleOutline style={style} />
          </ModalBtn>
          <ModalWindow>{children}</ModalWindow>
        </ModalOverlay>
      </>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  children: PropTypes.object.isRequired,
};
