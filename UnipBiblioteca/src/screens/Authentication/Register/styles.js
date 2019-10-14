import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
    },  

    fundoLogin: {
        resizeMode: 'cover',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
    },

    label: {
        fontWeight: 'bold',
        color: '#054774',
        marginBottom: 8,
    },

    input: {
        borderWidth: 1,
        borderColor: "#054774",
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#054774',
        height: 44,
        marginBottom: 20,
        borderRadius: 10
    },

    button: {
        height: 42,
        backgroundColor: '#054774',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },

    buttonText: {
        color: '#f3f3f3',
        fontWeight: 'bold',
        fontSize: 16,
    },

    buttonRegister: {
        marginTop: 20,
        height: 42,
        backgroundColor: '#f3f3f3',
        borderColor: '#054774',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },

    buttonRegisterText: {
        color: '#054774',
        fontWeight: 'bold',
        fontSize: 16,
    }
});