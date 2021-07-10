import React, { useState } from 'react';
import styled from 'styled-components';
import { Card } from '../Card';
import logoMastercraft from '../../images/logo-mastercraft.svg';
import { Button } from '../Button';
import { ButtonWithIcon } from '../ButtonWithIcon';
import { BackProjectModal } from './BackProjectModal';

const StyledProjectHeader = styled.div`
	text-align: center;
	margin-top: -3em;

	.logo {
		margin-top: -3em;
	}

	h1 {
		font-size: 1.4rem;
		margin: 1em 0;
	}

	p {
		font-size: 0.95rem;
		letter-spacing: 0.017rem;
		color: var(--dark-grey);
		margin: 1.5em 0;
	}

	.footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;

export const ProjectHeader = () => {
	const [project] = useState({
		title: 'Mastercraft Bamboo Monitor Riser',
		description: 'A beautiful & handcrafted monitor stand to reduce neck and eye strain.',
		logo: logoMastercraft,
	});

	const [bookmarked, setBookmarked] = useState(false);

	const [backProjectModal, setBackProjectModal] = useState(false);

	return (
		<StyledProjectHeader>
			<Card>
				<img className="logo" src={project.logo} alt={project.title} />
				<h1>{project.title}</h1>
				<p>{project.description}</p>
				<div className="footer">
					<Button text="Back this project" onClick={() => setBackProjectModal(true)} />
					<ButtonWithIcon
						type={bookmarked ? 'active' : ''}
						onClick={() => setBookmarked((prev) => !prev)}
						text={bookmarked ? 'Bookmarked' : 'Bookmark'}
					/>
				</div>
			</Card>
			{backProjectModal ? <BackProjectModal closeModal={() => setBackProjectModal(false)} /> : null}
		</StyledProjectHeader>
	);
};
