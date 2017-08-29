import React from 'react';
import { View, Text, Modal } from 'react-native';
import { CardSection } from './CardSection';

import { Button } from './Button';

// Create a component
const Confirm = ({ children, visible, onAccept, onDecline }) => {
  const { containerStyle, textStyle, cardSectionStyle } = styles;
  
  // in the buttons, we pass only a reference to a function; 
  // so we don't put the parenthesis, because if we did, the function
  // would be invoked immediately

  // on Modal, we pass an empty function to onRequestClose so that we don't do anything
  // special when the modal closes
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>{children}</Text>
        </CardSection>

        <CardSection>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0 ,0 ,0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center' // to stay in the center of the screen
  }
};

export { Confirm };
