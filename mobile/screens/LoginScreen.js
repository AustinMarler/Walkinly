import React, { Component } from 'react';
import {
    Keyboard,
    StyleSheet,
    Text,
    View,
    TextInput,
    AsyncStorage,
    ImageBackground
} from 'react-native';
import { Button } from 'react-native-elements';

const VALID_EMAIL = '';
const VALID_PASSWORD = '';

export default class Login extends Component {
    state = {
        email: VALID_EMAIL,
        password: VALID_PASSWORD,
        errors: [],
        loading: false,
        isMounted: false
    }
    y
    componentDidMount() {
        this.setState({
            isMounted: true
        });
    }

    storeToken = async () => {
        try {
            await AsyncStorage.setItem('userToken', this.state.email);
        } catch (e) {
            console.log(e)
            throw new Error(e)
        }
    }

    handleLogin = async () => {
        const { navigation } = this.props;
        const { email, password } = this.state;
        const errors = [];

        Keyboard.dismiss();
        this.state.isMounted && this.setState({ loading: true });

        this.storeToken();
        navigation.navigate('Main');
    }

    componentWillUnmount() {
        this.setState({
            isMounted: false
        })
    }

    render() {
        const { navigation } = this.props;
        const { loading, errors } = this.state;
        const hasErrors = key => errors.includes(key) ? styles.hasErrors : null;

        return (
            <ImageBackground
                source={require('../assets/grady7.jpg')}
                style={styles.img}>
                <View>
                    <Text style={{
                        color: '#6a7189', fontSize: 40
                    }}>Login</Text>

                    <TextInput
                        label='Email'
                        placeholder='Email'
                        placeholderTextColor="#FFFFFF"
                        style={[styles.input, hasErrors('email')]}
                        defaultValue={this.state.email}
                        onChangeText={text => this.setState({ email: text })}
                        style={styles.input}
                    />
                    <TextInput
                        secure
                        label='Password'
                        placeholder='Password'
                        placeholderTextColor="#FFFFFF"
                        style={[styles.input, hasErrors('password')]}
                        defaultValue={this.state.password}
                        onChangeText={text => this.setState({ password: text })}
                        style={styles.input}
                    />

                    <Button
                        type="outline"
                        title="Enter"
                        onPress={() => this.handleLogin()} style={{
                            marginTop: 40,
                            alignSelf: 'center',
                            shadowColor: "#cccfd8",
                            shadowOpacity: 0.8,
                            shadowRadius: 2,
                            shadowOffset: {
                                height: 1,
                                width: 1
                            }
                        }}
                        buttonStyle={{
                            height: 50,
                            width: 150,
                            borderColor: 'white',
                            borderWidth: 2,
                        }}
                        titleStyle={{ color: 'white', fontSize: 20 }}
                    />
                    <Button
                        style={{ color: 'white', marginTop: 40 }}
                        titleStyle={{
                            color: 'white', fontSize: 20,
                            arginTop: 40,
                            alignSelf: 'center',
                            shadowColor: "#cccfd8",
                            shadowOpacity: 0.8,
                            shadowRadius: 2,
                            shadowOffset: {
                                height: 1,
                                width: 1
                            }
                        }}
                        type='clear'
                        title='Forgot your password?'
                        onPress={() => this.props.navigation.navigate('Forgot')}>
                    </Button>

                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 0,
        borderWidth: 2,
        borderColor: 'transparent',
        borderBottomColor: '#6a7189',
        padding: 10,
        marginTop: 40,
        fontSize: 25,
        color: 'white',
        shadowColor: "#cccfd8",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },

    img: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    }
});