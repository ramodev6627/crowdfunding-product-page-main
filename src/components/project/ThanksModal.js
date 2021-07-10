import React from 'react';
import Modal from '../Modal';
import PropTypes from 'prop-types';
import { Button } from '../Button';

export const ThanksModal = ({ closeModal }) => {
	const css = `
        .wrapper{
            padding:2.5em;
            text-align:center;
        }

       h1{
        font-size: 1.1rem;
        color: #000;
        font-weight: 700;
        margin: 0.4em 0;
       }

       p{
        font-size: 0.95rem;
        letter-spacing: 0.017rem;
        color: var(--dark-grey);
        margin: 1.5em 0;
       }
    `;

	return (
		<Modal closeModal={closeModal} css={css}>
			<div className="wrapper">
				<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
					<g fill="none" fillRule="evenodd">
						<circle fill="#3CB3AB" cx="32" cy="32" r="32" />
						<path stroke="#FFF" strokeWidth="5" d="M20 31.86L28.093 40 44 24" />
					</g>
				</svg>
				<h1>Thanks for your support!</h1>
				<p>
					Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser
					worldwide. You will get an email once our campaign is completed.
				</p>
				<Button text="Got it!" onClick={() => closeModal()} />
			</div>
		</Modal>
	);
};

ThanksModal.propTypes = {
	closeModal: PropTypes.func,
};
ThanksModal.defaultProps = {
	closeModal: () => null,
};
