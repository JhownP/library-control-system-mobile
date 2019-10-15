import React, { Component } from 'react';
import { View, AsyncStorage, KeyboardAvoidingView, Platform, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import api from '../../../services/api';
import logo from '../../../assets/logo.png';
import fundo from '../../../assets/Login/BackgroundLogin.jpg'
import { styles } from './styles.js';
import { ConfirmDialog, ProgressDialog } from "react-native-simple-dialogs";

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            progress: false,
            dialogNotificationLogin: false,
            titleNotificationLogin: '',
            messageNotificationLogin: '',
            colorEmailVerification: '#054774',
            colorPasswordVerification: '#054774',
            email: '',
            password: '',
        };
    }

    handleSubmit = async (object) => {
        if ((this.state.email != '' && this.state.email != undefined) &&
            this.state.password != '' && this.state.password != undefined) {
            this.setState({ progress: true });
            api.post('/authenticate', {
                email: object.state.email,
                password: object.state.password
            }).then((response) => {
                if (response.data) {
                    const { type, token } = response.data;  
                    AsyncStorage.setItem('token', token);
                    AsyncStorage.setItem('type', type);
                    this.props.navigation.navigate('Dashboard');
                } else {
                    return this.setState({
                        dialogNotificationLogin: true,
                        titleNotificationLogin: 'Informações Incorretas',
                        messageNotificationLogin: 'Email ou Senha Informados são Inválidos!'
                    });
                }
            }).catch((err) => {
                console.error(err);
            }).finally(() => {
                this.setState({ progress: false })
            });
        } else {
            this.setState({ colorEmailVerification: this.verificationText(this.state.email)});
            this.setState({ colorPasswordVerification: this.verificationText(this.state.password)});
        }
    }

    handleRegister() {
        this.props.navigation.navigate('Register');
    }

    handleEmailChange = (email) => {
        this.setState({ 
            email,
            colorEmailVerification: '#054774'
        });
    }

    handlePasswordChange = (password) => {
        this.setState({ 
            password,
            colorPasswordVerification: '#054774'
        });
    }

    verificationText(variable) {
        return variable === '' ? '#e74c3c' : '#054774';
    }

    render() {
        return(
            <>
                <KeyboardAvoidingView enabled={Platform.OS === 'IOS'} behavior="padding" style={styles.conteiner}>
                    <Image style={styles.fundoLogin} source={fundo} />
                    <Image source={logo} />

                    <View style={styles.form}>
                        <Text style={styles.label}>E-MAIL * </Text>
                        <TextInput 
                            style={[styles.input, {borderColor: this.state.colorEmailVerification }]}
                            placeholder="Seu E-mail"
                            placeholderTextColor="#054774"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={this.state.email}
                            onChangeText={this.handleEmailChange}
                            maxLength={254}
                        />

                        <Text style={styles.label}>SENHA * </Text>
                        <TextInput 
                            style={[ styles.input, {borderColor: this.state.colorPasswordVerification }]}
                            placeholder="Sua Senha"
                            placeholderTextColor="#054774"
                            autoCapitalize="none"
                            secureTextEntry={true}
                            autoCorrect={false}
                            value={this.state.password}
                            onChangeText={this.handlePasswordChange}
                            maxLength={60}
                        />

                        <View style={styles.buttonGroup}>
                            <TouchableOpacity onPress={() => this.handleRegister()} style={styles.buttonRegister}>
                                <Text style={styles.buttonRegisterText}>
                                    <Icon
                                        name="user-plus"
                                        size={20}
                                        color="#054774"
                                    />
                                    &nbsp; Registrar
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.handleSubmit(this)} style={styles.button}>
                                <Text style={styles.buttonText}>
                                    <Icon
                                        name="arrow-right"
                                        size={20}
                                        color="#f3f3f3"
                                    />
                                    &nbsp; Entrar
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <ProgressDialog
                        visible={this.state.progress}
                        title='Aguarde'
                        message='Efetuando Login ...'
                        activityIndicatorColor={styles.button.backgroundColor}
                    />

                    <ConfirmDialog
                        visible={this.state.dialogNotificationLogin}
                        title={this.state.titleNotificationLogin}
                        positiveButton={{
                            title: "OK",
                            onPress: () => this.setState({dialogNotificationLogin: false})
                        }}
                    >
                        <View><Text>{this.state.messageNotificationLogin}</Text></View>
                    </ConfirmDialog>
                </KeyboardAvoidingView>
            </>
        );
    }
}