import React, {Component} from "react";
import styled from "styled-components";

const OutterContainer = styled.div`
display: flex;
allign-items: center;
justify-content: center;
`;

class NoResults extends Component {
	constructor() {
		super();
	}
	render() {
		return(
			<OutterContainer>
				<span>No Results</span>
			</OutterContainer>
		);
	}
}

export default NoResults;