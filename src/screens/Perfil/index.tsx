import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import CustomButtonII from '../../components/CustomButtonII'


export const Perfil = () => {
  const handlePress = () => {
    // Lógica a ser executada ao pressionar o botão
    console.log('Botão pressionado!');
  };

  const perfil = require('../../assets/perfil.png')
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.texto}>PERFIL</Text>
      </View>
      <View style={styles.tela}>
        <View style={styles.info}>
          <Image source={perfil}></Image>
          <View style={styles.infos}>
            <Text style={styles.title}>NOME: </Text>
            <Text style={styles.title}>TURMA: </Text>
            <Text style={styles.title}>CURSO: </Text>
          </View>
        </View>

        <View style={styles.desc}>
          <View style={styles.caixa}>
            <Text style={styles.title}>Descrição esportiva: </Text>
            <Text style={styles.text}>************************
              *****************************8
              ************************8
              *************************8
              ***************************
            </Text>
          </View>
        </View>
        
        <View style={styles.botao}>
          <View style={styles.but}>
            <CustomButtonII title="Reservas" onPress={handlePress} />
          </View>
          <View style={styles.but}>
            <CustomButtonII title="Times" onPress={handlePress} />
          </View>
          <View style={styles.but}>
            <CustomButtonII title="Checkins" onPress={handlePress} />
          </View>

        </View>
      </View>
    </View>
  );
};










