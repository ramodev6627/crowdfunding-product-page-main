import React, { useState } from 'react';
import styled from 'styled-components';
import { Card } from '../Card';

const StyledProjectStats = styled.div`
	margin-top: 2em;

	.stats .wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		.stat {
			text-align: center;
			color: var(--dark-grey);
			line-height: 1.4;
			margin: 1.5em 0;

			span {
				font-weight: 700;
				color: #000;
				font-size: 2.5rem;
			}
		}

		hr {
			width: 100%;
			opacity: 0.2;
			border-radius: 21px;
			max-width: 100px;
		}
	}
	.progress-bar {
		margin-bottom: 1.5em;
		width: 100%;
		height: 15px;
		background: var(--light-grey);
		border-radius: 15px;
		overflow-x: hidden;

		.progress {
			background: var(--primary);
			height: 100%;
			width: ${(props) => props.progress}%;
		}
	}

	@media (min-width: 900px) {
		.stats .wrapper {
			flex-direction: row;
			justify-content: space-between;

			hr {
				transform: rotate(90deg);
				max-width: 70px;
			}
		}
	}
`;

export const ProjectStats = () => {
	const [stats] = useState({
		goal: new Intl.NumberFormat('en-US').format(100000),
		progress: new Intl.NumberFormat('en-US').format(89914),
		backersNumber: new Intl.NumberFormat('en-US').format(5007),
		daysLeft: 56,
	});

	return (
		<StyledProjectStats
			progress={
				(Number(stats.progress.replaceAll(',', '.')) * Number(stats.goal.replaceAll(',', '.'))) /
				100
			}
		>
			<Card className="stats">
				<div className="wrapper">
					<p className="stat">
						<span>${stats.progress}</span>
						<br />
						of ${stats.goal} backed
					</p>
					<hr />
					<p className="stat">
						<span>{stats.backersNumber}</span>
						<br />
						total backers
					</p>
					<hr />
					<p className="stat">
						<span>{stats.daysLeft}</span>
						<br />
						days left
					</p>
				</div>
				<div className="progress-bar">
					<div className="progress"></div>
				</div>
			</Card>
		</StyledProjectStats>
	);
};
