import React, { useState } from 'react';
import { View, Text, Image, TextInput, Dimensions } from 'react-native';
import { styles } from './styles';
import CustomButtonII from '../../components/CustomButtonII'



export const Perfil = () => {
  const handlePress = () => {
    // Lógica a ser executada ao pressionar o botão
    console.log('Botão pressionado!');
  };

  const perfil = require('../../assets/perfil.png')
  const sms = require('../../assets/sms.png')
  const [texto, setTexto] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.teste}>
          <View style={styles.tex}>
            <Text style={styles.texto}>PERFIL</Text>
          </View>
        </View>


        <Image style={styles.img} source={sms}></Image>


      </View>

     
        <View style={styles.info}>
          <View style={styles.l}>
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
              <TextInput
                value={texto}
                onChangeText={setTexto}
                placeholder="Digite aqui"
                style={{ height: 200, borderColor: 'black', borderWidth: 1, padding: 5, }}
              />
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










