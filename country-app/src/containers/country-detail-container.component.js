import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../actions/actions-countries';
import CountryDetails from '../presentational/country-details.component';

class CountryDetailsContainer extends Component {
	// eslint-disable-next-line
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.dispatch(getCountry(this.props.params.id));
	}

	render() {
		return(
			<CountryDetails country={this.props.selectedCountry} />
		)
	}
}

const mapStatetoProps = function (store) {
	return {
		selectedCountry: store.countriesReducer.selectedCountry
	};
};

export default connect(mapStatetoProps)(CountryDetailsContainer);