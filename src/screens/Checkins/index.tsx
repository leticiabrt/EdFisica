import { ImageBackground, View, Text, Image } from "react-native";
import { styles } from "./styles"
import { styleContainer } from "../../styles/globalstyles";
import CustomButton from '../../components/CustomButton';


export function Checkins() {
  const handlePress = () => {
    // Lógica a ser executada ao pressionar o botão
    console.log('Botão pressionado!');
  };

  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.texto}>CHECKINS</Text>
      </View>

      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.text}>Data</Text>
          <Text style={styles.text}>Atividade</Text>
          <Text style={styles.text}>Checkin</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>data</Text>
          <Text style={styles.cell}>treino</Text>
          <View style={styles.botao}>
            <CustomButton title="Checkin" onPress={handlePress} />
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>data</Text>
          <Text style={styles.cell}>amistoso</Text>
          <View style={styles.botao}>
            <CustomButton title="Checkin" onPress={handlePress} />
          </View>
        </View>
      </View>
    </View>
  );
};


