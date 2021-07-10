import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import { Card } from '../Card';
import PropTypes from 'prop-types';
import { ThanksModal } from './ThanksModal';

const StyledCheckListItem = styled.div`
	margin-bottom: 2em;

	.card {
		box-shadow: 0px 0px 1px 1px #00000026;
		padding: 0.5em 1.5em 1.5em;
		cursor: context-menu;

		.row {
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

			.header {
				display: flex;
				align-items: center;
			}

			.radio-button {
				margin-right: 1em;
				width: 25px;
				height: 25px;
				border: 1px solid var(--light-grey);
				border-radius: 50%;
				display: flex;
				align-items: center;
				justofy-content: center;

				span {
					display: block;
					width: 15px;
					height: 15px;
					border-radius: 50%;
					margin: auto;
					background: var(--primary);
				}
			}

			.title {
				font-size: 1.1rem;
				color: #000;
				font-weight: 700;
				margin: 0.4em 0;
			}

			.subtitle {
				font-size: 1rem;
				color: var(--primary);
				font-weight: 500;
			}
		}

		hr {
			width: calc(100% + 3em);
			opacity: 0.1;
			border-radius: 21px;
			transform: translateX(-1.5em);
		}

		.pledge {
			text-align: center;

			.wrapper {
				display: flex;
				justify-content: center;
				align-content: center;
				flex-wrap: wrap;
			}

			.input,
			button {
				margin: 0 2em;
			}

			.input {
				max-width: 100px;
				position: relative;

				input {
					padding: 1em 1.6em;
					max-width: 100px;
					border: 1px solid var(--light-grey);
					border-radius: 42px;
					font-size: 1rem;
					font-weight: 500;
					letter-spacing: 0.015em;
					transition: all 0.2s ease-in;
					outline: 0;
					caret-color: var(--primary-dark);

					:hover,
					:focus {
						border-color: var(--primary-dark);
					}
				}

				label {
					position: absolute;
					color: var(--dark-grey);
					top: 50%;
					transform: translateY(-50%);
					left: 13px;
				}
			}
		}

		:hover {
			opacity: 0.8;
		}

		&.selected {
			box-shadow: 0px 0px 1px 1px var(--primary);
		}

		&.disabled {
			opacity: 0.4;

			:hover {
				opacity: 0.4;
			}
		}
	}

	@media (min-width: 900px) {
		.row {
			display: flex;
			align-items: center;

			.left {
				margin-left: auto;
			}
		}
		.card {
			padding-bottom: 0.5em;

			.pledge {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin: 0.5em 0;

				button {
					margin-right: 0;
				}
			}
		}
	}

	@media (min-width: 900px) {
	}
`;

export const CheclListItem = ({
	disabled,
	selected,
	onClickHandler,
	text,
	title,
	subtitle,
	left,
	minValue,
}) => {
	const [thanksModal, setThanksModal] = useState(false);

	return (
		<StyledCheckListItem onClick={disabled ? null : onClickHandler}>
			<Card className={`card ${disabled ? 'disabled' : ''} ${selected ? 'selected' : ''}`}>
				<div className="row">
					<div className="header">
						<div className="radio-button">{selected && <span></span>}</div>
						<div>
							<p className="title">{title}</p>
							<span className="subtitle">{subtitle}</span>
						</div>
					</div>
					<p className="left">
						<span>{left}</span> left
					</p>
				</div>
				<p className="text">{text}</p>

				{selected &&
					(disabled ? (
						<Button text="Out of stock" type="disabled" />
					) : (
						<>
							<hr />
							<div className="pledge">
								<p>Enter your pledge</p>
								<div className="wrapper">
									<div className="input">
										<input id="pledge" type="number" min={minValue} defaultValue={minValue} />
										<label htmlFor="pledge">$</label>
									</div>
									<Button text="Continue" onClick={() => setThanksModal(true)} />
								</div>
							</div>
						</>
					))}
			</Card>

			{thanksModal ? <ThanksModal closeModal={() => setThanksModal(false)} /> : null}
		</StyledCheckListItem>
	);
};

CheclListItem.propTypes = {
	disabled: PropTypes.bool,
	selected: PropTypes.bool,
	onClickHandler: PropTypes.func,
};

CheclListItem.defaultProps = {
	disabled: false,
	selected: false,
};
