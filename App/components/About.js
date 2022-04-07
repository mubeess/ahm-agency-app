import React from 'react'
import { View, Text,StyleSheet, StatusBar,Image } from 'react-native'
import { Colors } from '../colors'
import { Fonts } from '../fonts'

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>ABOUT US</Text>
            <View style={styles.bg}>
            <Image resizeMode='contain' style={styles.img} source={require('../../assets/images/dir.png')}/>
            </View>
            <Text style={styles.title}>Director</Text>
            <Text style={styles.title1}>AHM Bello Agency, Nig. Ltd</Text>
            <Text style={styles.title2}>Alh. Haruna Muhammad Bello.</Text>
            <Text style={styles.msg}>Mission/Vision</Text>
            <Text style={styles.body}>
             AHM bello Agency Nig. Ltd is a licensed company that is legally
             empowered to act on behalf of our clients in 
             negotiations and other dealings with third parties. The Vision of 
             our ambitious comapany is to make an inclusive enviroment for both 
             parties, there by enhancing the processes in the agenting system.
             Our doors are open for any interested party to make the magic happen.
             Find our contact details on the contact page. Thank You.
            </Text>
            
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        paddingTop:StatusBar.currentHeight,
        alignItems:'center'
    },
    txt:{
        color:'black',
        textAlign:'center',
        fontFamily:Fonts.PoppinsBold
    },
    img:{
        height:150,
        width:150,
        borderRadius:100
    },
    bg:{
        height:150,
        width:150,
        borderRadius:100,
        backgroundColor:'#d4af37',
        elevation:10
    },
    title:{
        textAlign:'center',
        fontFamily:Fonts.PoppinsThin,
        fontSize:20,
        marginTop:5
    },
    title1:{
        textAlign:'center',
        fontFamily:Fonts.PoppinsBoldItalic,
    },
    title2:{
        textAlign:'center',
        fontFamily:Fonts.PoppinsRegular,
        
    },
    msg:{
        alignSelf:'flex-start',
        marginLeft:20,
        marginTop:20,
        fontFamily:Fonts.PoppinsBold,
        borderLeftColor:Colors.success,
        borderLeftWidth:3,
        paddingLeft:10
    },
    body:{
        fontFamily:Fonts.PoppinsRegular,
        textAlign:'justify',
        marginLeft:20,
        marginRight:20
    }
})