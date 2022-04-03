import React, { useState } from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import  Progress from 'react-native-progress/CircleSnail';
import { Colors } from '../colors';
import Loading from './Loading';
import MainRoute from './MainRoute';

const Main = () => {
    const [loading,setLoading]=useState(true)
    const unLoad=()=>{
        setLoading(false)
    }
    return (
       <>
       {
           loading?
           <Loading/>:
           <MainRoute/>
       }
       </>
    )
}

export default Main

const styles = StyleSheet.create({
    cont:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    }
})
