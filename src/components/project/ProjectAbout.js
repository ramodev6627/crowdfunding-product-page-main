import React, { useState } from 'react';
import styled from 'styled-components';
import { Card } from '../Card';
import { ProjectRewardCard } from './ProjectRewardCard';

const StyledProjectAbout = styled.div`
	margin-top: 2em;

	h2 {
		font-size: 1.4rem;
		margin: 1em 0;
	}

	p {
		font-size: 1rem;
		line-height: 1.4;
		letter-spacing: 0.017rem;
		color: var(--dark-grey);
		margin: 1.5em 0;
	}
`;

export const ProjectAbout = () => {
	const [rewards] = useState([
		{
			title: 'Bamboo Stand',
			subtitle: 'Pledge $25 or more',
			text: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional
        campaign, and you’ll be added to a special Backer member list.`,
			left: 101,
		},
		{
			title: 'Black Edition Stand',
			subtitle: 'Pledge $75 or more',
			text: `You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
        member list. Shipping is included.`,
			left: 64,
		},
		{
			title: 'Mahogany Special Edition',
			subtitle: 'Pledge $200 or more',
			text: `You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
        to our Backer member list. Shipping is included.`,
			left: 0,
		},
	]);

	return (
		<StyledProjectAbout>
			<Card>
				<h2>About this project</h2>
				<p>
					The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your
					screen to a more comfortable viewing height. Placing your monitor at eye level has the
					potential to improve your posture and make you more comfortable while at work, helping you
					stay focused on the task at hand.
				</p>
				<p>
					Featuring artisan craftsmanship, the simplicity of design creates extra desk space below
					your computer to allow notepads, pens, and USB sticks to be stored under the stand.
				</p>
				{rewards.map((reward) => {
					return (
						<ProjectRewardCard
							key={reward.left + Math.floor(Math.random() * 100)}
							title={reward.title}
							subtitle={reward.subtitle}
							text={reward.text}
							left={reward.left}
							disabled={reward.left ? false : true}
						/>
					);
				})}
			</Card>
		</StyledProjectAbout>
	);
};
