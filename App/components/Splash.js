import React from 'react'
import { View, Text,StyleSheet, Dimensions, StatusBar,Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { Fonts } from '../fonts'
import {Colors} from '../colors'
import { Button } from 'react-native-paper';

export default function Splash({proceed}) {
    return (
        <View style={styles.container}>
           <StatusBar backgroundColor={Colors.primary}/>
           <Image style={styles.img} source={require('../../assets/images/logo.png')}/>
           <Text style={styles.txt}>AHM DILLALI AGENCY</Text>
           <Text style={styles.det}>
               Discover available products and materials on our plartform!
           </Text>
           <View style={styles.icon}>
           <Image style={styles.img} source={require('../../assets/images/ico.png')}/>
           <Button onPress={()=>{
               proceed()
           }} icon='arrow-right-bold-circle' dark color='white' style={{
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
        backgroundColor:Colors.primary,
        paddingTop:StatusBar.currentHeight,
        alignItems:'center'
       
    },
    img:{
        width:200,
        height:200,
        
    },
    txt:{
        fontFamily:Fonts.Pallet,
        fontSize:20,
        textAlign:'center',
        color:'black'
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
        marginTop:20
    }
})
