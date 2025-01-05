import { useNavigation } from "@react-navigation/native";
import {PaperProvider,Text,TextInput,Button} from 'react-native-paper';
import { StyleSheet,View,Image } from "react-native";
export default function Login(){
    const navigation=useNavigation();
    return(
        <PaperProvider>
            <View>
                <Image source={require('../assets/uovlogo.png')}
                style={styles.icon}/>
            </View>
            <View style={styles.input}>
                <TextInput label="User name" mode='outlined' />
            </View>
            <View style={styles.input}>
                <TextInput label="Password" mode='outlined' />
            </View>
            <View >
                <Button mode='contained' buttonColor="#8B008B" onPress={()=>
                    navigation.navigate('profile')
                }>Login</Button>
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