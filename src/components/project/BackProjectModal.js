import React, { useState } from 'react';
import Modal from '../Modal';
import PropTypes from 'prop-types';
import { CheclListItem } from './CheckListItem';

export const BackProjectModal = ({ closeModal }) => {
	const [rewards] = useState([
		{
			title: 'Bamboo Stand',
			subtitle: 'Pledge $25 or more',
			text: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional
        campaign, and you’ll be added to a special Backer member list.`,
			left: 101,
			minValue: 25,
		},
		{
			title: 'Black Edition Stand',
			subtitle: 'Pledge $75 or more',
			text: `You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
			member list. Shipping is included.`,
			left: 64,
			minValue: 75,
		},
		{
			title: 'Mahogany Special Edition',
			subtitle: 'Pledge $200 or more',
			text: `You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
			to our Backer member list. Shipping is included.`,
			left: 0,
			minValue: 200,
		},
	]);
	const [selected, setSelected] = useState(null);

	const css = `
        padding:1em 2em;

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
    `;

	return (
		<div>
			<Modal closeModal={closeModal} css={css}>
				<h1>Back this project</h1>
				<p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
				<div className="wrapper">
					{rewards.map((reward, id) => {
						return (
							<CheclListItem
								key={reward.left + Math.floor(Math.random() * 100)}
								title={reward.title}
								subtitle={reward.subtitle}
								text={reward.text}
								left={reward.left}
								disabled={reward.left === 0 ? true : false}
								selected={id + 1 === selected ? true : false}
								onClickHandler={() => setSelected(id + 1)}
								minValue={reward.minValue}
							/>
						);
					})}
				</div>
			</Modal>
		</div>
	);
};

BackProjectModal.propTypes = {
	closeModal: PropTypes.func,
};
BackProjectModal.defaultProps = {
	closeModal: () => null,
};
