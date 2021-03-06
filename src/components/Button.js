import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native'; 

const Button = ({onPress}) => {
    const { textStyle, buttonStyle } = style;

    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}> Click me!!! </Text>
        </TouchableOpacity>
    )
}

const style = {
    textStyle: {
        alignSelf: 'center',
        color: '#007AFF',
        fontSize: 16,
        fontWeight: '600',
        paddingBottom: 10,
        paddingTop: 10
    },

    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007AFF',
        marginLeft: 5,
        marginRight: 5
    }
}

export default Button;