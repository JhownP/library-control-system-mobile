import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import PreLoading from '../screens/PreLoading';
import Login from '../screens/Authentication/Login';
import Register from '../screens/Authentication/Register';
import { TabsRouter } from './Tabs/routes';

const Routes = createAppContainer(
    createSwitchNavigator({
        PreLoading,
        Login,
        Register,
        TabsRouter: {
            screen: TabsRouter
        }
    }),
);

export default Routes;