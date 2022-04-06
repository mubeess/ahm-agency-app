import React from 'react'
import { View, Text,StyleSheet, Dimensions, StatusBar,Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { Fonts } from '../fonts'
import {Colors} from '../colors'
import { Button } from 'react-native-paper';

export default function Splash({proceed}) {
    return (
        <LinearGradient colors={[Colors.success,Colors.success,'rgba(52, 168, 83,0.3)']} style={styles.container}>
           <StatusBar backgroundColor={Colors.success}/>
           <View style={{
               width:80,
               height:80,
               justifyContent:'center',
               alignItems:'center',
               backgroundColor:'white',
               borderRadius:50,
               elevation:5
           }}>
           <Image style={styles.img} source={require('../../assets/images/ahmlogo.png')}/>
           </View>
           
           <Text style={styles.txt}>AHM BELLO AGENCY</Text>
           <Text style={styles.det}>
               Discover available properties and products on our plartform!
           </Text>
           <View style={styles.icon}>
           <Image style={styles.img2} source={require('../../assets/images/se.png')}/>
           <Button onPress={()=>{
               proceed()
           }} icon='arrow-right-bold-circle' dark  style={{
               width:'80%',
               marginTop:10,
           }} mode='contained'>Proceed</Button>
           </View>
           
           
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'white',
        paddingTop:StatusBar.currentHeight,
        alignItems:'center'
       
    },
    img:{
        width:70,
        height:70,
        
    },
    txt:{
        fontFamily:Fonts.Pallet,
        fontSize:20,
        textAlign:'center',
        color:'white',
        marginTop:20
    },
    icon:{
        flex:1,
        backgroundColor:'transparent',
        width:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-end',
        alignItems:'center',
        padding:20
    },
    det:{
        fontFamily:Fonts.PoppinsRegular,
        fontSize:20,
        marginTop:50,
        color:'white'
    },
    img2:{
        width:200,
        height:200,
        
    }
})
