import React, { useEffect, useState } from 'react';
import { useNavigation } from "@react-navigation/native";

import {
    View,
    Text,
    FlatList,
    Image,
    StyleSheet

} from 'react-native';

import header from '../../assets/header.png';
import share from '../../assets/share.png';
import avatar1 from '../../assets/avatar1.png';
import avatar2 from '../../assets/avatar2.png';
import avatar3 from '../../assets/avatar3.png';


const banner = [
    {
        id: '0',
        text1: '¿Cómo combatir el insomnio?',
        img: avatar1
    },
    {
        id: '1',
        text1: '¿Cómo combatir el insomnio?',
        img: avatar2
    },
    {
        id: '2',
        text1: '¿Cómo combatir el insomnio?',
        img: avatar3
    }
]



const Sabias = () => {

    return (

        <View style={styles.header}>
            <View style={styles.headerstyle}>
                <Text style={styles.headingtxt}>
                    {'¿SABÍAS QUÉ?'}
                </Text>
            </View>
            
            <FlatList
            data = {banner}
            keyExtractor = {(item) => item.id}
            renderItem = {({ item }) => {
                return(
                    <View style={styles.cardTitle}>
                    <Image
                    source={header}
                    style={styles.headerimg}
                    />
    
                    <View style={styles.cardText}>
                        <Text style={styles.txtStyle}>
                            {item.text1}
                        </Text>
                    </View>
    
                    
                    <Image
                    source={item.img}
                    />
    
    
                    <View style={styles.icon}>
                    <Image
                    source={share}
                    />
                    </View>
                </View>
                )
            }}
            
            
            />



        </View>



    )
}

const styles = StyleSheet.create({
    header: { flex: 1, backgroundColor: 'white', marginBottom:10 },
    headerstyle: { alignItems: 'center', backgroundColor: '#98809C', padding: 10},
    headingtxt: { fontSize: 24, color: 'white', fontWeight: 'bold' },
    cardTitle: {alignItems:'center', marginHorizontal:10},
    headerimg:{marginTop:10},
    cardText: {position:'absolute', zIndex:1, top:30, justifyContent:'center', alignItems:'center'},
    txtStyle: {fontSize:20, color:'white'}, 
    icon: {position:'absolute', zIndex:1, top:170, left:300}



})


export default Sabias
