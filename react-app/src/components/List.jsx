import React from 'react';
import { connect } from 'react-redux';

let List = ({ restaurants }) =>
	restaurants
		? restaurants.map((elm, idx) => (
				<div key={idx}>
					<p>{elm.name}</p>
				</div>
		  ))
		: null;
const mapStateToProps = state => ({
	restaurants: state.restaurants
});
List = connect(mapStateToProps, null)(List);
export default List;
