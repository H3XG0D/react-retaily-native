import React from 'react';
import Login from "./components/login/Login";
import 'react-native-gesture-handler';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import routes from './src/config/routes';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'} screenOptions={{headerShown: false}}>
        {routes.map((r, i) => (
          <Stack.Screen name={r.name} key={i}>
            {(props) => <r.component nameProp={r.name} {...props} />}
          </Stack.Screen>
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
