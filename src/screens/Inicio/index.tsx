import React, { useState } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { styles } from './styles';
import CustomButtonII from '../../components/CustomButtonII';


export const Inicio = () => {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const handlePress = () => {
        // Lógica a ser executada ao pressionar o botão
        console.log('Botão pressionado!');
    };

    const cefet = require('../../assets/cefet.png');
    const titulo = require('../../assets/cabecalho.png');
    const whats = require('../../assets/whats.png');
    const insta = require('../../assets/insta.png');
    const email = require('../../assets/email.png');

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
                    Bem vindo ao sistema de educação física do Campus Varginha.
                </Text>
                <View style={styles.login}>
                    <TextInput
                        value={usuario}
                        onChangeText={setUsuario}
                        placeholder="Usuário"
                        style={styles.input}
                    />
                    <TextInput
                        value={senha}
                        onChangeText={setSenha}
                        placeholder="Senha"
                        style={styles.input}
                        secureTextEntry={true} // Aqui o campo será cifrado
                    />

                    <View style={styles.but}>
                        <CustomButtonII title="Entrar" onPress={handlePress} />
                    </View>
                </View>
            </View>
        </View>
    );
};
