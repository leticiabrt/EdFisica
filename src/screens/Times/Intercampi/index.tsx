import { styles } from "./styles";
import { ButtonSlide } from '../../../components/ButtonSlide';
import { IPagina } from '../index';
import { FaqItem } from '../../../components/FaqItem';
import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useAuth } from "../../../hook/auth";
import { apiTime } from "../../../services/data";
import { ITime } from "../../../services/data/Time";
import { AxiosError } from "axios";
import { FlatList } from "react-native-gesture-handler";


export function Intercampi({ setPageI }: IPagina) {

    const { setLoading, user } = useAuth()
    const [times, setTimes] = useState<ITime[]>([])
    useEffect(() => {
        setLoading(true)
        async function loadMessage() {
            try {
                const response = await apiTime.index({ idAluno: user?.data.id })
                console.log(response.data.dados)
            } catch (error) {
                const err = error as AxiosError
                const msg = err.response?.data as string
                console.log(msg)
            }
        }
        setLoading(false)
        loadMessage()
    }, [])

    interface itemTreino {
        item: ITime
    }

    // foreach para percorrer todos os times
    const renderItem = (({ item }: itemTreino) => {
        return (
            <View>
                <Text>Dia: {item.competicao} ({item.genero} - {item.modalidade})</Text>
            </View>
        )
    })

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.texto}>TIMES</Text>
            </View>
            <View style={styles.botoes}>
                <ButtonSlide title="JEMG" onPressI={() => setPageI(2)} cor={true} />
                <ButtonSlide title="Intercampi" onPressI={() => setPageI(1)} cor={false} />
            </View>
            {
                times.length > 0 && (
                    <FlatList
                        data={times}
                        renderItem={renderItem}
                        keyExtractor={item => String(item.idTime)}
                    />
                )
            }

        </View>
    );
};


