import React, { useEffect, useState } from 'react';
import { useNavigation } from "@react-navigation/native";

import {
    View,
    Text,
    FlatList

} from 'react-native';


const list = [
    {
        id:'0',
        text1: '24 horas',
        text2: 'Podrás recibir ayuda de un especialista 1 día por 3,99€'
    },
    {
        id:'1',
        text1: '30 días',
        text2: 'Podrás recibir ayuda de un especialista 1 Mes por 4,99€'
    },
    {
        id:'2',
        text1: '365 días',
        text2: 'Podrás recibir ayuda de un especialista 1 Año por 2,99€ por mes,/ 35,99€'
    }
]

const PlanPremium = () => {

    return (

        <View style={{flex:1, backgroundColor:'#EFEFEF'}}>
                                <View style={{alignItems:'center', backgroundColor:'#967F9A', padding:15, marginBottom:20}}>
                    <Text style={{fontSize:20, color:'white', fontWeight:'bold'}}>
                        {'ACTIVAR PLAN PREMIUM'}
                    </Text>
                </View>

            <FlatList
            data = {list}
            keyExtractor = {(item) => item.id}
            renderItem = {({ item }) => {
                return(
                    <View>

                    
                <View style={{marginHorizontal:10, paddingBottom:20}}>   
                <View style={{marginHorizontal:20, marginTop:10}}>
                <View style={{alignItems:'center', backgroundColor:'#967F9A', paddingHorizontal:15, paddingVertical:5}}>
                    <Text style={{fontSize:18, color:'white', fontWeight:'bold'}}>
                        {item.text1}
                    </Text>
                </View>
    
                <View style={{alignItems:'center', backgroundColor:'white', 
                paddingHorizontal:15, paddingBottom:30, paddingTop:10, borderBottomEndRadius:30}}>
                    <Text style={{fontSize:15, color:'black', fontWeight:'bold'}}>
                        {item.text2}
                    </Text>
                </View>
                </View>
    

                </View>
                <View style={{borderRadius:20, backgroundColor:'#98809C', width:'30%', alignItems:'center', 
                borderRadius:30, padding:5, zIndex:1, position:'absolute', left:180, top:105 }}>
                    <Text>
                        {'Subscribirme'}
                    </Text>
                </View>
                </View>
                )
            }}
            
            
            />



        </View>




    )
}

export default PlanPremium
