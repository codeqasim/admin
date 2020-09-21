import React, {useEffect} from 'react';
import ProductForm from './Form';
import { userServices } from '../../../../../services'
import { connect } from "react-redux";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { 
	settings,
	showLoading
} from 'redux/actions/Auth';

const AddProduct = (props) => {
	useEffect(() => {
		console.log("calling funtions")
		showLoading();
		userServices
		.settingView()
		.then(res=>
			settings(res)
			)
		.catch(err=>alert(JSON.stringify(err)))
	}, [])
	return (
		<ProductForm mode="ADD"/>
	)
}

const mapStateToProps = ({auth}) => {
	const {loading, settings} = auth;
  return {loading, settings}
}

const mapDispatchToProps = {
	settings,
	showLoading
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddProduct))
