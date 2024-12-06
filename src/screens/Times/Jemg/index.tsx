import { styles } from "./styles";
import { ButtonSlide } from '../../../components/ButtonSlide';
import { IPagina } from '../index';
import { FaqItem } from '../../../components/FaqItem';
import { View, Text, ScrollView } from 'react-native';
import React, {useState} from 'react';


export function JEMG({ setPageI }: IPagina) {

      return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.texto}>TIMES</Text>
            </View>
            <View style={styles.botoes}>
                <ButtonSlide title="JEMG" onPressI={() => setPageI(2)} cor={false} />
                <ButtonSlide title="Intercampi" onPressI={() => setPageI(1)} cor={true} />
            </View>
            
        </View>
      );
};
