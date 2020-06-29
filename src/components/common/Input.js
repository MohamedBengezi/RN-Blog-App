import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const Input = ({ label, value, onChangeText, placeHolder, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;
    console.log(`Input.js. label: ${label},  value: ${value}, placeHolder: ${placeHolder}`)
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeHolder}
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default Input;