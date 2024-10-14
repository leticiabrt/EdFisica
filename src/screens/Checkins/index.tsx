import { ImageBackground, View, Text, Image, Alert } from "react-native"; // Importação do Alert
import { styles } from "./styles";
import { styleContainer } from "../../styles/globalstyles";
import CustomButton from '../../components/CustomButton';
import React, { useState } from 'react'; // Importando useState

// Definindo uma interface para a atividade
interface Atividade {
  data: string;
  nome: string;
}

export function Checkins() {
  const [checkinsRealizados, setCheckinsRealizados] = useState<string[]>([]); // Estado para armazenar check-ins realizados

  const handlePress = (atividade: string) => { // Adicionando tipo para o parâmetro
    Alert.alert(
      "Confirmação de Check-in",
      "Certeza que deseja fazer check-in nessa atividade?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Sim",
          onPress: () => {
            setCheckinsRealizados((prev) => [...prev, atividade]); // Adiciona a atividade aos check-ins realizados
          }
        }
      ]
    );
  };

  // Lista de atividades
    const atividades: Atividade[] = [
      { data: '16/10', nome: 'Treino Vôlei Misto' },
      { data: '16/10', nome: 'Treino Handebol Feminino' },
      { data: '18/10', nome: 'Amistoso Handebol Feminino' },
      { data: '18/10', nome: 'Treino Futsal Masculino' },
      { data: '19/10', nome: 'Amistoso Vôlei Feminino' },
      { data: '20/10', nome: 'Treino Basquete Masculino' },
      { data: '21/10', nome: 'Competição de Orientação' },
      { data: '22/10', nome: 'Treino Futsal Misto' }
  ];
  

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
        {atividades.map((atividade, index) => (
          <View style={styles.row} key={index}>
            <Text style={styles.cell}>{atividade.data}</Text>
            <Text style={styles.cell}>{atividade.nome}</Text>
            <View style={styles.botao}>
              {checkinsRealizados.includes(atividade.nome) ? ( // Verifica se o check-in foi realizado
                <Text style={{ color: 'green', textAlign: 'center' }}>Check-in realizado</Text>
              ) : (
                <CustomButton title="Checkin" onPress={() => handlePress(atividade.nome)} />
              )}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
