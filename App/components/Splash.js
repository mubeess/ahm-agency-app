import React from 'react'
import { View, Text,StyleSheet, Dimensions, StatusBar,Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { Fonts } from '../fonts'
import {Colors} from '../colors'
import { Button } from 'react-native-paper';

export default function Splash({proceed}) {
    return (
        <View style={styles.container}>
           <StatusBar backgroundColor='white'/>
           <Image style={styles.img} source={require('../../assets/images/ahmlogo.png')}/>
           <Text style={styles.txt}>AHM BELLO AGENCY</Text>
           <Text style={styles.det}>
               Discover available properties and products on our plartform!
           </Text>
           <View style={styles.icon}>
           <Image style={styles.img2} source={require('../../assets/images/ico.png')}/>
           <Button onPress={()=>{
               proceed()
           }} icon='arrow-right-bold-circle' dark  style={{
               width:'80%',
               marginTop:10,
           }} mode='outlined'>Proceed</Button>
           </View>
           
           
        </View>
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
        width:100,
        height:100,
        
    },
    txt:{
        fontFamily:Fonts.Pallet,
        fontSize:20,
        textAlign:'center',
        color:'black',
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
        marginTop:50
    },
    img2:{
        width:200,
        height:200,
        
    }
})
