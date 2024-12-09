import { styles } from "./styles";
import { ButtonSlide } from '../../components/ButtonSlide';
import { FaqItem } from '../../components/FaqItem';
import { View, Text, ScrollView, Button, Modal, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useAuth } from "../../hook/auth";
import { apiTime } from "../../services/data";
import { IJogo, ITime } from "../../services/data/Time";
import { AxiosError } from "axios";
import { FlatList } from "react-native-gesture-handler";


export function Times() {
    const [modalJogosVisible, setModalJogosVisible] = useState(false);
    const [competicao, setCompeticao] = useState(true);
    const { setLoading, user } = useAuth()

    // Listar todos os times que o aluno participa
    const [times, setTimes] = useState<ITime[]>([])
    useEffect(() => {
        setLoading(true)
        async function loadTimes() {
            try {
                const response = await apiTime.index({ idAluno: user?.data.id })
                setTimes(response.data.times)
                console.log(times)
            } catch (error) {
                const err = error as AxiosError
                const msg = err.response?.data as string
                console.log(msg)
            }
        }
        setLoading(false)
        loadTimes()
    }, [])

    interface itemTime {
        item: ITime
    }

    const renderItem = (({ item }: itemTime) => {
        if (item.competicao == 'Intercampi' && competicao == false) {
            return (
                <TouchableOpacity onPress={() => {
                    loadJogos(item.idTime)
                    setModalJogosVisible(true)
                }}>
                    <View style={styles.tableDado}>
                        <Text style={styles.competicaoTabela}>{item.modalidade} {item.genero} - {item.competicao}</Text>
                        <Text style={styles.jogosTabela}>Jogos marcados: 2</Text>
                    </View>
                </TouchableOpacity>

            )
        } else if (item.competicao == 'JEMG' && competicao == true) {
                return (
                    <TouchableOpacity onPress={() => {
                        loadJogos(item.idTime)
                        setModalJogosVisible(true)
                    }}>
                        <View style={styles.tableDado}>
                            <Text style={styles.competicaoTabela}>{item.modalidade} {item.genero} - {item.competicao}</Text>
                            <Text style={styles.jogosTabela}>Jogos marcados: 2</Text>
                        </View>
                    </TouchableOpacity>
    
                )
        } else {
            return (
                    <View></View>

            )
        }
    })

    //Listar os jogos de um time

    const [jogos, setJogos] = useState<IJogo[]>([])
    async function loadJogos(idTime: any) {
        try {
            setJogos([])
            const response = await apiTime.indexJogos({ idTime: idTime })
            setJogos(response.data.jogos)
            console.log(jogos)
        } catch (error) {
            const err = error as AxiosError
            const msg = err.response?.data as string
            console.log(msg)
        }
    }

    interface itemJogo {
        item: IJogo
    }

    const renderItemJogos = (({ item }: itemJogo) => {
        return (
            <View style={styles.tableDado}>
                <Text style={styles.diaTabela}>{item.dia} ({item.horarioInicio} - {item.horarioFim})</Text>
                <Text style={styles.localTabela}>Local: {item.local}</Text>
                { item.observacao &&
                    <Text style={styles.observacaoTabela}>Observação: {item.observacao}</Text>
                }
            </View>
        )
    }
    )

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.texto}>TIMES</Text>
            </View>
            <View style={styles.botoes}>
                <ButtonSlide title="JEMG" onPressI={() => setCompeticao(true)} cor={!competicao} />
                <ButtonSlide title="Intercampi" onPressI={() => setCompeticao(false)} cor={competicao} />
            </View>
            {
                times.length > 0 && (
                    <FlatList
                        style={styles.flatlist}
                        data={times}
                        renderItem={renderItem}
                        keyExtractor={item => String(item.idTime)}
                    />
                )
            }
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalJogosVisible}
                onRequestClose={() => setModalJogosVisible(false)}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={{ width: '90%', backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Jogos</Text>
                        <ScrollView>
                            {
                                jogos.length > 0 && (
                                    <FlatList
                                        data={jogos}
                                        renderItem={renderItemJogos}
                                        keyExtractor={item => String(item.idJogo)}
                                    />
                                )
                            }
                        </ScrollView>
                        <Button title="Fechar" onPress={() => setModalJogosVisible(false)} />
                    </View>

                </View>
            </Modal>

        </View>
    );
};


