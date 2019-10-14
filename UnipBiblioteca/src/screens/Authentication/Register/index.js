import React, { Component } from 'react';
import { View, AsyncStorage, KeyboardAvoidingView, Platform, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { ConfirmDialog, ProgressDialog } from "react-native-simple-dialogs";

import api from '../../../services/api';

import logo from '../../../assets/logo.png';
import fundo from '../../../assets/Login/BackgroundLogin.jpg'

import { styles } from './styles.js';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            progress: false,
            dialogNotificationLogin: false,
            titleNotificationLogin: '',
            messageNotificationLogin: '',
            username: '',
            email: '',
            password: '',
            repeatPassword: '',
            phone: '',
            colorUsernameVerification: '#054774',
            colorEmailVerification: '#054774',
            colorPasswordVerification: '#054774',
            colorRepeatPasswordVerification: '#054774'
        };
    }
    
    handleSubmit = async (object) => {
        if (this.state.username != '' && this.state.username != undefined &&
            this.state.email != '' && this.state.email != undefined &&
            this.state.password != '' && this.state.password != undefined &&
            this.state.repeatPassword != '' && this.state.repeatPassword != undefined) {
            
            if (this.state.password === this.state.repeatPassword) {
                this.setState({ progress: true });
                api.post('/register', {
                    username: object.state.username,
                    email: object.state.email,
                    password: object.state.password,
                    phone: object.state.phone
                }).then((response) => {
                    if (response.data) {
                        
                    } else {
                        
                    }
                }).catch((err) => {
                    console.error(err);
                }).finally(() => {
                    this.setState({ progress: false })
                });
            } else {
                this.setState({
                    colorPasswordVerification: this.verificationPassword(this.state.password, this.setState.repeatPassword),
                    colorRepeatPasswordVerification: this.verificationPassword(this.state.password, this.setState.repeatPassword)
                });
            }
        } else {
            this.setState({ 
                colorUsernameVerification: this.verificationText(this.state.username),
                colorEmailVerification: this.verificationText(this.state.email),
                colorPasswordVerification: this.verificationText(this.state.password),
                colorRepeatPasswordVerification: this.verificationText(this.state.repeatPassword) 
            });
        }
    }

    handleGoBackPage() {
        this.props.navigation.navigate('Login');
    }

    handleUsernameChange = (username) => {
        this.setState({ 
            username,
            colorUsernameVerification: '#054774'
        });
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

    handleRepeatPasswordChange = (repeatPassword) => {
        this.setState({ 
            repeatPassword,
            colorRepeatPasswordVerification: '#054774'
        });
    }

    handlePhoneChange = (phone) => {
        this.setState({ phone });
    }

    verificationText(variable) {
        return variable === '' ? '#e74c3c' : '#054774';
    }

    verificationPassword(password, repeatPassword) {
        return password != repeatPassword ? '#e74c3c' : '#054774';
    }

    render() {
        return(
            <>
                <KeyboardAvoidingView enabled={Platform.OS === 'IOS'} behavior="padding" style={styles.conteiner}>
                    <Image style={styles.fundoLogin} source={fundo} />
                    <Image source={logo} />

                    <View style={styles.form}>
                        <Text style={styles.label}>USUÁRIO * </Text>
                        <TextInput 
                            style={[styles.input, {borderColor: this.state.colorUsernameVerification }]}
                            placeholder="Seu E-mail"
                            placeholderTextColor="#054774"
                            keyboardType="default"
                            autoCapitalize="words"
                            autoCorrect={false}
                            value={this.state.username}
                            onChangeText={this.handleUsernameChange}
                            maxLength={200}
                        />

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
                            style={[styles.input, {borderColor: this.state.colorPasswordVerification }]}
                            placeholder="Sua Senha"
                            placeholderTextColor="#054774"
                            autoCapitalize="none"
                            secureTextEntry={true}
                            autoCorrect={false}
                            value={this.state.password}
                            onChangeText={this.handlePasswordChange}
                            maxLength={60}
                        />

                        <Text style={styles.label}>REPETIR SENHA * </Text>
                        <TextInput 
                            style={[styles.input, {borderColor: this.state.colorRepeatPasswordVerification }]}
                            placeholder="Repita Sua Senha"
                            placeholderTextColor="#054774"
                            autoCapitalize="none"
                            secureTextEntry={true}
                            autoCorrect={false}
                            value={this.state.repeatPassword}
                            onChangeText={this.handleRepeatPasswordChange}
                            maxLength={60}
                        />

                        <Text style={styles.label}>TELEFONE</Text>
                        <TextInput 
                            style={[styles.input, {borderColor: this.state.colorPhoneVerification }]}
                            placeholder="Seu Telefone"
                            placeholderTextColor="#054774"
                            keyboardType="phone-pad"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={this.state.phone}
                            onChangeText={this.handlePhoneChange}
                            maxLength={20}
                        />
                        <TouchableOpacity onPress={() => this.handleSubmit(this)} style={styles.button}>
                            <Text style={styles.buttonText}>Registrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.handleGoBackPage()} style={styles.buttonRegister}>
                            <Text style={styles.buttonRegisterText}>Voltar</Text>
                        </TouchableOpacity>
                    </View>

                    <ProgressDialog
                        visible={this.state.progress}
                        title='Aguarde'
                        message='Registrando Usuário ...'
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

export default Register;