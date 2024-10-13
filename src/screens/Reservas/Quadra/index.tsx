import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, TextInput, Button, Switch } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from "./styles";
import { ButtonSlide } from "../../../components/ButtonSlide";
import CustomButton from "../../../components/CustomButton";

export function Quadra({ setPageI }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [horaFim, setHoraFim] = useState('');
  const [responsavel, setResponsavel] = useState('');
  const [finalidade, setFinalidade] = useState('');
  const [participantes, setParticipantes] = useState('');
  const [concorda, setConcorda] = useState(false);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [reservas, setReservas] = useState([]);
  const [filtroData, setFiltroData] = useState('');

  const handleConfirmarReserva = () => {
    if (data && horaInicio && horaFim && responsavel && finalidade && participantes && concorda) {
      const novaReserva = { data, horaInicio, horaFim, responsavel, finalidade, participantes };
      setReservas([...reservas, novaReserva]);
      setModalVisible(false);
    } else {
      alert("Preencha todos os campos e concorde com as regras de uso.");
    }
  };

  const handleCancelarReserva = (index) => {
    setReservas(reservas.filter((_, i) => i !== index));
  };

  const handleChangeData = (event, selectedDate) => {
    const currentDate = selectedDate || data;
    setDatePickerVisible(false);
    setData(currentDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }));
  };

  const handleChangeHoraInicio = (event, selectedTime) => {
    const currentTime = selectedTime || horaInicio;
    setTimePickerVisible(false);
    setHoraInicio(currentTime.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }));
  };

  const handleChangeHoraFim = (event, selectedTime) => {
    const currentTime = selectedTime || horaFim;
    setTimePickerVisible(false);
    setHoraFim(currentTime.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }));
  };

  const filteredReservas = filtroData
    ? reservas.filter(reserva => reserva.data === filtroData)
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
              {/* Cabeçalho da tabela renderizado uma vez */}
              <View style={styles.row}>
                <Text style={styles.text}>Data</Text>
                <Text style={styles.text}>Horário</Text>
                <Text style={styles.text}>Respons.</Text>
                <Text style={styles.text}>Ação</Text>
              </View>

              {/* Listagem das reservas filtradas */}
              {filteredReservas.map((reserva, index) => (
                <View key={index}>
                  <View style={styles.row}>
                    <Text style={styles.cell}>{reserva.data}</Text>
                    <Text style={styles.cell}>{reserva.horaInicio} - {reserva.horaFim}</Text>
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

            <TouchableOpacity onPress={() => setTimePickerVisible(true)}>
              <Text style={styles.input}>Hora Início: {horaInicio}</Text>
            </TouchableOpacity>
            {isTimePickerVisible && (
              <DateTimePicker value={new Date()} mode="time" display="default" onChange={handleChangeHoraInicio} />
            )}

            <TouchableOpacity onPress={() => setTimePickerVisible(true)}>
              <Text style={styles.input}>Hora Fim: {horaFim}</Text>
            </TouchableOpacity>
            {isTimePickerVisible && (
              <DateTimePicker value={new Date()} mode="time" display="default" onChange={handleChangeHoraFim} />
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
