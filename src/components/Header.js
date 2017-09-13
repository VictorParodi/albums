import React, { Component } from 'react';
import { Text } from 'react-native';

const Header = () => {
    const {textStyle} = style;

    return <Text style={textStyle}> Albums </Text>
}

const style = {
    textStyle: {
        fontSize: 20
    }
}

export default Header;