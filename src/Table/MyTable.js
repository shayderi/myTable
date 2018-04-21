import "react-virtualized/styles.css";
import React, {Component} from "react";
import { Column, Table, SortDirection, InfiniteLoader } from "react-virtualized";
import "react-virtualized/styles.css"; // only needs to be imported once
import {sortBy as sortByFP, reverse} from "lodash/fp";
import {getUsers} from "../dataSimulation";
import "./styles/table.css";
import UserNameColumn from "./UserNameColumn";
import StatusColumn from "./StatusColumn";
// import CustomHeader from "./CustomHeader";
import NoResults from "./NoResults";
import Loading from "./Loading";

class MyTable extends Component {
	constructor() {
		super();
		this.state = {
			list: [],
			sortBy: "userName",
			sortDirection: SortDirection.ASC
		};

		this.sort = this.sort.bind(this);
		this.fetchUsers = this.fetchUsers.bind(this);
		this.isRowLoaded = this.isRowLoaded.bind(this);
		this.loadMoreRows = this.loadMoreRows.bind(this);
	}

	componentDidMount(){
		this.fetchUsers();
	}

	fetchUsers(requestType = "nextPage", sortBy = "userName", sortDirection = SortDirection.ASC, startIndex = 0, pageSize = 10){
		getUsers(startIndex, pageSize, sortBy, sortDirection === SortDirection.ASC ? "ASC" : "DESC")
			.then((response) => {
				const list = requestType !== "nextPage" ? response.users : [...this.state.list, ...response.users];
				this.setState({
					list,
					sortBy,
					sortDirection,
					loading: false,
					hasNextPage: list.length < response.totalMount,
					rowCount: response.totalMount
				});
			});
		this.setState({loading: true});
	}

	sort ({ defaultSortDirection, event, sortBy, sortDirection})  {
		this.fetchUsers("sort", sortBy, sortDirection);
	}

	isRowLoaded ({ index })  {
		return !this.state.hasNextPage || index < this.state.list.length;
	}

	loadMoreRows({ startIndex, stopIndex }){
		if(this.state.loading){
			return null;
		}
		this.fetchUsers("nextPage", this.state.sortBy, this.state.sortDirection, startIndex);
	}


	render() {
		// if(this.state.loading){
		// 	return <Loading/>;
		// }
		return (
			<InfiniteLoader
				threshold={10}
				isRowLoaded={this.isRowLoaded}
				loadMoreRows={this.loadMoreRows}
				rowCount={this.state.rowCount}>
				{
					({ onRowsRendered, registerChild }) => (
						<Table
							ref={registerChild}
							onRowsRendered={onRowsRendered}
							disableHeader={false}
							width={700}
							height={700}
							headerHeight={40}
							noRowsRenderer={() => <NoResults/>}
							rowHeight={30}
							rowCount={this.state.list.length}
							rowGetter={({ index }) => this.state.list[index]}
							rowClassName="rowClassName"
							sort={this.sort}
							sortDirection={this.state.sortDirection}
							sortBy={this.state.sortBy}>
							{/* <Column
								label="Index"
								cellDataGetter={({rowData}) => rowData.index}
								
								width={100}
							/> */}
							<Column
								label='User Name'
								dataKey='userName'
								cellRenderer={(props) => <UserNameColumn {...props} />}
								width={300}
							/>
							<Column
								width={300}
								label='Full Name'
								dataKey='fullName'
							/>
							<Column
								disableSort
								label='Status'
								dataKey='status'
								cellRenderer={(props) => <StatusColumn {...props} />}
								width={300}
							/>
						</Table>
					)
				}
			</InfiniteLoader>
		);
	}
}

export default MyTable;
