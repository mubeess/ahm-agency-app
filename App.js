import React, { useState } from 'react'
import { View, Text, Dimensions } from 'react-native'
import Main from './App/components/Main'
import Splash from './App/components/Splash'

export default function App() {
  const [isProceed,setIsProceed] =useState(false)
  const trigger=()=>{
    setIsProceed(true)
  }
  return (
    isProceed?<Main/>:
   <Splash proceed={trigger}/>
   
  )
}
