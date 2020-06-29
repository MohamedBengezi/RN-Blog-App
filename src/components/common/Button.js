import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ShadowPropTypesIOS } from 'react-native';

const Button = ({ onPress, title }) => { //pull out onPress and title properties from prop
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={styles.textStyle}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        // flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10


    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        padding: 10,
        paddingTop: 10,
        paddingBottom: 10
    }
});

export default Button;