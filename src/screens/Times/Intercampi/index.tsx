import { styles } from "./styles";
import { ButtonSlide } from '../../../components/ButtonSlide';
import { IPagina } from '../index';
import { FaqItem } from '../../../components/FaqItem';
import { View, Text } from 'react-native';


export function Intercampi({ setPageI }: IPagina) {
    const faqData = [
        {
          question: "Handebol Feminino",
          tableData: {
            headers: ["Nome", "Turma"],
            rows: [
              ["Letícia Brito", "3 Info"],
              ["Marcela Selvatti", "2 Edif"],
            ],
          },
        },
        {
          question: "Handebol Masculino",
          tableData: {
            headers: ["Nome", "Turma"],
            rows: [
              ["João Marcos Pereira", "3 Info"],
              ["Gabriel de Barros", "3 Meca"],
            ],
          },
        },
        {
          question: "Futsal Masculino",
          tableData: {
            headers: ["Nome", "Turma"],
            rows: [
              ["Caio Vitor", "3 Info"],
              ["Thiago", "2 Info"],
            ],
          },
        },
        {
          question: "Futsal Feminino",
          tableData: {
            headers: ["Nome", "Turma"],
            rows: [
              ["Letícia Brito", "3 Info"],
              ["Marcela Selvatti", "2 Edif"],
            ],
          },
        },        
      ];
    
      return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.texto}>TIMES</Text>
            </View>
            <View style={styles.botoes}>
                <ButtonSlide title="JEMG" onPressI={() => setPageI(2)} cor={true} />
                <ButtonSlide title="Intercampi" onPressI={() => setPageI(1)} cor={false} />
            </View>
          {faqData.map((faq, index) => (
            <FaqItem key={index} question={faq.question} tableData={faq.tableData} />
          ))}
        </View>
      );
};


