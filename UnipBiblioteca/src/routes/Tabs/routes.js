import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackRouter } from '../Stacks/routes';

import Emprestimos from '../../screens/Emprestimos';
import Perfil from '../../screens/Perfil';

export const TabsRouter = createMaterialBottomTabNavigator({
    StackRouter: {
        screen: StackRouter,
        navigationOptions: {
            tabBarLabel: 'Dashboard',
            tabBarIcon: ({tintColor})=>(
                <Icon name='home' color={tintColor} size={32} style={{ alignItems: 'center', width: 30 }}/>
            )
        }
    },
    Emprestimos: {
        screen: Emprestimos,
        navigationOptions: {
            tabBarLabel: 'Emprestimos',
            tabBarIcon: ({tintColor})=>(
                <Icon name='book' color={tintColor} size={32} style={{ alignItems: 'center', width: 30 }}/>
            )
        }
    },
    Perfil: {
        screen: Perfil,
        navigationOptions: {
            tabBarLabel: 'Perfil',
            tabBarIcon: ({tintColor})=>(
                <Icon name='user' color={tintColor} size={32} style={{ alignItems: 'center', width: 30 }}/>
            )
        }
    },
    
},{
    initialRouteName: 'StackRouter',
    activeColor: "#054774",
    inactiveColor: "#2d3436",
    barStyle: {
        backgroundColor: "#f1f2f6",
        borderTopColor: "#7f8fa6",
        paddingBottom: 10,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderStyle: 'solid',
    },
    labeled: false,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
});