import React from 'react'
import { useNavigation } from "@react-navigation/native";
import {PaperProvider,Text,TextInput,Button} from 'react-native-paper';
import { StyleSheet,View,Image,ScrollView } from "react-native";


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
      
      <View style={styles.profileName}>{user.name}</View>
      <View style={styles.profileDetails}>
        <Text style={styles.detail}>Age: {user.age} | Gender: {user.gender}</Text>
        </View>
        <View style={styles.separator} />
        <Text style={styles.head}>Contact Information</Text>
        <Text style={styles.detail}>Phone: {user.phone}</Text>
        <Text style={styles.detail}>Email: {user.email}</Text>
        <Text style={styles.detail}>Address: {user.address}</Text>
        <View style={styles.separator} />
        <Text style={styles.head}>Biological Information</Text>
        <Text style={styles.detail}>Age: {user.age}</Text>
        <Text style={styles.detail}>Gender: {user.gender}</Text>
        <Text style={styles.detail}>Blood Group: {user.blood_group}</Text>
        
      </View>
    <View style={styles.footer}> <Text>UOV © 2024</Text></View>
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
    footer:{
      marginTop: 200, 
      backgroundColor:'#8B008B',
      marginLeft:10,
      marginRight:10,
      height:20,
      alignItems:'center'
    },
      profileName: {
        fontSize: 24,
        fontWeight: 'bold',
        alignItems: 'center',
      },
      profilePicContainer: {
        alignItems: 'center',
        marginBottom: 20,
      },
      separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#ccc',
        marginVertical: 10, 
    },
      profilePic: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignItems:'center',
        borderRadius: 50,
      },
      profileDetails: {
        padding: 10,
      },
      detail: {
        fontSize: 14,
        marginBottom: 10,
      },
      head:{
        fontWeight:'bold',
        fontSize:16
      }
   
    
})
