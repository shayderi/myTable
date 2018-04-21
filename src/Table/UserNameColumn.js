import React, {Component} from "react";
import styled from "styled-components";

const OutterContainer = styled.div`
display: flex;
flex-direction: row;
`;

const CellData = styled.span`
margin-left: 10px;
`;

class UserNameColumn extends Component {
	constructor() {
		super();
	}
	render() {
		return(
			<OutterContainer>
				<img src={this.props.rowData.gender === "male" ? "userMale.svg" : "userFemale.svg"}
					width="20" height="20"/>
				<CellData>
					{
						this.props.cellData
					}
				</CellData>
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

export default UserNameColumn;
