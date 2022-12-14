import React, { useEffect, useState } from 'react';
import { useNavigation } from "@react-navigation/native";

import {
    View,
    Text,
    Image,
    StyleSheet

} from 'react-native';

import logo from '../../assets/Grupo7.png';



const ForoSecond = () => {

    return (

        <View style={styles.mainview}>
            <View style={styles.txtstyle}>
                <Text style={styles.heading}>
                    {'FORO'}
                </Text>
            </View>

            <View style={styles.logo}>
                <Image
                source={logo}
                style={styles.imglogo}
                />

                <Text style={styles.list}>
                    {'Post Semana 17-23 mayo'}
                </Text>
            </View>  

            <View style={styles.secondList}>
                <Text style={styles.Secondtxt}>
                    {'Mi día a día con bipolaridad'}
                </Text>
            </View>

            <View style={styles.ThirdList}>
                <Text style={styles.Thirdtxt}>
                    {'Como vivir con un TOC'}
                </Text>
            </View>

            <View style={styles.FourthList}>
                <Text style={styles.Fourthtxt}>
                    {'Problemas de pareja'}
                </Text>
            </View>

            <View style={styles.FifthList}>
                <Text style={styles.FifthTxt}>
                    {'Como enfrentarse a las Fobias'}
                </Text>
            </View>

            <View style={styles.CreateDiscuss}>
                <Text style={styles.Discusstxt}>
                    {'| Crear un tema de discusión.'}
                </Text>
            </View>

            <View style={styles.ButtonView}>
                <Text style={styles.ButtonTxt}>
                    {'enviar'}
                </Text>
            </View>



        </View>




    )
}

const styles = StyleSheet.create({
mainview: { flex: 1, backgroundColor: '#F0F0F0', marginBottom:20 },
txtstyle: { alignItems: 'center', backgroundColor: '#98819C', padding: 10},
heading: { fontSize: 24, color: 'white', fontWeight: 'bold' },
logo: {alignItems:'center', paddingVertical:20},
imglogo: {width:140, height:80},
list: {marginTop:20, marginBottom:-10},
secondList: {backgroundColor: '#927292', padding: 10},
Secondtxt: {color: 'white',  paddingLeft:10 },
ThirdList: {backgroundColor: '#BEACBE', padding: 10, marginTop:10},
Thirdtxt:{color: 'white',  paddingLeft:10 },
FourthList: {backgroundColor: '#927292', padding: 10, marginTop:10},
Fourthtxt: {color: 'white',  paddingLeft:10 },
FifthList: {backgroundColor: '#BEACBE', padding: 10, marginTop:10},
FifthTxt: {color: 'white',  paddingLeft:10 },
CreateDiscuss: {backgroundColor: 'white', marginHorizontal: 20, marginTop:40, paddingVertical:10, justifyContent:'center'},
Discusstxt: {color: '#927292',  paddingLeft:10 },
ButtonView: {borderRadius:40, backgroundColor:'#927292', marginTop:10, marginLeft:220, alignItems:'center', marginRight:20},
ButtonTxt: {color:'white', fontWeight:'bold'}


})

export default ForoSecond
