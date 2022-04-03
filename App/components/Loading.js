import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import  Progress from 'react-native-progress/CircleSnail';
import { Colors } from '../colors';

const Loading = () => {
    return (
        <View style={styles.cont}>
            <StatusBar backgroundColor={Colors.primary}/>
            <Progress size={100} color={[Colors.primary,Colors.secondary,Colors.success]} />
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    cont:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    }
})
