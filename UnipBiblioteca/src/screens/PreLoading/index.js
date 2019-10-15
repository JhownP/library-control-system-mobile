import React, { Component } from 'react';
import { ImageBackground, Image, AsyncStorage } from 'react-native';

import logo from '../../assets/logo.png';
import fundo from '../../assets/Login/BackgroundLogin.jpg';

import { styles } from './styles.js';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    async componentDidMount(){
        setTimeout(async () => { 
            await AsyncStorage.getItem('token').then(token => {
                if (token) {
                    this.props.navigation.navigate('Dashboard');
                } else {
                    this.props.navigation.navigate('Login');
                }
            });
        }, 1500);
    }

    render() {
        return (
            <>
                <ImageBackground style={styles.fundoLogin} source={fundo}>
                    <Image source={logo} />
                </ImageBackground>
            </>
        );
    }
};