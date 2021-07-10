import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
	padding: 1em 2em;
	border: 0;
	border-radius: 42px;
	background-color: var(--primary);
	color: #fff;
	font-size: 1rem;
	font-weight: 500;
	letter-spacing: 0.015em;
	transition: all 0.2s ease-in;

	:hover,
	:focus {
		background: var(--primary-dark);
	}

	&.disabled {
		cursor: not-allowed;
		background: var(--dark-grey);
		:hover,
		:focus {
			opacity: 1;
		}
	}
`;

export const Button = ({ text, onClick, type }) => {
	return (
		<StyledButton className={type} onClick={onClick}>
			{text}
		</StyledButton>
	);
};

Button.propTypes = {
	text: PropTypes.string,
	type: PropTypes.oneOf(['disabled']),
	onClick: PropTypes.func,
};

Button.defaultProps = {
	text: 'Click me',
	onClick: () => null,
};
