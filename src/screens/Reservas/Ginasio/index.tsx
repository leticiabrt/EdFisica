import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, TextInput, Switch } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from "./styles";
import { ButtonSlide } from "../../../components/ButtonSlide";
import CustomButton from "../../../components/CustomButton";

export function Ginasio({ setPageI }) {
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

  const handleConfirmarReserva = () => {
    if (data && horaInicio && horaFim && responsavel && finalidade && participantes && concorda) {
      const novaReserva = { data, horaInicio, horaFim, responsavel, finalidade, participantes };
      setReservas([...reservas, novaReserva]);
      setModalVisible(false);
    } else {
      alert("Preencha todos os campos e concorde com as regras de uso.");
    }
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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.texto}>RESERVAS</Text>
      </View>
      <View style={styles.botoes}>
        <ButtonSlide title="Ginásio" onPressI={() => setPageI(2)} cor={true} />
        <ButtonSlide title="Quadra" onPressI={() => setPageI(1)} cor={false} />
      </View>

      <View style={styles.ajuste}>
        <View style={styles.table}>
          {reservas.length === 0 ? (
            <Text style={styles.textt}>Nenhuma reserva registrada</Text>
          ) : (
            reservas.map((reserva, index) => (
              <View >
                <View style={styles.row}>
                  <Text style={styles.text}>Data</Text>
                  <Text style={styles.text}>Horário</Text>
                  <Text style={styles.text}>Responsável</Text>
                </View>
                <View style={styles.row} key={index}>
                  <Text style={styles.cell}>{reserva.data}</Text>
                  <Text style={styles.cell}>{reserva.horaInicio} - {reserva.horaFim}</Text>
                  <Text style={styles.cell}>{reserva.responsavel}</Text>
                </View>
              </View>

            ))
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
