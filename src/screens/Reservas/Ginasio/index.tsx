import { View, Text} from "react-native";
import { styles } from "./styles";
import { ButtonSlide } from "../../../components/ButtonSlide"
import { IPagina } from "../index"
import CustomButton from "../../../components/CustomButton"

export function Ginasio({ setPageI }: IPagina) {
    const handlePress = () => {
        // Lógica a ser executada ao pressionar o botão
        console.log('Botão pressionado!');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.texto}>Checkins</Text>
            </View>
            <View style={styles.botoes}>
                <ButtonSlide title="Ginásio" onPressI={() => setPageI(2)} cor={true} />
                <ButtonSlide title="Quadra" onPressI={() => setPageI(1)} cor={false} />  
            </View>
            <View style={styles.table}>
                <View style={styles.row}>
                    <Text style={styles.text}>Data</Text>
                    <Text style={styles.text}>Horário</Text>
                    <Text style={styles.text}>Checkin</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.cell}>data</Text>
                    <Text style={styles.cell}>horário</Text>
                    <View style={styles.botao}>
                        <CustomButton title="Reservar" onPress={handlePress} />
                    </View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.cell}>data</Text>
                    <Text style={styles.cell}>horário</Text>
                    <View style={styles.botao}>
                        <CustomButton title="Reservar" onPress={handlePress} />
                    </View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.cell}>data</Text>
                    <Text style={styles.cell}>horário</Text>
                    <Text style={styles.cellI}>Reservado</Text>
                </View>
            </View>

        </View>
    )
}