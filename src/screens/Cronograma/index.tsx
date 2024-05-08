import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { styles } from './styles'

export const Cronograma = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.texto}>CRONOGRAMA</Text>
            </View>


            <ScrollView horizontal={true}>
                <View style={styles.table}>
                    <Text style={styles.title}>06/05 - 10/05</Text>
                    <View style={styles.row}>
                        <Text style={styles.text}>Data</Text>
                        <Text style={styles.text}>Horário</Text>
                        <Text style={styles.text}>Modalidade</Text>
                        <Text style={styles.text}>Gênero</Text>
                        <Text style={styles.text}>Público</Text>
                        <Text style={styles.text}>Local</Text>
                        <Text style={styles.text}>Responsável</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.cell}>Dado 1</Text>
                        <Text style={styles.cell}>Dado 2</Text>
                        <Text style={styles.cell}>Dado 3</Text>
                        <Text style={styles.cell}>Dado 4</Text>
                        <Text style={styles.cell}>Dado 5</Text>
                        <Text style={styles.cell}>Dado 6</Text>
                        <Text style={styles.cell}>Dado 7</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.cell}>Dado 1</Text>
                        <Text style={styles.cell}>Dado 2</Text>
                        <Text style={styles.cell}>Dado 3</Text>
                        <Text style={styles.cell}>Dado 4</Text>
                        <Text style={styles.cell}>Dado 5</Text>
                        <Text style={styles.cell}>Dado 6</Text>
                        <Text style={styles.cell}>Dado 7</Text>
                    </View>
                   
                    <View style={styles.row}>
                        <Text style={styles.cell}>Dado 1</Text>
                        <Text style={styles.cell}>Dado 2</Text>
                        <Text style={styles.cell}>Dado 3</Text>
                        <Text style={styles.cell}>Dado 4</Text>
                        <Text style={styles.cell}>Dado 5</Text>
                        <Text style={styles.cell}>Dado 6</Text>
                        <Text style={styles.cell}>Dado 7</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.cell}>Dado 1</Text>
                        <Text style={styles.cell}>Dado 2</Text>
                        <Text style={styles.cell}>Dado 3</Text>
                        <Text style={styles.cell}>Dado 4</Text>
                        <Text style={styles.cell}>Dado 5</Text>
                        <Text style={styles.cell}>Dado 6</Text>
                        <Text style={styles.cell}>Dado 7</Text>
                    </View>
                </View>
            </ScrollView>

        </View>
    );
};




