import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import PreLoading from '../screens/PreLoading';
import Login from '../screens/Authentication/Login';
import Register from '../screens/Authentication/Register';
import { StackRouter } from './Stack/routes';

const Routes = createAppContainer(
    createSwitchNavigator({
        PreLoading,
        Login,
        Register,
        StackRouter: {
            screen: StackRouter
        }
    }),
);

export default Routes;