import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, TextInput, Switch } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from "./styles";
import { ButtonSlide } from "../../../components/ButtonSlide";
import CustomButton from "../../../components/CustomButton";

export function Quadra({ setPageI }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [data, setData] = useState('');
    const [horaInicio, setHoraInicio] = useState(new Date()); // Armazena hora de início
    const [horaFim, setHoraFim] = useState(new Date()); // Armazena hora de fim
    const [responsavel, setResponsavel] = useState('');
    const [finalidade, setFinalidade] = useState('');
    const [participantes, setParticipantes] = useState('');
    const [concorda, setConcorda] = useState(false);
    const [concorda2, setConcorda2] = useState(false); // Switch para reserva regular
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const [isStartTimePickerVisible, setStartTimePickerVisible] = useState(false);
    const [isEndTimePickerVisible, setEndTimePickerVisible] = useState(false);
    const [reservas, setReservas] = useState([]);
    const [filtroData, setFiltroData] = useState('');

    const handleConfirmarReserva = () => {
        if (data && horaInicio && horaFim && responsavel && finalidade && participantes && concorda) {
            const novaReserva = { 
                data, 
                horaInicio, 
                horaFim, 
                responsavel, 
                finalidade, 
                participantes 
            };
            setReservas([...reservas, novaReserva]);
            setModalVisible(false);
        } else {
            alert("Preencha todos os campos e concorde com as regras de uso.");
        }
    };

    const handleCancelarReserva = (index) => {
        // Função para cancelar a reserva
        setReservas(reservas.filter((_, i) => i !== index));
    };

    const handleChangeData = (event, selectedDate) => {
        const currentDate = selectedDate || data;
        setDatePickerVisible(false);
        setData(currentDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }));
    };

    const handleChangeHoraInicio = (event, selectedTime) => {
        if (event.type === "set") {
            setStartTimePickerVisible(false);
            setHoraInicio(selectedTime); // Atualiza a hora de início
        } else {
            setStartTimePickerVisible(false);
        }
    };

    const handleChangeHoraFim = (event, selectedTime) => {
        if (event.type === "set") {
            setEndTimePickerVisible(false);
            setHoraFim(selectedTime); // Atualiza a hora de fim
        } else {
            setEndTimePickerVisible(false);
        }
    };

    // Lógica de filtragem por dia e mês
    const filteredReservas = filtroData
        ? reservas.filter(reserva => {
            const reservaData = reserva.data.split('/'); // Divide a data armazenada
            const filtroParts = filtroData.split('/'); // Divide a data do filtro
            return reservaData[0] === filtroParts[0] && reservaData[1] === filtroParts[1]; // Compara dia e mês
        })
        : reservas;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.texto}>RESERVAS</Text>
            </View>
            <View style={styles.botoes}>
                <ButtonSlide title="Quadra" onPressI={() => setPageI(2)} cor={false} />
                <ButtonSlide title="Ginásio" onPressI={() => setPageI(1)} cor={true} />
            </View>

            <View style={styles.ajuste}>
                <TextInput
                    style={styles.input}
                    placeholder="Filtrar por Data (dd/mm)"
                    value={filtroData}
                    onChangeText={setFiltroData}
                />

                <View style={styles.table}>
                    {filteredReservas.length === 0 ? (
                        <Text style={styles.textt}>Nenhuma reserva registrada para essa data</Text>
                    ) : (
                        <>
                            {/* Cabeçalho da tabela */}
                            <View style={styles.row}>
                                <Text style={styles.text}>Data</Text>
                                <Text style={styles.text}>Horário</Text>
                                <Text style={styles.text}>Respons.</Text>
                                <Text style={styles.text}>Ação</Text>
                            </View>

                            {/* Listagem das reservas */}
                            {filteredReservas.map((reserva, index) => (
                                <View key={index}>
                                    <View style={styles.row}>
                                        <Text style={styles.cell}>{reserva.data}</Text>
                                        <Text style={styles.cell}>{reserva.horaInicio.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })} - {reserva.horaFim.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</Text>
                                        <Text style={styles.cell}>{reserva.responsavel}</Text>
                                        <TouchableOpacity onPress={() => handleCancelarReserva(index)}>
                                            <Text style={styles.cell1}>Cancelar</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))}
                        </>
                    )}
                </View>

                <CustomButton title="Nova Reserva" onPress={() => setModalVisible(true)} />
            </View>

            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Nova Reserva</Text>

                        <TouchableOpacity onPress={() => setDatePickerVisible(true)}>
                            <Text style={styles.input}>Data: {data}</Text>
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
                            style={styles.input}
                            placeholder="Responsável"
                            value={responsavel}
                            onChangeText={setResponsavel}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Finalidade"
                            value={finalidade}
                            onChangeText={setFinalidade}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Número de Participantes"
                            value={participantes}
                            onChangeText={setParticipantes}
                            keyboardType="numeric"
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
                            <CustomButton title="Confirmar Reserva" onPress={handleConfirmarReserva} />
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
