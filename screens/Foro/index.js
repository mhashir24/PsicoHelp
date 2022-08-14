import React, { useEffect, useState } from 'react';
import { useNavigation } from "@react-navigation/native";

import {
    View,
    Text,
    FlatList,
    Image

} from 'react-native';

import logo from '../../assets/Grupo7.png';

const list = [
    {
        id: '0',
        text1: 'Marte, 29 Madrid',
        text2: 'Después de 10 años intentando entender par qué, estando totalmente sobria, pasaba de bailar en la barra de una discoteca sola a querer estampar mi auto contra un árbol, me diagnostician con trastorno bipolar.'
    },
    {
        id: '1',
        text1: 'Jordi, 25 Barcelona',
        text2: 'Me di cuenta de que la relación de amor-odio que tenía no era conmigo misma, sino con mi desorden bipolar. Lo que odio del desroden bipolar, más que cualquier otra cosa, es lo que llamo mi resaca maníaca'
    },
    {
        id: '2',
        text1: 'Marte, 29 Madrid',
        text2: 'He oído la descripcíon de "es como vivir en una montaña rusa", pero es demasiado simplista. Las montañas rusas, para mi, son divertidas, y los bajones de una depresión aguda están lejos de ser divertidas o lúdicas. La depresión, al igual que las fases maníacas, se apodera de ti completamente, y no te',
    }

]

const Foro = () => {

    return (

        <View style={{ flex: 1, backgroundColor: '#F0F0F0', marginBottom:20 }}>
            <View style={{ alignItems: 'center', backgroundColor: '#98819C', padding: 10}}>
                <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold' }}>
                    {'FORO'}
                </Text>
            </View>

            <View style={{borderWidth:1, alignItems:'center', paddingVertical:20}}>
                <Image
                source={logo}
                style={{width:140, height:80}}
                />
            </View>  

            <View style={{backgroundColor: '#927292', padding: 10}}>
                <Text style={{fontSize:16 ,color: 'white', fontWeight: 'bold', paddingLeft:10 }}>
                    {'Mi dia a dia con bipolaridad'}
                </Text>
            </View>

            <FlatList
            
            data = {list}
            keyExtractor = {(item) => item.id}
            renderItem = {({ item }) => {
                return(
                    <View style={{marginHorizontal:20, backgroundColor:'#FEFEFE', 
                    paddingVertical:10, paddingHorizontal:20, marginTop:10 }}>
                        <Text style={{fontWeight:'bold', color:'#927292', marginBottom:5}}>
                            {item.text1}
                        </Text>
    
                        <Text style={{color:'#927292', fontStyle:'italic'}}>
                            {item.text2}
                        </Text>


                    </View>
                )
            }}
            
            
            />







        </View>




    )
}

export default Foro
