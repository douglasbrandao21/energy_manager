import { Switch } from 'react-router-dom';

import CustomRoute from './Route';

import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

function Routes() {
  return (
    <Switch>
      <CustomRoute path="/" exact component={SignIn} />
      <CustomRoute path="/signup" exact component={SignUp} />
      <CustomRoute path="/dashboard" exact component={Dashboard} isPrivated />
    </Switch>
  );
}

export default Routes;