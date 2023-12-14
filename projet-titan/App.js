import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginScreen from './components/loginscreen';
import MessageScreen from './components/messagescreen';
import NewMessageScreen from './components/newmessagescreen';
import UserScreen from './components/userscreen';

const Stack = createStackNavigator();

function CustomHeader({ navigation }) {
  return (
    <Icon
      name="user"
      size={24}
      color="#ffffff"
      style={{ marginLeft: 20 }}
      onPress={() => navigation.navigate('UserScreen')}
    />
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: 'Titan',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 24, color: '#ffffff' },
            headerStyle: { backgroundColor: '#000000' }
          }}
        />
        <Stack.Screen
          name="MessageScreen"
          component={MessageScreen}
          options={({ navigation }) => ({
            title: 'Titan',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 24, color: '#ffffff' },
            headerStyle: { backgroundColor: '#000000' },
            headerLeft: () => <CustomHeader navigation={navigation} />, 
          })}
        />
        <Stack.Screen
          name="NewMessageScreen"
          component={NewMessageScreen}
          options={{
            title: 'Titan',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 24, color: '#ffffff' },
            headerStyle: { backgroundColor: '#000000' }
          }}
        />
        <Stack.Screen
          name="UserScreen"
          component={UserScreen}
          options={{
            title: 'Titan',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 24, color: '#ffffff' },
            headerStyle: { backgroundColor: '#000000' }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

