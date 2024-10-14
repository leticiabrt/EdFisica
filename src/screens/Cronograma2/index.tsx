import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { styles } from './styles';

export const Cronograma2 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.texto}>CRONOGRAMA</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.data}>08/04 - 11/04</Text>
                <View style={styles.card}>
                    <Text style={styles.dateText}>08/04 - 16:20</Text>
                    <Text style={styles.title}>JOGO JEMG Futsal</Text>
                    <Text style={styles.detail}>Masculino - CEFET X Polivalente</Text>
                    <Text style={styles.location}>Local: Ginásio Poliesportivo</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.dateText}>09/04 - 13:30</Text>
                    <Text style={styles.title}>JOGO JEMG Handebol</Text>
                    <Text style={styles.detail}>Feminino - CEFET X ÁGAPE</Text>
                    <Text style={styles.location}>Local: Quadra Santa Maria</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.dateText}>10/04 - 13:30</Text>
                    <Text style={styles.title}>JOGO JEMG Handebol</Text>
                    <Text style={styles.detail}>Feminino - CEFET X Santos Anjos</Text>
                    <Text style={styles.location}>Local: Quadra Santa Maria</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.dateText}>10/04 - 14:30 - 16:00</Text>
                    <Text style={styles.title}>Futsal Seletiva Intercampi</Text>
                    <Text style={styles.detail}>Masculino - Sub 19</Text>
                    <Text style={styles.location}>Local: Quadra</Text>
                    <Text style={styles.responsible}>Responsável: Gabi</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.dateText}>10/04 - 15:00 - 16:00</Text>
                    <Text style={styles.title}>Orientação</Text>
                    <Text style={styles.detail}>Misto - Todos</Text>
                    <Text style={styles.location}>Local: Área Externa</Text>
                    <Text style={styles.responsible}>Responsável: Lucas</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.dateText}>10/04 - 16:00 - 17:30</Text>
                    <Text style={styles.title}>Handebol Seletiva Intercampi</Text>
                    <Text style={styles.detail}>Masculino - Sub 19</Text>
                    <Text style={styles.location}>Local: Quadra</Text>
                    <Text style={styles.responsible}>Responsável: Gabi e Lucas</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.dateText}>11/04 - 15:40</Text>
                    <Text style={styles.title}>JOGO JEMG Handebol</Text>
                    <Text style={styles.detail}>Feminino - CEFET X Pedro de Alcântara</Text>
                    <Text style={styles.location}>Local: Quadra Santa Maria</Text>
                </View>
            </ScrollView>
        </View>
    );
};
