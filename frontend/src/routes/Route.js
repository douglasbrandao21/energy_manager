import { Route, Redirect } from 'react-router-dom';

function CustomRoute({ component: Component, isPrivated = false, ...rest }) {
  const isAuthenticated = localStorage.getItem("user");

  if(!isAuthenticated && isPrivated)
    return <Redirect to="/" />

  if(isAuthenticated && !isPrivated)
    return <Redirect to="dashboard" />

  return <Route {...rest} component={Component} />
}

export default CustomRoute;