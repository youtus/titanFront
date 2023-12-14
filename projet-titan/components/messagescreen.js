import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const MessagesScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
    
       
      />
      <Button title="Nouveau Message" onPress={() => navigation.navigate('NewMessageScreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    backgroundColor: '#000000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff',
  },
});

export default MessagesScreen;
