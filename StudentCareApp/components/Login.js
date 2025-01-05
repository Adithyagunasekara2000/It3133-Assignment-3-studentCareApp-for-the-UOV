import { useNavigation } from "@react-navigation/native";
import {PaperProvider,Text,TextInput,Button} from 'react-native-paper';
import { StyleSheet,View,Image } from "react-native";
import {useState} from 'react';
import {students} from './StudentDb'

export default function Login(){
    const navigation=useNavigation();
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const handleLogin=()=>{
        const user=students.find((student)=>
        student.username===username && student.password===password);
        if(user){
            navigation.replace('Main', { user });
        }else{
            Alert.alert('login failed','Invalid username or password',[{text:'Ok'}]);
        }
    };
    return(
        <PaperProvider>
            <View>
                <Image source={require('../assets/uovlogo.png')}
                style={styles.icon}/>
            </View>
            <View style={styles.input}>
                <TextInput label="Username" value={username} mode='outlined' onChangeText={setUsername} />
            </View >
            <View style={styles.input}>
            <TextInput  placeholder="Password"    value={password} onChangeText={setPassword}  /></View>
            <View >
                <Button mode='contained' buttonColor="#8B008B" onPress={handleLogin}>Login</Button>
            </View>

            <View style={styles.footer}></View>

        </PaperProvider>
    )
}
const styles = StyleSheet.create({
    input: {
        padding: 8,
        marginBottom: 7
    },
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
        height:20
    }
   
})