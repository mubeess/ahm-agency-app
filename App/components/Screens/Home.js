import React, { useState } from 'react'
import { FlatList, Keyboard, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from '../../colors'
import { Button, TextInput } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NetInfo from '@react-native-community/netinfo';
import Loading from '../Loading'
import Card from '../Card';
import { useEffect } from 'react';
import { Fonts } from '../../fonts';

export default function Home() {
    const [text,setText]=useState('')
    const [currentInd,setCurrent]=useState(0)
    const [loading,setLoading]=useState(true)
    const [networkAvailable,setNetwork]=useState(true)
    const [refreshing,setRefreshing]=useState(false)
    const [data,setData]=useState([])
    const [filTerdData,setFiltered]=useState([])
   

    const loadData=()=>{
        if (!networkAvailable) {
            return setNetwork(false),setLoading(false)
        }else{
            fetch('https://dillali.herokuapp.com/products')
            .then(res=>{
                res.json()
                .then(data=>{
                setFiltered(data)
                setData(data)

                setLoading(false)
                setRefreshing(false)
                   
                })
            })
        }
        
    }
    const renderItem = ({ item }) => (
        <Card item={item}/> 
      );
    


      
        // NetInfo configuration
        NetInfo.configure({
          reachabilityUrl: 'https://dillali.herokuapp.com/products',
          reachabilityTest: async response => response.status === 200,
          reachabilityLongTimeout: 30 * 1000, // 30s
          reachabilityShortTimeout: 5 * 1000, // 5s
          reachabilityRequestTimeout: 15 * 1000, // 15s
        })
      

      NetInfo.addEventListener(state => {
        if (networkAvailable !== state.isConnected) {
          setNetwork(!!state.isConnected && !!state.isInternetReachable);
        }
       
        
      });

    

      useEffect(()=>{
        NetInfo.fetch().then(state => {
            if (networkAvailable !== state.isConnected) {
              setNetwork(!!state.isConnected && !!state.isInternetReachable)  
            }
            if (state.isConnected) {
                loadData()
            }
            if (!state.isConnected) {
                setLoading(false)
                setNetwork(false)
            }
          });
        
      },[])
  const handleRefresh=()=>{
    setRefreshing(true)
    loadData()
  }
    return (
     <View style={styles.container}>
     <StatusBar backgroundColor='white'/>
     <View style={styles.header}>
     <TextInput
     placeholder='Search state,categories'
      style={{
          width:'85%',
          backgroundColor:'white',
          height:40
      }}
   
      value={text}
      onChangeText={text => setText(text)}
    />
    <TouchableOpacity onPress={()=>{
       const myFil=data.filter(dat=>dat.state.toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||dat.lga.toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||dat.address.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
       setFiltered(myFil)
       Keyboard.dismiss()
    }} style={{
        marginLeft:10
    }}>
    <MaterialCommunityIcons  name="magnify" color='black' size={26}/>
    </TouchableOpacity>
   
     </View>


     <View style={styles.cats}>
     <Button style={{
         borderWidth:0,
         borderColor:'white'
     }} onPress={()=>{
         setCurrent(0)
         setFiltered(data)
     }} labelStyle={{fontSize:8}} mode={currentInd==0?'contained':'text'}>All</Button>
     <Button style={{
         borderWidth:0,
         borderColor:'white'
     }}  onPress={()=>{
         const myFil=data.filter(dat=>dat.category.toLocaleLowerCase().includes('housing'))
         setFiltered(myFil)
         setCurrent(1)
     }} labelStyle={{fontSize:8}} mode={currentInd==1?'contained':'text'}>Housing</Button>
     <Button style={{
         borderWidth:0,
         borderColor:'white'
     }}  onPress={()=>{
         setCurrent(2)
         const myFil=data.filter(dat=>dat.category.toLocaleLowerCase().includes('clothing'))
         setFiltered(myFil)
     }} labelStyle={{fontSize:8}} mode={currentInd==2?'contained':'text'}>Clothing</Button>
     <Button style={{
         borderWidth:0,
         borderColor:'white'
     }}  onPress={()=>{
         setCurrent(3)
         const myFil=data.filter(dat=>dat.category.toLocaleLowerCase().includes('electronics'))
         setFiltered(myFil)
     }} labelStyle={{fontSize:8}} mode={currentInd==3?'contained':'text'}>Electronics</Button>
     <Button style={{
         borderWidth:0,
         borderColor:'white'
     }}  onPress={()=>{
         setCurrent(4)
         const myFil=data.filter(dat=>dat.category.toLocaleLowerCase().includes('others'))
         setFiltered(myFil)
     }} labelStyle={{fontSize:8}} mode={currentInd==4?'contained':'text'}>Others</Button>
     
     
     </View>
   {
       !loading&&
       networkAvailable&&
       (
        <FlatList
    ListEmptyComponent={()=>(
        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
            <Text>No Record Found!</Text>
        </View>
    )}
    refreshing={refreshing}
    onRefresh={handleRefresh}
    data={filTerdData}
    renderItem={renderItem}
    keyExtractor={item => item._id}

    />
       )
   }

   {
       loading&&(
           <Loading/>
       )
   }
   {
       !loading&&
       !networkAvailable&&(
       <View style={styles.network}>
         <MaterialCommunityIcons  name="network-strength-off" color='black' size={40}/>
         <Text style={{fontFamily:Fonts.PoppinsRegular}}>Network Errorr!</Text>
         <Text  style={{fontFamily:Fonts.PoppinsThin}}>Pleas Turn On Your Data.</Text>
       </View>
       )
   }
     </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        paddingTop:StatusBar.currentHeight
    },
    header:{
        width:'100%',
        height:50,
        backgroundColor:'white',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:5
       
    },
    cats:{
        width:'100%',
        height: 50,
        backgroundColor:'white',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    network:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})





// adb -s 037852593E003913 reverse tcp:8081 tcp:8081