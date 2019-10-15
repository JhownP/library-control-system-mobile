import { createStackNavigator } from 'react-navigation-stack';
import Dashboard from '../../screens/Dashboard';

export const StackRouter = createStackNavigator({
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            header: null,
        }
    }
},{
    initialRouteName: 'Dashboard'
});