import React, { useEffect, useState } from 'react';

import {
  View,
  ImageBackground,
  Image,
  Dimensions
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
const screenWidth = Dimensions.get('screen').width
const screenHeight = Dimensions.get('screen').height


import homewall from '../../assets/Grupo9.png';
import logo from '../../assets/Grupo7.png';



const SplashScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('LogIn')
        }, 4000);
    }, [])
  return (

    <View style={{ flex: 1, backgroundColor:'#D4CFD2' }}>

      <View>
      <ImageBackground
        source={homewall}
        style={{
          zIndex: 1, opacity: 10, 
          width: '100%', // applied to Image
          height: '100%'
        }}
        imageStyle={{
          resizeMode: 'contain' // works only here!
        }}
      >

        <View style={{flex:1, justifyContent:'center', alignItems:'center', marginTop:-30}}>
          <Image
          source={logo}
          style={{height: '70%', width:'70%', resizeMode:'contain'}}

          />
        </View>



        </ImageBackground>
        </View>

    </View>
    
  
  )}

export default SplashScreen
