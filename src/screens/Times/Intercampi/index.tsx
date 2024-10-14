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
                ["Marcela Andrade", "2 Edif"],
                ["Ana Paula", "2 Meca"],
                ["Fernanda Lima", "3 Info"],
                ["Tatiane Silva", "1 Edif"],
                ["Camila Costa", "3 Meca"],
            ],
        },
    },
    {
        question: "Handebol Masculino",
        tableData: {
            headers: ["Nome", "Turma"],
            rows: [
                ["João Marcos Pereira", "3 Info"],
                ["Gabriel Ferreira", "3 Meca"],
                ["Lucas Ferreira", "2 Edif"],
                ["Rafael Souza", "2 Info"],
                ["Thiago Santos", "3 Meca"],
                ["Felipe Almeida", "1 Edif"],
            ],
        },
    },
    {
        question: "Futsal Masculino",
        tableData: {
            headers: ["Nome", "Turma"],
            rows: [
                ["Caio Sousa", "3 Info"],
                ["Thiago Costa", "2 Info"],
                ["Marcos Paulo", "3 Meca"],
                ["Leonardo Costa", "1 Edif"],
                ["Felipe Nascimento", "3 Info"],
                ["Bruno Martins", "2 Meca"],
            ],
        },
    },
    {
        question: "Futsal Feminino",
        tableData: {
            headers: ["Nome", "Turma"],
            rows: [
                ["Isabela Ramos", "3 Info"],
                ["Larissa Andrade", "2 Edif"],
                ["Carla Mendes", "1 Meca"],
                ["Natália Alves", "3 Info"],
                ["Bianca Oliveira", "2 Meca"],
                ["Juliana Ribeiro", "1 Edif"],
            ],
        },
    },
    {
        question: "Vôlei Feminino",
        tableData: {
            headers: ["Nome", "Turma"],
            rows: [
                ["Maria Clara", "3 Info"],
                ["Laura Silva", "2 Edif"],
                ["Sofia Costa", "1 Meca"],
                ["Ana Beatriz", "3 Info"],
                ["Jéssica Martins", "2 Meca"],
                ["Rafaela Almeida", "1 Edif"],
            ],
        },
    },
    {
        question: "Vôlei Masculino",
        tableData: {
            headers: ["Nome", "Turma"],
            rows: [
                ["Gustavo Ferreira", "3 Info"],
                ["Ricardo Nascimento", "2 Meca"],
                ["Daniel Santos", "3 Edif"],
                ["Eduardo Costa", "2 Info"],
                ["Anderson Silva", "3 Meca"],
                ["Victor Hugo", "1 Edif"],
            ],
        },
    },
    {
        question: "Basquete Feminino",
        tableData: {
            headers: ["Nome", "Turma"],
            rows: [
                ["Letícia Brito", "3 Info"],
                ["Olivia Santos", "2 Edif"],
                ["Ana Paula", "1 Meca"],
                ["Tatiane Silva", "3 Info"],
                ["Camila Costa", "2 Meca"],
                ["Fernanda Lima", "1 Edif"],
            ],
        },
    },
    {
        question: "Basquete Masculino",
        tableData: {
            headers: ["Nome", "Turma"],
            rows: [
                ["João Vitor Gomes", "3 Info"],
                ["Pedro Augusto", "3 Meca"],
                ["Lucas Ferreira", "2 Edif"],
                ["Rafael Souza", "2 Info"],
                ["Thiago Santos", "3 Meca"],
                ["Felipe Almeida", "1 Edif"],
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


