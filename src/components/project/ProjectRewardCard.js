import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import { Card } from '../Card';
import PropTypes from 'prop-types';

const StyledProjectRewardCard = styled.div`
	margin-bottom: 2em;

	.card {
		box-shadow: 0px 0px 1px 1px #00000026;
		padding: 0.5em 1.5em 1.5em;

		&.disabled {
			opacity: 0.4;
		}

		.title {
			font-size: 1.2rem;
			color: #000;
			font-weight: 700;
			margin: 0.4em 0;
		}

		.subtitle {
			font-size: 1.15rem;
			color: var(--primary);
			font-weight: 500;
		}

		.left {
			display: flex;
			align-items: center;
			span {
				font-weight: 700;
				color: #000;
				font-size: 1.6rem;
				margin-right: 0.2em;
			}
		}
	}

	@media (min-width: 600px) {
		.wrapper {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
`;

export const ProjectRewardCard = ({ disabled, text, title, subtitle, left }) => {
	return (
		<StyledProjectRewardCard>
			<Card className={`card ${disabled ? 'disabled' : ''}`}>
				<p className="title">{title}</p>
				<span className="subtitle">{subtitle}</span>
				<p className="text">{text}</p>
				<div className="wrapper">
					<p className="left">
						<span>{left}</span> left
					</p>
					{disabled ? (
						<Button text="Out of stock" type="disabled" />
					) : (
						<Button text="Select Reward" />
					)}
				</div>
			</Card>
		</StyledProjectRewardCard>
	);
};

ProjectRewardCard.propTypes = {
	disabled: PropTypes.bool,
};

ProjectRewardCard.defaultProps = {
	disabled: false,
};
