import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Modal, TextInput, Switch, Alert } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from "./styles";
import { ButtonSlide } from "../../../components/ButtonSlide";
import CustomButton from "../../../components/CustomButton";
import { useAuth } from "../../../hook/auth";
import { apiReserva } from "../../../services/data";
import { IReserva, IResponseReserva } from "../../../services/data/Reserva";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { AxiosError } from "axios";

export interface IReservaDados {
    idReserva?: number,
    dia?: string,
    horarioInicio?: string,
    horarioFim?: string,
    finalidade?: string,
    tipo?: string,
    numeroPessoas?: string,
}

export function Ginasio() {

    const [modalVisible, setModalVisible] = useState(false); // modal para cadastrar uma reserva
    const [modalVisibleAlert, setModalVisibleAlert] = useState(false); //modal para alertar sobre uma reserva feita

    const [concorda, setConcorda] = useState(false); // Switch para o termo de uso
    const [concorda2, setConcorda2] = useState(false); // Switch para reserva regular

    const [local, setLocal] = useState(false);

    /*Variaveis pra utilizar o relógio como campo*/
    const [horarioInicio, setHorarioInicio] = useState(new Date())
    const [horarioFim, setHorarioFim] = useState(new Date())

    // Para utilizar os calendarios e os relogios
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const [isStartTimePickerVisible, setStartTimePickerVisible] = useState(false);
    const [isEndTimePickerVisible, setEndTimePickerVisible] = useState(false);

    /*Lógica de listar as reservas*/
    const [reserva, setReserva] = useState<IReserva[]>([])
    const { setLoading, user } = useAuth()
    useEffect(() => {
        setLoading(true)
        async function loadMessage() {
            const response = await apiReserva.index()
            setReserva(response.data.dados)
        }
        setLoading(false)
        loadMessage()
    }, [])

    interface itemMessage {
        item: IReserva
    }

    // foreach para percorrer todas reservas
    const renderItem = (({ item }: itemMessage) => {
        if (item.local == 'Quadra' && item.status == 'A' && (local == true)) {
            return (
                <View style={styles.tableDado}>
                    <Text style={styles.horarioTabela}>Dia: {item.dia} ({item.horarioInicio} - {item.horarioFim})</Text>
                    <Text style={styles.atividadeTabela}>{item.finalidade}</Text>
                    <Text style={styles.responsavelTabela}>Responsável: {item.nomeAluno}</Text>
                </View>
            )
        } else if (item.local == 'Ginásio' && item.status == 'A' && (local == false)){
            return (
                <View style={styles.tableDado}>
                    <Text style={styles.horarioTabela}>Dia: {item.dia} ({item.horarioInicio} - {item.horarioFim})</Text>
                    <Text style={styles.atividadeTabela}>{item.finalidade}</Text>
                    <Text style={styles.responsavelTabela}>Responsável: {item.nomeAluno}</Text>
                </View>
            )
        } else {
            return (
                <View> </View>
            )
        }
    })

    /*Lógica de cadastrar uma reserva*/
    const [data, setData] = useState<IReserva>();
    async function handleCadReserva() {
        if (data?.dia && data.finalidade && data.horarioFim && data.horarioInicio && data.numeroPessoas) {
            setLoading(true)
            try {
                if (local == false) {
                    await apiReserva.store({ ...data, idAluno: user?.data.id, status: 'P', local: 'Ginásio', tipo: 'normal' })
                } else {
                    await apiReserva.store({ ...data, idAluno: user?.data.id, status: 'P', local: 'Quadra', tipo: 'normal' })
                }
                Alert.alert("Reserva regsitrada!", "Aguarde a professora Gabriela aceitá-la...")
            } catch (error) {
                const err = error as AxiosError
                const msg = err.response?.data as string
                console.log(err)
            }
            setLoading(false)
        } else {
            Alert.alert("Preencha todos os campos!!!")
        }
    }

    function handleChange(item: IReservaDados) {
        setData({ ...data, ...item });
        console.log(data)
    }

    // Variaveis para poder utilizar o calendario e o relógio
    const [horaInicio, setHoraInicio] = useState(new Date());
    const [horaFim, setHoraFim] = useState(new Date());
    const [date, setDate] = useState(new Date()) // data para ser utilizada no calendario
    const [dateString, setDateString] = useState('') // data para salvar no bd

    const handleChangeData = (event, selectedDate) => {
        const currentDate = selectedDate || data;
        setDatePickerVisible(false);

        /*Formata a data para salvar no BD, no formato dd-mm-yy*/
        const diaBD = currentDate.toLocaleDateString({
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
        }).replace(/\//g, '-');

        /*Formata a data para mostrar no formato dd/mm/yy*/
        const diaListar = currentDate.toLocaleDateString({
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
        }).replace(/\//g, '/');

        setDate(diaListar) //salva a data para passar pro calendario (formatt diferentão)

        // Formata a data para salvar no BD no formato yy-mm-dd
        const dia2Formatted = diaBD.split('-').reverse().join('-');
        setDateString(diaBD) // salva a data em stirng para poder listar
        handleChange({ dia: dia2Formatted })
    };

    const handleChangeHoraInicio = (event, selectedTime) => {
        if (event.type === "set") {
            setStartTimePickerVisible(false);
            setHoraInicio(selectedTime);
            const hInicio = selectedTime.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
            handleChange({ horarioInicio: hInicio })
        } else {
            setStartTimePickerVisible(false);
        }
    };

    const handleChangeHoraFim = (event, selectedTime) => {
        if (event.type === "set") {
            setEndTimePickerVisible(false);
            setHoraFim(selectedTime);
            const hFim = selectedTime.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
            handleChange({ horarioFim: hFim })
        } else {
            setEndTimePickerVisible(false);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.texto}></Text>
            </View>
            <View style={styles.botoes}>
                <ButtonSlide title="Quadra" onPressI={() => setLocal(true)} cor={!local} />
                <ButtonSlide title="Ginásio" onPressI={() => setLocal(false)} cor={local} />
            </View>

            <ScrollView style={styles.ajuste}>
                <>
                    {
                        reserva.length > 0 && (
                            <FlatList
                                style={styles.flatlist}
                                data={reserva}
                                renderItem={renderItem}
                                keyExtractor={item => String(item.idReserva)}
                            />
                        )
                    }
                </>

                <CustomButton title="Nova Reserva" onPress={() => setModalVisible(true)} />
            </ScrollView>

            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Nova Reserva</Text>


                        <TouchableOpacity onPress={() => setDatePickerVisible(true)}>
                            <Text style={styles.input}>Data: {dateString}</Text>
                        </TouchableOpacity>
                        {isDatePickerVisible && (
                            <DateTimePicker value={new Date()} mode="date" display="default" onChange={handleChangeData} />
                        )}

                        <TouchableOpacity onPress={() => setStartTimePickerVisible(true)}>
                            <Text style={styles.input}>Hora Início: {horaInicio.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</Text>
                        </TouchableOpacity>
                        {isStartTimePickerVisible && (
                            <DateTimePicker value={horaInicio} mode="time" display="default" onChange={handleChangeHoraInicio} />
                        )}

                        <TouchableOpacity onPress={() => setEndTimePickerVisible(true)}>
                            <Text style={styles.input}>Hora Fim: {horaFim.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</Text>
                        </TouchableOpacity>
                        {isEndTimePickerVisible && (
                            <DateTimePicker value={horaFim} mode="time" display="default" onChange={handleChangeHoraFim} />
                        )}



                        <TextInput
                            style={styles.idAluno}
                            placeholder="Aluno"
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Finalidade"
                            onChangeText={(i) => handleChange({ finalidade: i })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Número de Participantes"
                            keyboardType="numeric"
                            onChangeText={(i) => handleChange({ numeroPessoas: i })}
                        />
                        <View style={styles.switchContainer}>
                            <Switch value={concorda} onValueChange={setConcorda} />
                            <Text>Li e concordo com as regras de uso</Text>
                        </View>
                        <View style={styles.switchContainer}>
                            <Switch value={concorda2} onValueChange={setConcorda2} />
                            <Text>Reserva regular</Text>
                        </View>

                        <View style={styles.bot}>
                            <CustomButton title="Confirmar Reserva" onPress={handleCadReserva} />
                        </View>
                        <View>
                            <CustomButton title="Cancelar" onPress={() => setModalVisible(false)} />
                        </View>

                    </View>
                </View>
            </Modal>
        </View>
    );
}