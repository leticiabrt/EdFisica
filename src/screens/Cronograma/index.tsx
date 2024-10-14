import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { styles } from './styles';

export const Cronograma = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.texto}>CRONOGRAMA</Text>
            </View>

            <ScrollView horizontal={true}>
                <View style={styles.table}>
                    <Text style={styles.title}>08/04 - 11/04</Text>
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
                        <Text style={styles.cell}>08/04</Text>
                        <Text style={styles.cell}>16:20</Text>
                        <Text style={styles.cell}>JOGO JEMG Futsal</Text>
                        <Text style={styles.cell}>Masculino</Text>
                        <Text style={styles.cell}>CEFET X Polivalente</Text>
                        <Text style={styles.cell}>Ginásio Poliesportivo</Text>
                        <Text style={styles.cell}>-</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.cell}>09/04</Text>
                        <Text style={styles.cell}>13:30</Text>
                        <Text style={styles.cell}>JOGO JEMG Handebol</Text>
                        <Text style={styles.cell}>Feminino</Text>
                        <Text style={styles.cell}>CEFET X ÁGAPE</Text>
                        <Text style={styles.cell}>Quadra Santa Maria</Text>
                        <Text style={styles.cell}>-</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.cell}>10/04</Text>
                        <Text style={styles.cell}>13:30</Text>
                        <Text style={styles.cell}>JOGO JEMG Handebol</Text>
                        <Text style={styles.cell}>Feminino</Text>
                        <Text style={styles.cell}>CEFET X Santos Anjos</Text>
                        <Text style={styles.cell}>Quadra Santa Maria</Text>
                        <Text style={styles.cell}>-</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.cell}>10/04</Text>
                        <Text style={styles.cell}>14:30 - 16:00</Text>
                        <Text style={styles.cell}>Futsal Seletiva Intercampi</Text>
                        <Text style={styles.cell}>Masculino</Text>
                        <Text style={styles.cell}>Sub 19</Text>
                        <Text style={styles.cell}>Quadra</Text>
                        <Text style={styles.cell}>Gabi</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.cell}>10/04</Text>
                        <Text style={styles.cell}>15:00 - 16:00</Text>
                        <Text style={styles.cell}>Orientação</Text>
                        <Text style={styles.cell}>Misto</Text>
                        <Text style={styles.cell}>Todos</Text>
                        <Text style={styles.cell}>Área Externa</Text>
                        <Text style={styles.cell}>Lucas</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.cell}>10/04</Text>
                        <Text style={styles.cell}>16:00 - 17:30</Text>
                        <Text style={styles.cell}>Handebol Seletiva Intercampi</Text>
                        <Text style={styles.cell}>Masculino</Text>
                        <Text style={styles.cell}>Sub 19</Text>
                        <Text style={styles.cell}>Quadra</Text>
                        <Text style={styles.cell}>Gabi e Lucas</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.cell}>11/04</Text>
                        <Text style={styles.cell}>15:40</Text>
                        <Text style={styles.cell}>JOGO JEMG Handebol</Text>
                        <Text style={styles.cell}>Feminino</Text>
                        <Text style={styles.cell}>CEFET X Pedro de Alcântara</Text>
                        <Text style={styles.cell}>Quadra Santa Maria</Text>
                        <Text style={styles.cell}>-</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
