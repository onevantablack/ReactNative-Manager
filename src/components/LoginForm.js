import React, { Component } from 'react';
import { Card , CardSection, Input, Button, Spinner } from './common';
import { connect } from 'react-redux';
import {emailChanged_action, passwordChanged_action, loginUser_action} from '../actions';
import { View, Text } from 'react-native';


class LoginForm extends Component {
    onEmailChanged(text){
        this.props.emailChanged_action(text);
        //console.log(this.props.emailChanged_action)
    }

    onPasswordChanged(text){
        this.props.passwordChanged_action(text);
    }

    onButtonPress(){
        //console.log("onButtonPress: " + this.props.email + this.props.password)
        this.props.loginUser_action(this.props.email ,this.props.password);
    }

    renderError(){
        if (this.props.error){
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={ styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }

    renderButton(){
        if (this.props.loading){
            return   <Spinner size="large" />;
        }
        return (
            <Button onPress = {this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

    render() {
        return (
            <Card>

                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChanged.bind(this)} //watch for changes
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText = {this.onPasswordChanged.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>

            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize:20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = ({  auth_State }) => {
    //console.log("mapStateToProps: " + auth_State.email)
    const {email, password, error, loading} = auth_State;
    return {email, password, error, loading}
   
    // return {
    //     email_LoginForm_Props: state.auth_State.email,
    //     password_LoginForm_Props : state.auth_State.password,
    //     error_LoginForm_Props: state.auth_State.error,
    //     loading_loginForm_Props: state.auth_State.loading
    // }

};

export default connect(mapStateToProps, {
    emailChanged_action, 
    passwordChanged_action, 
    loginUser_action
})(LoginForm);
