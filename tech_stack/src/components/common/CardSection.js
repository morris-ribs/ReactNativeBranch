// Import a library to help create a component
import React from 'react';
import { View } from 'react-native';

// Create a component
const CardSection = (props) => {
    return (
        <View style={style.containerStyle}>
            {props.children} 
        </View>
    );
};

const style = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

// Make the component available to other parts of the app
export { CardSection };