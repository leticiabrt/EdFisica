import React from 'react';
import { ImageBackground, TouchableOpacity, Text, StyleSheet, View } from 'react-native';


export const Testes = () => {
  const fundoteste = require('../../assets/fundoteste.png')
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7}>
      <ImageBackground source={fundoteste}>
      <Text style={styles.text}>Meu Botão</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    //width: 200,
  //  height: 50,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Evita que a imagem de fundo se espalhe para fora do botão
   },
  text: {
    padding: 10,
    fontSize: 18,
    color: '#fff',
  },
});

