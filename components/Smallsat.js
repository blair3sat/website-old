import React from "react";
import styled from "styled-components";

const SmallsatContainer = styled.section`
	text-align: center;

	h2 {
		font-size: 3em;
	}
`;

export const SmallSat = () => {
	return (
		<SmallsatContainer>
			<h2>Smallsat 2019</h2>
		</SmallsatContainer>
	);
};
