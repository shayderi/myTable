import React, {Component, Fragment} from "react";
import styled from "styled-components";

const OutterContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: start;
`;

const Active = styled.span`
color: green;
`;

const NotActive = styled.span`
color: red;
`;

const Info = styled.img`
margin-left: 10px;
`;

class StatusColumn extends Component {
	constructor() {
		super();
	}
	render() {
		return(
			<OutterContainer>
				{
					this.props.rowData.status === "active" && 
          <Active>Active</Active>
				}
				{
					this.props.rowData.status === "notActive" && 
					<Fragment>
						<NotActive>Inactive</NotActive>
          	<Info src="info.svg" width="20" height="20"/>
					</Fragment>
				}
			</OutterContainer>);
	}
}

/**
 * cellData: any,
  columnData: any,
  columnIndex: number,
  dataKey: string,
  isScrolling: boolean,
  rowData: any,
  rowIndex: number
 */

export default StatusColumn;
