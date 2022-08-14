import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';
import {
    Image,
    Text,
    TextInput, View
} from 'react-native';
import logo from '../../assets/Grupo7.png';





const Registeration = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (

        <View style={{ flex: 1, backgroundColor: '#DBD8DA' }}>

            <View style={{ flex: 1 }}>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={logo}
                        style={{ height: '60%', width: '60%', resizeMode: 'contain' }}

                    />
                </View>



                <View style={{
                    marginHorizontal: 30, marginTop: -100,
                    backgroundColor: 'white', paddingHorizontal: 90
                }}>

                    <TextInput
                        placeholder={'Nombre'}
                        keyboardType={'default'}
                        style={{ fontWeight: 'bold', color: 'black' }}>
                    </TextInput>
                </View>


                <View style={{
                    marginHorizontal: 30, marginTop: 10,
                    backgroundColor: 'white', paddingHorizontal: 90
                }}>

                    <TextInput
                        placeholder={'Appellidos'}
                        keyboardType={'default'}
                        style={{ fontWeight: 'bold', color: 'black' }}>
                    </TextInput>
                </View>


                <View style={{ flexDirection: 'row' }}>
                    <View style={{
                        width: '40%', marginHorizontal: 30, marginTop: 10,
                        backgroundColor: 'white', paddingHorizontal: 40
                    }}>

                        <TextInput
                            placeholder={'Edad'}
                            keyboardType={'number-pad'}
                            style={{ fontWeight: 'bold', color: 'black' }}>
                        </TextInput>

                    </View>



                </View>


                <View style={{
                    marginHorizontal: 30, marginTop: 10,
                    backgroundColor: 'white', paddingLeft: 60
                }}>

                    <TextInput
                        placeholder={'Poblacion (opcional)'}
                        keyboardType={'default'}
                        style={{ fontWeight: 'bold', color: 'black' }}>
                    </TextInput>
                </View>






                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <View style={{ flexDirection: 'column', marginRight: 20 }}>
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



                <View style={{
                    alignItems: 'center', marginHorizontal: 40, backgroundColor: '#816585',
                    borderRadius: 40, padding: 5, marginTop: 20
                }}>

                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 16 }}>
                        {'INICIAR SESION'}
                    </Text>
                </View>

            </View>




        </View>


    )
}

export default Registeration
