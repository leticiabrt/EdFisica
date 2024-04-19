import { styles } from "./styles"


import { FaqItem } from "../../components/FaqItem/"
import { View, Text } from 'react-native';


export const Times = () => {
    const faqData = [
        {
          question: "Vôlei Feminino",
          tableData: {
            headers: ["Nome", "Turma"],
            rows: [
              ["Letícia Brito", "3 Info"],
              ["Marcela Selvatti", "2 Edif"],
            ],
          },
        },
        {
          question: "Vôlei Masculino",
          tableData: {
            headers: ["Nome", "Turma"],
            rows: [
              ["João Marcos Pereira", "3 Info"],
              ["Gabriel de Barros", "3 Meca"],
            ],
          },
        },
        
      ];
    
      return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.texto}>TIMES</Text>
               
            </View>
          {faqData.map((faq, index) => (
            <FaqItem key={index} question={faq.question} tableData={faq.tableData} />
          ))}
        </View>
      );
};


