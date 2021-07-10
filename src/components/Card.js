import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
	background: #fff;
	width: 100%;
	border-radius: 5px;
	padding: 1.5em 2.5em;
	box-shadow: 0px 0px 1px 1px #0000000d;
`;

export const Card = ({ children, className }) => {
	return <StyledCard className={className}>{children}</StyledCard>;
};
