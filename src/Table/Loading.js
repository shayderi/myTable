import React, {Component} from "react";
import styled from "styled-components";

const OutterContainer = styled.div`
display: flex;
allign-items: center;
justify-content: center;
`;

class Loading extends Component {
	constructor() {
		super();
	}
	render() {
		return(
			<OutterContainer>
				<span>Loading...</span>
			</OutterContainer>
		);
	}
}

export default Loading;