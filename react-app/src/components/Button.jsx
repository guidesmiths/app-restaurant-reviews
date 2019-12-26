import React from 'react';
import { connect } from 'react-redux';
import { getRestaurants } from '../actions';

let Button = ({ getRestaurants }) => <button onClick={getRestaurants}>Press to see restaurants</button>;

const mapDispatchToProps = {
	getRestaurants: getRestaurants
};

Button = connect(null, mapDispatchToProps)(Button);

export default Button;
