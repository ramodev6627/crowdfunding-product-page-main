import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButtonWithIcon = styled.button`
	border: 0;
	border-radius: 42px;
	background-color: var(--light-grey);
	color: #fff;
	transition: opacity 0.2s ease-in;
	display: flex;
	align-items: center;
	justify-content: space-between;

	span {
		display: none;
		padding: 1em 2em 1em 0.7em;
		color: var(--typography);
		font-size: 1rem;
		font-weight: 500;
		letter-spacing: 0.015em;

		@media (min-width: 500px) {
			display: block;
		}
	}

	:hover {
		opacity: 0.9;
	}

	&.active {
		span {
			color: var(--primary-dark);
		}

		svg {
			circle {
				fill: var(--primary-dark);
			}
			path {
				fill: #fff;
			}
		}
	}
`;

export const ButtonWithIcon = ({ text, onClick, type }) => {
	return (
		<StyledButtonWithIcon className={type} onClick={onClick}>
			<svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
				<g fill="none" fillRule="evenodd">
					<circle fill="#2F2F2F" cx="28" cy="28" r="28" />
					<path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
				</g>
			</svg>
			<span>{text}</span>
		</StyledButtonWithIcon>
	);
};

ButtonWithIcon.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.func,
	type: PropTypes.oneOf(['active', '']),
};

ButtonWithIcon.defaultProps = {
	text: 'Click me',
	onClick: () => null,
};
