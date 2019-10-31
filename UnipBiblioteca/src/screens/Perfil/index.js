import React, { Component } from 'react';
import { View, Text, Platform, KeyboardAvoidingView } from 'react-native';
// import api from '../../../services/api';
import { styles } from './styles.js';

export default class Perfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <>
                <KeyboardAvoidingView enabled={Platform.OS === 'IOS'} behavior="padding" style={styles.conteiner}>
                    <Text>teste perfil</Text>
                </KeyboardAvoidingView>
            </>
        );
    }
};