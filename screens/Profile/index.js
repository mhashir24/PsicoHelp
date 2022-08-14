import React, { useEffect, useState } from 'react';
import { useNavigation } from "@react-navigation/native";

import {
    View,
    Text,
    FlatList,
    Image

} from 'react-native';

import jenny from '../../assets/jenny.jpg';

import Entypo from 'react-native-vector-icons/Entypo';



const Profile = () => {

    return (

        <View style={{ flex: 1, backgroundColor: '#F0F0F0', marginBottom: 20 }}>
            <View style={{ alignItems: 'center', backgroundColor: '#98819C', padding: 10 }}>
                <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold' }}>
                    {'MI PERFIL'}
                </Text>
            </View>

            <View style={{ alignItems: 'center', marginTop: 20, flexDirection:'row', justifyContent:'center', marginBottom:40 }}>
                <Image
                    source={jenny}
                    style={{ width: 110, height: 110, borderRadius: 80, borderWidth: 3, borderColor: '#98819C' }}
                />

                <Entypo
                    name={'new-message'}
                    size={18}
                    color={'#98809C'}
                    style={{marginTop:-100, marginLeft:-15}}
                />
            </View>

            <View style={{marginHorizontal:50, backgroundColor:'white', padding:8, alignItems:'center', marginBottom:10}}>
                <Text style={{fontWeight:'bold', fontSize:18}}>
                    {'David Hurtado Venegas'}
                </Text>
            </View>

            <View style={{marginHorizontal:50, backgroundColor:'white', padding:8, alignItems:'center', marginBottom:10}}>
                <Text style={{fontWeight:'bold', fontSize:17}}>
                    {'07 / 03 / 1990'}
                </Text>
            </View>

            <View style={{marginHorizontal:50, backgroundColor:'white', padding:8, alignItems:'center', marginBottom:20}}>
                <Text style={{fontWeight:'bold', fontSize:15}}>
                    {'31 Años - Madrid'}
                </Text>
            </View>

            <View style={{justifyContent:'center', alignItems:'center', marginBottom:10}}>
                <Text style={{fontWeight:'bold', color:'#5D4560', fontSize:17}}>
                    {'CONTACTO:'}
                </Text>
            </View>

            <View style={{marginHorizontal:50, backgroundColor:'white', padding:8, alignItems:'center', marginBottom:30}}>
                <Text style={{fontWeight:'bold', fontSize:15}}>
                    {'dhurven@gmail.com'}
                </Text>
            </View>

            <View style={{justifyContent:'center', alignItems:'center', marginBottom:10}}>
                <Text style={{fontWeight:'bold', color:'black'}}>
                    {'**Ver las políticas de privacidad'}
                </Text>
            </View>

            <View style={{marginHorizontal:50, backgroundColor:'#927292', padding:8, alignItems:'center', 
            marginBottom:20, borderRadius:20}}>
                <Text style={{color:'white'}}>
                    {'Cambiar mi subscripción actual'}
                </Text>
            </View>

            <View style={{justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontWeight:'bold', color:'black', fontSize:19}}>
                    {'Cerrar Sesión'}
                </Text>
            </View>





        </View>




    )
}

export default Profile
