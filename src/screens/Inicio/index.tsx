import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import CustomButtonII from '../../components/CustomButtonII'


export const Inicio = () => {
    const handlePress = () => {
        // Lógica a ser executada ao pressionar o botão
        console.log('Botão pressionado!');
    };


    const cefet = require('../../assets/cefet.png')
    const titulo = require('../../assets/titulo.png')
    const whats = require('../../assets/whats.png')
    const insta = require('../../assets/insta.png')
    const email = require('../../assets/email.png')

    return (
        <View style={styles.container}>
            <View style={styles.cefet}>
                <Image source={cefet} style={styles.image}></Image>
            </View>
            <View style={styles.header}>
                <Image source={titulo} style={styles.image2}></Image>
            </View>

            <View style={styles.but}>
                <CustomButtonII title="Checkins" onPress={handlePress} />
            </View>

            <View style={styles.footer}>
                <Text style={styles.text}>Ou entre em contato</Text>
                <View style={styles.images}>
                    <Image source={whats} style={styles.image3}></Image>
                    <Image source={insta} style={styles.image4}></Image>
                    <Image source={email} style={styles.image3}></Image>
                </View>

            </View>



        </View>
    );
};