import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './screens/Authentication/Login';
import Register from './screens/Authentication/Register';
import Dashboard from './screens/Dashboard';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Register,
        Dashboard
    })
);

export default Routes;