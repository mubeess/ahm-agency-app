import React, { useState } from 'react'
import { View, Text, Dimensions } from 'react-native'
import Main from './App/components/Main'
import Splash from './App/components/Splash'
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from "react-native-bootsplash";
import MainRoute from './App/components/MainRoute';

export default function App() {
  const [isProceed,setIsProceed] =useState(false)
  const trigger=()=>{
    setIsProceed(true)
  }
  return (
       
      <NavigationContainer onReady={() => RNBootSplash.hide({ fade: true })}>
        
      {
        isProceed?<MainRoute/>:
        <Splash proceed={trigger}/>
      }
      
    </NavigationContainer>
    

 
   
  )
}
