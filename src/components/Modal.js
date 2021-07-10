import React from 'react';
import styled from 'styled-components';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

const StyledModal = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 999999999999999;
	background: #00000080;
	overflow-y: scroll;

	.content {
		width: 90%;
		max-width: 1000px;
		margin: 5em auto;
		background: #fff;
		border-radius: 5px;

		${(props) => props.css}
	}
`;

const Modal = ({ children, css, closeModal }) => {
	return ReactDom.createPortal(
		<StyledModal css={css} onClick={closeModal}>
			<div onClick={(ev) => ev.stopPropagation()} className={'content'}>
				{children}
			</div>
		</StyledModal>,
		document.getElementById('portal')
	);
};

Modal.propTypes = {
	css: PropTypes.string,
	closeModal: PropTypes.func,
};
Modal.defaultProps = {
	closeModal: () => null,
};

export default Modal;
