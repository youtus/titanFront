
import { View, Text, StyleSheet } from 'react-native';

function UserScreen() {

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Bonjour, Thomas</Text>
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
});

export default UserScreen;
