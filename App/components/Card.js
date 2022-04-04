import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Fonts } from '../fonts';

const Card = ({item}) => {
    return (
        <TouchableOpacity style={styles.cardCont}>
            <MaterialCommunityIcons style={{
                marginLeft:'auto'
            }}  name="bookmark-multiple" color='lightgray' size={26}/>
            <Image resizeMode='contain' style={styles.img} source={{uri:item.images[0].url}}/>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.loc}>{item.address}</Text>
            <Text style={styles.amo}>₦{item.amount}</Text>
        </TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({
    cardCont:{
        width:'90%',
        height:225,
        backgroundColor:'#f9f9f9',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:10,
        borderRadius:20,
        elevation:1,
        padding:10,
        display:'flex',
        flexDirection:'column',
        marginBottom:10
    },
    img:{
        width:'80%',
        marginRight:'auto',
        marginLeft:'auto',
        height:100
    },
    name:{
        fontFamily:Fonts.PoppinsBold,
        textAlign:'center',
        color:'black',
        fontSize:20
    },
    loc:{
        fontFamily:Fonts.PoppinsThin,
        textAlign:'center'
    },
    amo:{
        fontFamily:Fonts.PoppinsBoldItalic,
        textAlign:'center',

    }
})
