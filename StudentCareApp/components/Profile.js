import React from 'react'
import { useNavigation } from "@react-navigation/native";
import {PaperProvider,Text,TextInput,Button} from 'react-native-paper';
import { StyleSheet,View,Image,ScrollView } from "react-native";
import {useState,useEffect} from 'react';
import {students} from './StudentDb'
import BottomTabs from './Bottomtabs'
import { NavigationContainer } from '@react-navigation/native';

export default function Profile({route}) {
    const { user } = route.params;
    
  return (
  <ScrollView>
     <View>
        <Image source={require('../assets/uovlogo.png')}
        style={styles.icon}/>
        </View>
        <View style={styles.profilePicContainer}>
        <Image source={user.profile_pic} style={styles.profilePic} />
          <Text style={styles.profileName}>{user.name}</Text>
      </View>

      <View style={styles.profileDetails}>
        <Text style={styles.detail}>Age: {user.age}</Text>
        <Text style={styles.detail}>Course: {user.course}</Text>
        <Text style={styles.detail}>Email: {user.email}</Text>
        <Text style={styles.detail}>Phone: {user.phone}</Text>
        <Text style={styles.detail}>Gender: {user.gender}</Text>
        <Text style={styles.detail}>Blood Group: {user.blood_group}</Text>
        <Text style={styles.detail}>Address: {user.address}</Text>
      </View>
   <NavigationContainer>
    <BottomTabs/>
   </NavigationContainer>
  </ScrollView>
  
  )
}
const styles = StyleSheet.create({
   
    
    icon:{
        alignItems:'center',
        width:200,
        height:50,
        marginTop:10,
        marginLeft:80

    },
   
      profileName: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      profilePicContainer: {
        alignItems: 'center',
        marginBottom: 20,
      },
      profilePic: {
        width: 100,
        height: 100,
        borderRadius: 50,
      },
      profileDetails: {
        padding: 10,
      },
      detail: {
        fontSize: 16,
        marginBottom: 10,
      },
   
    
})
