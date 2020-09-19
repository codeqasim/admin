import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Dashboards = ({ match }) => {
  return(
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Route path={`${match.url}/dashboard`} component={lazy(() => import(`./default`))} />
      <Route path={`${match.url}/updates`} component={lazy(() => import(`./analytic`))} />
      <Route path={`${match.url}/modules`} component={lazy(() => import(`./sales`))} />
      <Route path={`${match.url}/mail`} component={lazy(() => import(`../apps/mail`))} />
      <Route path={`${match.url}/general`} component={lazy(() => import(`../apps/general`))} />
      <Route path={`${match.url}/chat`} component={lazy(() => import(`../apps/chat`))} />
      <Route path={`${match.url}/calendar`} component={lazy(() => import(`../apps/calendar`))} />
      <Route path={`${match.url}/project`} component={lazy(() => import(`../apps/project`))} />
      <Route path={`${match.url}/ecommerce`} component={lazy(() => import(`../apps/e-commerce`))} />
      <Redirect from={`${match.url}`} to={`${match.url}/dashboard`} />
    </Switch>
  </Suspense>
)};

export default Dashboards;