import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import Settings from './settings'

const Ecommerce = props => {
  const { match } = props
	return (
		<Switch>
			<Redirect exact from={`${match.url}`} to={`${match.url}/settings`} />
			<Route path={`${match.url}/settings`} component={Settings} />
		</Switch>
	)
}

export default Ecommerce

