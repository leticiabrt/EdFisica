import { styles } from "./styles";
import { ButtonSlide } from '../../../components/ButtonSlide';
import { IPagina } from '../index';
import { FaqItem } from '../../../components/FaqItem';
import { View, Text, ScrollView } from 'react-native';
import React, {useState} from 'react';


export function Intercampi({ setPageI }: IPagina) {
  const [openItems, setOpenItems] = useState<number[]>([]);

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
              ["João Marcos Pereira", "3 Info"],
              ["Gabriel de Barros", "3 Meca"],
            ],
          },
        },
        {
          question: "Basquete Feminino",
          tableData: {
            headers: ["Nome", "Turma"],
            rows: [
              ["Letícia Brito", "3 Info"],
              ["Marcela Selvatti", "2 Edif"],
            ],
          },
        },
        {
          question: "Basquete Masculino",
          tableData: {
            headers: ["Nome", "Turma"],
            rows: [
              ["João Marcos Pereira", "3 Info"],
              ["Gabriel de Barros", "3 Meca"],
              ["João Marcos Pereira", "3 Info"],
               ["Gabriel de Barros", "3 Meca"],
            ],
          },
        },        
      ];
    
      const toggleItem = (index: number) => {
        if (openItems.includes(index)) {
            setOpenItems(openItems.filter(i => i !== index)); // Fechar se já estiver aberto
        } else {
            setOpenItems([...openItems, index]); // Abrir item
        }
    };

      return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.texto}>TIMES</Text>
            </View>
            <View style={styles.botoes}>
                <ButtonSlide title="JEMG" onPressI={() => setPageI(2)} cor={true} />
                <ButtonSlide title="Intercampi" onPressI={() => setPageI(1)} cor={false} />
            </View>
            <ScrollView>
                {faqData.map((faq, index) => (
                    <FaqItem
                        key={index}
                        question={faq.question}
                        tableData={faq.tableData}
                        isOpen={openItems.includes(index)}
                        onPress={() => toggleItem(index)}
                    />
                ))}
            </ScrollView>
        </View>
      );
};


