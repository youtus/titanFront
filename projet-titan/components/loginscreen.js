import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

function LoginScreen() {
  const navigation = useNavigation(); // Get the navigation object using useNavigation
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Pour commencer, entrez votre @nomdutilisateur</Text>
        <TextInput
          placeholder="Nom d'utilisateur"
          placeholderTextColor="gray"
          style={[styles.input, isUsernameFocused && styles.focusedInput]}
          onFocus={() => setIsUsernameFocused(true)}
          onBlur={() => setIsUsernameFocused(false)}
        />
        <Text style={styles.title}>Entrez votre mot de passe</Text>
        <TextInput
          placeholder="Mot de passe"
          placeholderTextColor="gray"
          style={[styles.input, isPasswordFocused && styles.focusedInput]}
          secureTextEntry={true}
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
        />
        <Button style={styles.buttonLogin} title="Se connecter" onPress={() => navigation.navigate('MessageScreen')}/>
      </View>
    </View>
  );
}

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
  input: {
    borderWidth: 1,
    color: '#ffffff',
    borderColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  focusedInput: {
    borderColor: '#00acee',
  },
  buttonLogin: {
    marginTop: 10,
    borderRadius: 100,
  },
});

export default LoginScreen;
