import React, { useState } from 'react';
import styled from 'styled-components';
import imageDesktop from '../images/image-hero-desktop.jpg';
import imageMobile from '../images/image-hero-mobile.jpg';
import logo from '../images/logo.svg';
import iconHamburger from '../images/icon-hamburger.svg';
import Modal from './Modal';

const StyledHeader = styled.div`
	background-image: url(${imageMobile});
	background-size: cover;
	padding: 2em 1em 14em;
	box-shadow: inset 0 13px 24px #0009;

	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		max-width: 1300px;
		margin: 0 auto;

		.mobile-menu-toggle {
			background: transparent;
			border: 0;
		}

		.desktop-links {
			display: none;
		}
	}

	@media (min-width: 900px) {
		background-image: url(${imageDesktop});

		padding-bottom: 14em;

		.header {
			.desktop-links {
				list-style-type: none;
				display: flex;
				align-items: center;

				li {
					margin: 0 0.8em;

					a {
						text-decoration: 0;
						color: #fff;
						transition: opacity 0.1s ease-in;

						:hover,
						:focus {
							opacity: 0.8;
						}
					}
				}
			}

			.mobile-menu-toggle {
				display: none;
			}
		}
	}

	@media (min-width: 1440px) {
		padding-bottom: 18em;
	}
`;

export const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const stylesForModal = `
		.mobile-menu{
			li{
				list-style-type:none;
				
				a{
					color:#000;
					font-size:1rem;
					font-weight:500;
					display:block;
					padding: 1.1em .8em;
					text-decoration:none; 
				}
			}
			.divider{
				width: 100%;
				height: 1px;
				background-color: #0000000f;
			}
		}

	`;

	return (
		<StyledHeader>
			<div className="header">
				<img src={logo} alt="crowfund logo" />
				<button
					className="mobile-menu-toggle"
					onClick={() => setMobileMenuOpen((prevState) => !prevState)}
				>
					<img src={iconHamburger} alt="mobile menu" />
				</button>

				{mobileMenuOpen && (
					<Modal
						css={stylesForModal}
						closeModal={() => setMobileMenuOpen((prevState) => !prevState)}
					>
						<ul className="mobile-menu">
							<li>
								<a href="/about">About</a>
							</li>
							<div className="divider"></div>
							<li>
								<a href="/discover">Discover</a>
							</li>
							<div className="divider"></div>
							<li>
								<a href="/getstarted">Get Started</a>
							</li>
						</ul>
					</Modal>
				)}
				<ul className="desktop-links">
					<li>
						<a href="/about">About</a>
					</li>
					<li>
						<a href="/discover">Discover</a>
					</li>
					<li>
						<a href="/getstarted">Get Started</a>
					</li>
				</ul>
			</div>
		</StyledHeader>
	);
};
