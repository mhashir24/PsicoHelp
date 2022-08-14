import React, { useEffect, useState } from 'react';
import { useNavigation } from "@react-navigation/native";

import {
    View,
    Text,
    FlatList,
    Image,
    StyleSheet
} from 'react-native';

import jenny from '../../assets/jenny.jpg';
import header from '../../assets/header.png';
import employee1 from '../../assets/employee1.png';
import employee2 from '../../assets/employee2.png';
import employee3 from '../../assets/employee3.png';
import dots from '../../assets/dots.png';

import Foundation from 'react-native-vector-icons/Foundation';

const employeelist = [
    {
        id: '0',
        text1: 'ELOISA ARREGUI SOTO',
        img: employee1,
        online: true
    },
    {
        id: '1',
        text1: 'MARCO ANDRES JIMENEZ',
        img: employee2,
        online: true
    },
    {
        id: '2',
        text1: 'MAITE HERNANDEZ L.',
        img: employee3,
        online: false
    }
]

const Information = () => {

    return (

        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.headerText}>
                    {'¿SABÍAS QUÉ?'}
                </Text>
            </View>

            <View style={styles.profile}>
                <Image
                    source={jenny}
                    style={styles.imgprofile}
                />

                <View style={{ position: 'absolute', zIndex: 1, top: 70, left: 215 }}>
                    <Foundation
                        name={'plus'}
                        size={30}
                        color={'black'}
                    />
                </View>

            </View>

            <View style={styles.descriptionview}>
                <Text style={styles.descrptext}>
                    {'David Hurtado Venegas'}
                </Text>

                <Text>
                    {'28 Años - Madrid'}
                </Text>

                <Text style={styles.profiletxt}>
                    {'BIENVENIDO! ESTE ES TU ESPACIO, AHORA PODRÁS'}
                </Text>

                <Text>
                    {'COMUNICARTE CON LOS ESPECIALISTAS '}
                </Text>
            </View>

            <View style={styles.profiletext}>
                <Text>
                    {'*ACTIVAR PLAN PREMIUM'}
                </Text>
            </View>

            <View style={styles.imgheader}>
                <Image
                    source={header}
                    style={styles.headerimg}
                />

                <View style={styles.assistancestyle}>
                    <Text style={styles.assistancetxt}>
                        {'ASISTENTES DE SALUD!'}
                    </Text>
                </View>
            </View>


            <FlatList

                data={employeelist}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingBottom: 15 }}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.employeestyling}>
                            <View>
                                <Image
                                    source={item.img}
                                />
                            </View>

                            <View style={[styles.onlinestatus, {backgroundColor: item.online ? '#95F139' : "red "}]} />

                            <View style={styles.employeetxt}>
                                <Text>
                                    {item.text1}
                                </Text>

                                <Text style={styles.profession}>
                                    {'PROFESION'}
                                </Text>
                            </View>

                            <View style={styles.dotsimg}>
                                <Image
                                    source={dots}
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
    container: { flex: 1, backgroundColor: '#F0EFF0' },
    head: { alignItems: 'center', backgroundColor: '#98809C', padding: 10 },
    headerText: { fontSize: 24, color: 'white', fontWeight: 'bold' },
    profile: { alignItems: 'center', marginTop: 20, flexDirection: 'row', justifyContent: 'center' },
    imgprofile: { width: 110, height: 110, borderRadius: 80, borderWidth: 3, borderColor: '#98819C' },
    descriptionview: { justifyContent: 'center', alignItems: 'center' },
    descrptext: { fontSize: 18, marginTop: 7 },
    profiletxt: { marginTop: 10 },
    profiletext: { marginTop: 40, marginLeft: 180 },
    imgheader: { alignItems: 'center' },
    headerimg: { marginTop: 10, width: '100%', height: 60 },
    assistancestyle: { position: 'absolute', zIndex: 1, top: 30, justifyContent: 'center', alignItems: 'center' },
    assistancetxt: { fontSize: 20, color: 'black' },
    employeestyling: { marginHorizontal: 20, flexDirection: 'row', marginTop: 15 },
    onlinestatus: { width: 10, height: 10, borderRadius: 50, zIndex: 1, position: 'absolute', left: 50 },
    employeetxt: { flexGrow: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#D9CFD9' },
    profession: { fontSize: 12, marginTop: 5 },
    dotsimg: { position: 'absolute', zIndex: 1, left: 300, bottom: -10 }





})

export default Information
