import React,{ useState }  from 'react'
import { Dimensions, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View,ScrollView, Linking } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Fonts } from '../fonts';
import Modal from "react-native-modal";
import { Button } from 'react-native-paper';
import { Colors } from '../colors';
import Carousel from 'react-native-reanimated-carousel';
import { FAB } from 'react-native-paper';
import Video from 'react-native-video';

const Card = ({item}) => {
    const [modalVisible,setModal]=useState(false)
    const [isPlaying, setIsPlaying] = React.useState(false); 
    const videoPlayer = React.useRef()
    const ref = React.useRef()
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
        <ScrollView style={styles.modal}>
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
    <Carousel
    ref={ref}
    pagingEnabled={true}
    snapEnabled={true}
    style={{
        backgroundColor:'blue'
    }}
    vertical={false}
    width={Dimensions.get('window').width-40}
    height={200}
    autoPlay={false}
    data={item.images}
    renderItem={({ item }) => <View style={{
        width:'100%',
        height:300,
        backgroundColor:'white',
        position:'relative'
    }
        }>
        {
            item.url.includes('.jpeg')||item.url.includes('.jpg')||item.url.includes('.png')?
            <Image resizeMode='contain' style={{
                height:'100%',
                width:'100%'
            }} source={{uri:item.url}}/>:
            <>
            <TouchableOpacity onPress={()=>{
                setIsPlaying(!isPlaying)
            }} style={{
                position:'absolute',
                right:0,
                marginTop:30,
                marginRight:Dimensions.get('window').width/3,
                zIndex:100
            }}>
            <MaterialCommunityIcons style={{
               backgroundColor:'rgba(255,255,255,0.5)',
               borderRadius:50
            }}  name={!isPlaying?'pause-circle-outline':'play-outline'} color='black' size={56}/>
            </TouchableOpacity>
            <Video
             ref={ref => (videoPlayer.current = ref)}
            controls={true}
            resizeMode='contain' 
            source={{ uri:item.url}}                  
            paused={isPlaying}                      
            style={{
                height:'100%',
                width:'100%',
            }}  
            repeat={false}  
            playInBackground={false}                 
        />
        </>
        }
        
        <TouchableOpacity style={{
        marginLeft:20,
        position:'absolute',
        left:0,
        top:80,
        bottom:0

        }} onPress={()=>{
            ref.current.prev()
            setIsPlaying(true)
        }}>
        <MaterialCommunityIcons style={{
                backgroundColor:'rgba(255,255,255,0.7)',
                borderRadius:50
            }}  name="chevron-left" color='black' size={36}/>
        </TouchableOpacity>
        <TouchableOpacity style={{
        marginRight:20,
        position:'absolute',
        right:0,
        top:80,
        bottom:0

        }} onPress={()=>{
            ref.current.next()
            setIsPlaying(true)
        }}>
        <MaterialCommunityIcons style={{
                backgroundColor:'rgba(255,255,255,0.7)',
                borderRadius:50
            }}  name="chevron-right" color='black' size={46}/>
        </TouchableOpacity>
    </View>}
/>

         </View>



         <View style={styles.prodName}>
          <Text>{item.category}</Text>
          <MaterialCommunityIcons  name="star" color='#FFD700' size={26}/>
         </View>

         <View style={styles.prodName}>
          <Text style={{
              fontFamily:Fonts.PoppinsBold,
              fontSize:20,
              width:'50%'
          }}>{item.name}</Text>
          <Text style={{
              fontFamily:Fonts.PoppinsBlackItalic,
              fontSize:18,
              marginLeft:'auto'
          }}>₦{item.amount}</Text>
         </View>

         <Text style={{
             textAlign:'center',
             fontFamily:Fonts.PoppinsRegular
         }}>Location</Text>
         <View style={{
             flexDirection:'row',
             justifyContent:'space-around',
             marginTop:10
         }}>
        <View style={{
            justifyContent:'center',
            alignItems:'center',

            
        }}>
            <Text>State</Text>
            <Text>{item.state}</Text>
            <MaterialCommunityIcons  name="map-marker-radius" color='black' size={26}/>
        </View>

        <View style={{
            justifyContent:'center',
            alignItems:'center'
        }}>
            <Text>Lga</Text>
            <Text>{item.lga}</Text>
            <MaterialCommunityIcons  name="map-marker-distance" color='black' size={26}/>
        </View>

        <View style={{
            justifyContent:'center',
            alignItems:'center'
        }}>
            <Text>Address</Text>
            <Text style={{
                fontSize:11,
                width:100,
                textAlign:'justify',
                
            }}>{item.address}</Text>
            <MaterialCommunityIcons  name="map-marker-star" color='black' size={26}/>
        </View>
         </View>
         <Text style={{
             textAlign:'center',
             marginTop:10
         }}>Description</Text>
         <View style={{
             width:'100%',
             backgroundColor:'#f9f9f9',
             height:100,
             borderRadius:20,
             padding:10
         }}>
<Text>{item.description}</Text>
         </View>
        </ScrollView>
    <View style={{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        
    }}>
         <MaterialCommunityIcons  name="cart-variant" color='black' size={26}/>
        <Button onPress={()=>{
            Linking.openURL(`tel:08032812724`)
        }} mode='contained' style={{
            width:'80%',
            marginLeft:'auto',
            backgroundColor:'black',
            marginTop:10
        }}>Place Order</Button>
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
        height:200,
        backgroundColor:'#f9f9f9',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    },
    prodName:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:15,
        padding:10
    },
    fab:{
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    }
})
