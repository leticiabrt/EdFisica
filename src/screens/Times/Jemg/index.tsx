import { styles } from "./styles";
import { ButtonSlide } from '../../../components/ButtonSlide';
import { IPagina } from '../index';
import { FaqItem } from '../../../components/FaqItem';
import { View, Text, ScrollView } from 'react-native';
import React, {useState} from 'react';


export function JEMG({ setPageI }: IPagina) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData = [
    {
        question: "Handebol Feminino",
        tableData: {
            headers: ["Nome", "Turma"],
            rows: [
                ["Ana Clara", "3 Info"],
                ["Bianca Silva", "2 Edif"],
                ["Sofia Almeida", "3 Meca"],
                ["Fernanda Costa", "1 Edif"],
            ],
        },
    },
    {
        question: "Handebol Masculino",
        tableData: {
            headers: ["Nome", "Turma"],
            rows: [
                ["Pedro Lucas", "3 Info"],
                ["Rafael Alves", "3 Meca"],
                ["Gabriel Martins", "2 Edif"],
                ["Thiago Pereira", "1 Info"],
            ],
        },
    },
    {
        question: "Futsal Masculino",
        tableData: {
            headers: ["Nome", "Turma"],
            rows: [
                ["Fernando Oliveira", "3 Info"],
                ["João Victor", "2 Info"],
                ["Mateus Lima", "3 Meca"],
                ["Lucas Andrade", "1 Edif"],
            ],
        },
    },
    {
        question: "Futsal Feminino",
        tableData: {
            headers: ["Nome", "Turma"],
            rows: [
                ["Isabela Santos", "3 Info"],
                ["Larissa Mendes", "2 Edif"],
                ["Camila Rocha", "3 Meca"],
                ["Patrícia Lima", "1 Info"],
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
                <ButtonSlide title="JEMG" onPressI={() => setPageI(2)} cor={false} />
                <ButtonSlide title="Intercampi" onPressI={() => setPageI(1)} cor={true} />
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
