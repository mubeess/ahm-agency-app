import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { Fonts } from '../fonts'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Contact() {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Contact Us</Text>
            <Text style={styles.head}>For enquiries and complaints, you can contact
                one of the following life lines:
            </Text>
            <View style={styles.det}>
            <MaterialCommunityIcons style={{
                backgroundColor:'rgba(255,255,255,0.7)',
                
            }}  name="phone-in-talk" color='black' size={36}/>
            <Text>
                08032812724
            </Text>
            </View>

            <View style={styles.det}>
            <MaterialCommunityIcons style={{
                backgroundColor:'rgba(255,255,255,0.7)',
                
            }}  name="phone-in-talk" color='black' size={36}/>
            <Text>
                08164942224
            </Text>
            </View>

            <View style={styles.det}>
            <MaterialCommunityIcons style={{
                backgroundColor:'rgba(255,255,255,0.7)',
                
            }}  name="email" color='black' size={36}/>
            <Text>
                harunabello47@gmail.com
            </Text>
            </View>

            <View style={styles.det}>
            <MaterialCommunityIcons style={{
                backgroundColor:'rgba(255,255,255,0.7)',
                
            }}  name="email" color='black' size={36}/>
            <Text>
                mubarakibrahim2015@gmail.com
            </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
    head:{
        fontFamily:Fonts.PoppinsThin,
        textAlign:'justify',
        marginLeft:20,
        marginRight:20
    },
    det:{
        flexDirection:'row',
        marginTop:5,
        justifyContent:'center',
        alignItems:'center'
    }
})
