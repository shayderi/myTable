import {flow, sortBy, reverse, slice, identity} from "lodash/fp";
import users from "../dist/users.json";

export function getUsers(
	fromIndex,
	pageSize,
	sortByProp,
	sortDirection
){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const sortedList = flow([
				sortBy((user) => user[sortByProp]),
				sortDirection === "ASC" ? identity : reverse,
				slice(fromIndex, fromIndex + pageSize - 1)])(users);
				
			resolve({
				users: sortedList,
				hasNextPage: false,
				totalMount: 101
			});
		}, 100);
	});
}