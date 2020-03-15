import React from 'react';

import styled from 'styled-components';

export const Cards = styled.div`
  width: 37%;
	background-color: #EC5E77;
	margin-left: 1em;
	margin-bottom: 1em;
	display: inline-block;
	padding: 15px;
	margin-top: 2em;
	border-radius: 5px;
	border-top-right-radius: 40px;
	border-top-left-radius: 40px;
	box-shadow: 2px 2px 10px #58CEC2;
	margin-left: 2.5em;
	opacity: 0.9;
`;

export const CenterTitle = styled.h1`
  font-size: 24px;
  color: black;
  font-family: Castellar; 
  margin-top: 1em;
  margin-left: 2em;
  text-align: left;
`;

const SubmitButtonStyle = styled.button`
  margin: 2em 0;
`;

export const SubmitButton: React.FC = (props) => (
  <SubmitButtonStyle {...props} />
);
