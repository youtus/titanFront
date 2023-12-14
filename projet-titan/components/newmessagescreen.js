import React, { useState } from 'react';
import { View, TextInput, Button, AsyncStorage } from 'react-native';

const NewMessageScreen = ({ navigation }) => {

    return (
    <View>
      <TextInput
        multiline
        numberOfLines={4}
        placeholder="Entrez votre message ici..."
        value={message}
        onChangeText={(text) => setMessage(text)}
      />
      <Button title="Poster le Message" onPress={handlePostMessage} />
    </View>
  );
};

export default NewMessageScreen;
