import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { containerStyle, inputStyle, labelStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText} 
                underlineColorAndroid='transparent'
                style={inputStyle}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000', 
        width: 100,
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2 //allocation of available space (2 thirds of the available space)
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1 //allocation of available space (1 third of the available space)
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };