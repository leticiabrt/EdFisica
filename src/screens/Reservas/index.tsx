import { ImageBackground, View, Text, Image } from "react-native";
import { styles } from "./styles"
import { styleContainer } from "../../styles/globalstyles";
import CustomButton from '../../components/CustomButton';


export function Reservas() {
    const handlePress = () => {
        // Lógica a ser executada ao pressionar o botão
        console.log('Botão pressionado!');
    };

    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.texto}>Checkins</Text>
            </View>

            <View style={styles.table}>
                <View style={styles.row}>
                    <Text style={styles.text}>Data</Text>
                    <Text style={styles.text}>Horário</Text>
                    <Text style={styles.text}>Reserva</Text>
                </View>
                <View style={styles.row}>
                    <Text style={[styles.cell, styles.mergedCell]}>**/**{"\n"}1.70m</Text>
                    <Text style={styles.cell}>**:**</Text>
                    <View style={styles.botao}>
                        <CustomButton title="Disponível" onPress={handlePress} />
                    </View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.cell}>**/**</Text>
                    <Text style={styles.cell}>**:**</Text>
                    <View style={styles.botao}>
                        <CustomButton title="Disponível" onPress={handlePress} />
                    </View>
                </View>
            </View>
        </View>
    );
};

