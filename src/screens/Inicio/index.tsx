import React, { useState } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { styles } from './styles';
import CustomButtonII from '../../components/CustomButtonII'


export const Inicio = () => {
    const [texto, setTexto] = useState('');

    const handlePress = () => {
        // Lógica a ser executada ao pressionar o botão
        console.log('Botão pressionado!');
    };

    const cefet = require('../../assets/cefet.png')
    const titulo = require('../../assets/cabecalho.png')
    const whats = require('../../assets/whats.png')
    const insta = require('../../assets/insta.png')
    const email = require('../../assets/email.png')

    return (
        <View style={styles.container}>
            <View style={styles.tela}>
                <View style={styles.cefet}>
                    <Image source={cefet}></Image>
                </View>
                <View style={styles.viewimg}>
                    <Image source={titulo} style={styles.titulo}></Image>
                </View>


                <Text style={styles.texto}>
                    Bem vindo ao sistema de educação física do nosso campus.
                </Text>
                <View style={styles.login}>
                    <TextInput
                        value={texto}
                        onChangeText={setTexto}
                        placeholder="Usuário"
                        style={styles.input}
                    />
                    <TextInput
                        value={texto}
                        onChangeText={setTexto}
                        placeholder="Senha"
                        style={styles.input}
                    />

                    <View style={styles.but}>
                        <CustomButtonII title="Entrar" onPress={handlePress} />
                    </View>
                </View>
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