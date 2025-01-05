import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import Login from './components/Login';
//import Profile from './components/Profile';
import BottomTabs from './components/Bottomtabs'; 
//import Course from './components/Course';
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
        <Stack.Screen name="login" component={Login} options={{title:"UOV Student Care"}} />
       
        <Stack.Screen name="Main" component={BottomTabs} />
        </Stack.Navigator>
      
     
         
       
    </NavigationContainer>
   </SafeAreaProvider>
   
  );
}

