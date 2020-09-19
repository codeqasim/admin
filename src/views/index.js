import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AppLayout from "layouts/app-layout";
import AuthLayout from 'layouts/auth-layout';
import AppLocale from "lang";
import { IntlProvider } from "react-intl";
import { ConfigProvider } from 'antd';

function RouteInterceptor({ children, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          children
        )
      }
    />
  );
}

export const Views = (props) => {
  const { locale, token, location, login } = props;
  const currentAppLocale = AppLocale[locale];
  return (
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}>
      <ConfigProvider locale={currentAppLocale.antd}>
        <Switch>
          <Route exact path="/">
          {login ?  <Redirect to="/app" />:<Redirect to="/auth" />}
          </Route>
          {
            login ? 
            <RouteInterceptor path="/app" isAuthenticated={login}>
            <AppLayout location={location}/>
          </RouteInterceptor>
          :
          <Route path="/auth">
          <AuthLayout />
        </Route>
          }
          
          
        </Switch>
      </ConfigProvider>
    </IntlProvider>
  )
}


const mapStateToProps = ({ theme, auth }) => {
  const { locale } =  theme;
  const { token, login } = auth;
  return { locale, token, login }
};

export default withRouter(connect(mapStateToProps)(Views));