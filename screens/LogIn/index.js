import React, { useEffect, useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import CheckBox from '@react-native-community/checkbox';


import {
    View,
    ImageBackground,
    Image,
    Text

} from 'react-native';


import homewall from '../../assets/Grupo9.png';
import logo from '../../assets/Grupo7.png';
import fbicon from '../../assets/Trazado50.png';
import googleicon from '../../assets/Trazado51.png';




const LogIn = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (

        <View style={{ flex: 1, backgroundColor: '#D4CFD2' }}>

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
                <View style={{ flex: 1 }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            source={logo}
                            style={{ height: '60%', width: '60%', resizeMode: 'contain' }}

                        />
                    </View>

                    

                    <View style={{
                        alignItems: 'center', flexDirection: 'row', marginHorizontal: 40,
                        borderRadius: 40, padding: 5, backgroundColor: '#816585', marginTop: -40
                    }}>
                        <Image
                            source={fbicon}
                        />

                        <Text style={{ marginLeft: 40, fontWeight: 'bold', color: 'white' }}>
                            {'INICIO CON FACEBOOK'}
                        </Text>
                    </View>



                    <View style={{
                        alignItems: 'center', flexDirection: 'row', marginHorizontal: 40,
                        borderRadius: 40, padding: 5, backgroundColor: '#816585', marginTop: 10
                    }}>
                        <Image
                            source={googleicon}
                        />

                        <Text style={{ marginLeft: 40, fontWeight: 'bold', color: 'white' }}>
                            {'INICIO CON GOOGLE'}
                        </Text>
                    </View>



                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:10}}>
                        <View style={{flexDirection:'column', marginRight:20 }}>
                        <Text>
                            {'Acepto que soy mayor de edad y'}
                        </Text>
                        <Text>
                            {'las condiciones de uso'}
                        </Text>
                        </View>

                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                    </View>



                    <View style={{alignItems: 'center',  marginHorizontal: 40, borderWidth:2, borderColor:'#816585',
                        borderRadius: 40, padding: 5,  marginTop: 20}}>
                       
                        <Text style={{fontWeight: 'bold', color: '#816585', fontSize:16 }}>
                            {'QUIERO REGISTRARME'}
                        </Text>
                    </View>

                </View>



            </ImageBackground>

        </View>


    )
}

export default LogIn
