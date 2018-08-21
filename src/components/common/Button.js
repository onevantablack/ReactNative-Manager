import React from 'react';
import {Text, TouchableOpacity } from 'react-native';

const Button = ({onPress, children}) => {
    const {buttonStyle, buttonText} = styles;



    return(
        <TouchableOpacity onPress={onPress} style={buttonStyle}>  
            <Text 
            style={buttonText}
            >{children}</Text>
        </TouchableOpacity>
    )
}

const styles = {
    buttonStyle:{
        flex:1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderColor: '#007aff',
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5

    },
    buttonText:{
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
}
export  {Button} ;