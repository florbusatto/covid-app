import * as React from 'react';

//import {NavigationContainer} from '@react-navigation/native';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';

//import SplashScreen from './src/screens/splashScreen/SplashScreen.js';
//import LoginScreen from './src/screens/loginScreen/LoginScreen.js';
import {View} from 'react-native';
import FilterScreen from './src/screens/filterScreen/FilterScreen.js';

//const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <View>
        <FilterScreen />
      </View>
    </>
  );
}
/* return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
*/
export default App;
