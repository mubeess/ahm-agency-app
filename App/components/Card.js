import React,{ useState }  from 'react'
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Fonts } from '../fonts';
import Modal from "react-native-modal";
import { Button } from 'react-native-paper';
import { Colors } from '../colors';


const Card = ({item}) => {
    const [modalVisible,setModal]=useState(false)
    return (
        <TouchableOpacity onPress={()=>{
            setModal(true)
        }} style={styles.cardCont}>
            <MaterialCommunityIcons style={{
                marginLeft:'auto'
            }}  name="bookmark-multiple" color='lightgray' size={26}/>
            <Image resizeMode='stretch' style={styles.img} source={{uri:item.images[0].url}}/>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.loc}>{item.address}</Text>
            <Text style={styles.amo}>₦{item.amount}</Text>
       
       
       
       
        <Modal backdropColor='white' backdropOpacity={1} coverScreen style={{
            flex:1,
            backgroundColor:'white',
            paddingTop:StatusBar.currentHeight
          
        }} isVisible={modalVisible}>
        <View style={styles.modal}>
        <TouchableOpacity onPress={()=>{
            setModal(false)
        }}>
        <MaterialCommunityIcons style={{
                marginLeft:'auto',
                marginRight:20,
                marginBottom:20
            }}  name="close-circle" color='black' size={26}/>
        </TouchableOpacity>
         <View style={styles.modalHead}>
         
         </View>
        </View>
      </Modal>
        </TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({
    cardCont:{
        width:'90%',
        height:325,
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
        height:200
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

    },
    modal:{
        flex:1,
        width:'100%',
        
    },
    modalHead:{
        width:'100%',
        height:300,
        backgroundColor:'#f9f9f9',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    }
})
