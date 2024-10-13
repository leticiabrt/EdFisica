import React, { useState } from 'react';
import { View, Text, Image, TextInput, Modal, Button, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import CustomButtonII from '../../components/CustomButtonII';

// Define o tipo para as notificações
type Notificacao = {
  id: number;
  mensagem: string;
};

// Define o tipo para reservas
type Reserva = {
  id: number;
  data: string;
  hora: string;
  status: string;
  justificativa?: string; // Adiciona a justificativa como opcional
};

export const Perfil = () => {
  const [texto, setTexto] = useState('');
  const [modalReservasVisible, setModalReservasVisible] = useState(false);
  const [modalTimesVisible, setModalTimesVisible] = useState(false);
  const [modalCheckinsVisible, setModalCheckinsVisible] = useState(false);
  const [modalNotificacoesVisible, setModalNotificacoesVisible] = useState(false);
  const [modalJustificativaVisible, setModalJustificativaVisible] = useState(false);
  const [justificativaSelecionada, setJustificativaSelecionada] = useState('');

  const [notificacoes, setNotificacoes] = useState<Notificacao[]>([]);

  const reservas: Reserva[] = [
    { id: 1, data: '16/10', hora: '14:00', status: 'Aceita' },
    { id: 2, data: '17/10', hora: '10:00', status: 'Negada', justificativa: 'Conflito de horários' },
    { id: 3, data: '18/10', hora: '16:00', status: 'Aceita' },
  ];

  const times = [
    { id: 1, competicao: 'Intercampi', esporte: 'Futebol' },
    { id: 2, competicao: 'JEMG', esporte: 'Handebol' },
    { id: 3, competicao: 'Intercampi', esporte: 'Vôlei' },
  ];

  const initialCheckins = [
    { id: 1, data: '16/10', hora: '14:00', atividade: 'Futebol', status: 'Confirmado' },
    { id: 2, data: '17/10', hora: '10:00', atividade: 'Vôlei', status: 'Confirmado' },
    { id: 3, data: '18/10', hora: '16:00', atividade: 'Basquete', status: 'Confirmado' },
  ];

  const [checkins, setCheckins] = useState(initialCheckins);

  const handlePressReservas = () => {
    setModalReservasVisible(true);
  };

  const handlePressTimes = () => {
    setModalTimesVisible(true);
  };

  const handlePressCheckins = () => {
    setModalCheckinsVisible(true);
  };

  const handlePressNotificacoes = () => {
    setModalNotificacoesVisible(true);
  };

  const closeModalReservas = () => {
    setModalReservasVisible(false);
  };

  const closeModalTimes = () => {
    setModalTimesVisible(false);
  };

  const closeModalCheckins = () => {
    setModalCheckinsVisible(false);
  };

  const closeModalNotificacoes = () => {
    setModalNotificacoesVisible(false);
  };

  const closeModalJustificativa = () => {
    setModalJustificativaVisible(false);
    setJustificativaSelecionada('');
  };

  const cancelarCheckin = (id: number) => {
    const checkin = checkins.find((checkin) => checkin.id === id);
    if (checkin) {
      setCheckins((prevCheckins) =>
        prevCheckins.map((checkin) => {
          if (checkin.id === id) {
            return { ...checkin, status: 'Cancelado' };
          }
          return checkin;
        })
      );

      setNotificacoes((prevNotificacoes) => [
        ...prevNotificacoes,
        { id: Date.now(), mensagem: `Check-in de ${checkin.atividade} cancelado` },
      ]);
    }
  };

  const perfil = require('../../assets/perfil.png');
  const sms = require('../../assets/sms.png');
  const plusIcon = require('../../assets/plus.png'); // Ícone de mais para justificar a reserva

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.teste}>
          <View style={styles.tex}>
            <Text style={styles.texto}>PERFIL</Text>
          </View>
        </View>

        <TouchableOpacity onPress={handlePressNotificacoes}>
          <Image style={styles.img} source={sms}></Image>
        </TouchableOpacity>
      </View>

      <View style={styles.info}>
        <View style={styles.l}>
          <Image source={perfil}></Image>
          <View style={styles.infos}>
            <Text style={styles.title}>NOME: </Text>
            <Text style={styles.title}>TURMA: </Text>
            <Text style={styles.title}>CURSO: </Text>
          </View>
        </View>

        <View style={styles.desc}>
          <View style={styles.caixa}>
            <Text style={styles.title}>Descrição esportiva: </Text>
            <TextInput
              value={texto}
              onChangeText={setTexto}
              placeholder="Digite aqui"
              style={{ height: 200, borderColor: 'black', borderWidth: 1, padding: 5 }}
            />
          </View>
        </View>

        <View style={styles.botao}>
          <View style={styles.but}>
            <CustomButtonII title="Reservas" onPress={handlePressReservas} />
          </View>
          <View style={styles.but}>
            <CustomButtonII title="Times" onPress={handlePressTimes} />
          </View>
          <View style={styles.but}>
            <CustomButtonII title="Checkins" onPress={handlePressCheckins} />
          </View>
        </View>
      </View>

      {/* Modal para mostrar as reservas */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalReservasVisible}
        onRequestClose={closeModalReservas}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ width: '80%', backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Reservas</Text>
            {reservas.map((reserva) => (
              <>
                <View key={reserva.id} style={{ marginBottom: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <View>
                    <Text>Data: {reserva.data}</Text>
                    <Text>Hora: {reserva.hora}</Text>
                    <Text>Status: {reserva.status}</Text>
                  </View>
                  <View>
                    {reserva.status === 'Negada' && (
                      <TouchableOpacity onPress={() => {
                        setJustificativaSelecionada(reserva.justificativa!);
                        setModalJustificativaVisible(true);
                      }}>
                        <Image source={plusIcon} style={{ width: 30, height: 30 }} />
                      </TouchableOpacity>
                    )}

                  </View>
                </View>
                <View style={{ height: 1, backgroundColor: 'black', marginVertical: 5 }} />
              </>

            ))}
            <Button title="Fechar" onPress={closeModalReservas} />
          </View>
        </View>
      </Modal>

      {/* Modal para mostrar a justificativa da reserva negada */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalJustificativaVisible}
        onRequestClose={closeModalJustificativa}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ width: '80%', backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Justificativa</Text>
            <Text>{justificativaSelecionada}</Text>
            <Button title="Fechar" onPress={closeModalJustificativa} />
          </View>
        </View>
      </Modal>

      {/* Modal para mostrar os times */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalTimesVisible}
        onRequestClose={closeModalTimes}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ width: '80%', backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Times</Text>
            {times.map((time) => (
              <View key={time.id} style={{ marginBottom: 10 }}>
                <Text>Competição: {time.competicao}</Text>
                <Text>Esporte: {time.esporte}</Text>
                <View style={{ height: 1, backgroundColor: 'black', marginVertical: 5 }} />
              </View>
            ))}
            <Button title="Fechar" onPress={closeModalTimes} />
          </View>
        </View>
      </Modal>

      {/* Modal para mostrar os check-ins */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalCheckinsVisible}
        onRequestClose={closeModalCheckins}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ width: '90%', backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Check-ins</Text>
            <ScrollView>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Data</Text>
                <Text style={{ fontWeight: 'bold' }}>Hora</Text>
                <Text style={{ fontWeight: 'bold' }}>Atividade</Text>
                <Text style={{ fontWeight: 'bold' }}>Cancelar</Text>
              </View>
              {checkins.map((checkin) => (
                <View key={checkin.id} style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                  <Text>{checkin.data}</Text>
                  <Text>{checkin.hora}</Text>
                  <Text>{checkin.atividade}</Text>
                  <View style={{ alignItems: 'flex-end' }}>
                    {checkin.status === 'Confirmado' ? (
                      <Button title="Cancelar" onPress={() => cancelarCheckin(checkin.id)} />
                    ) : (
                      <Text style={{textAlign: 'center'}}>Check-in cancelado</Text>
                    )}
                  </View>
                </View>
              ))}
            </ScrollView>
            <Button title="Fechar" onPress={closeModalCheckins} />
          </View>
        </View>
      </Modal>

      {/* Modal para mostrar as notificações */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalNotificacoesVisible}
        onRequestClose={closeModalNotificacoes}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ width: '80%', backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Notificações</Text>
            {notificacoes.length > 0 ? (
              notificacoes.map((notificacao) => (
                <View key={notificacao.id} style={{ marginBottom: 10 }}>
                  <Text>{notificacao.mensagem}</Text>
                  <View style={{ height: 1, backgroundColor: 'black', marginVertical: 5 }} />
                </View>
              ))
            ) : (
              <Text>Nenhuma notificação</Text>
            )}
            <Button title="Fechar" onPress={closeModalNotificacoes} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
