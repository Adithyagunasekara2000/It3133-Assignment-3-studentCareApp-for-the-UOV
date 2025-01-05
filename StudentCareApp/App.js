import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import Login from './components/Login';

import BottomTabs from './components/Bottomtabs'; 
import Profile from './components/Profile';
const Stack=createNativeStackNavigator();

export default function App() {
const Stack=createNativeStackNavigator();

  return (
   <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'
      screenOptions={
        {
          headerStyle:{backgroundColor:'#8B008B'},
        }
      }
      >
        <Stack.Screen name="login" component={Login} options={{ title: "Student Care App" }} />
      <Stack.Screen name='profile' component={Profile}/>
        <Stack.Screen name="bottom" component={BottomTabs} options={{ title: "Student Care App" }} />
        </Stack.Navigator>
       
      
     
         
       
    </NavigationContainer>
   </SafeAreaProvider>
   
  );
}

