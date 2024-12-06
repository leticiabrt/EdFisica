import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, Modal, Button, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';
import CustomButtonII from '../../components/CustomButtonII';
import { useAuth } from "../../hook/auth";
import { FlatList } from 'react-native-gesture-handler';
import { ITreino } from '../../services/data/Treino';
import { apiReserva, apiTreino } from '../../services/data';
import { AxiosError } from 'axios';
import { MaterialIcons } from '@expo/vector-icons';
import { IReserva } from '../../services/data/Reserva';
import { set } from 'date-fns';

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
  const [modalReservasVisible, setModalReservasVisible] = useState(false);
  const [modalTimesVisible, setModalTimesVisible] = useState(false);
  const [modalCheckinsVisible, setModalCheckinsVisible] = useState(false);
  const [modalNotificacoesVisible, setModalNotificacoesVisible] = useState(false);
  const [modalJustificativaVisible, setModalJustificativaVisible] = useState(false);
  const [justificativaSelecionada, setJustificativaSelecionada] = useState('');
  const [modalEtidarVisible, setModalEtidarVisible] = useState(false);
  const [notificacoes, setNotificacoes] = useState<Notificacao[]>([]);

  const sms = require('../../assets/sms.png');

  /*Lógica de sair e de mostrar os dados*/
  const { user, signOut, loading, setLoading } = useAuth()

  /*Lógica de listar os treinos*/
  const [treino, setTreino] = useState<ITreino[]>([])
  useEffect(() => {
    setLoading(true)
    async function loadMessage() {
      try {
        const response = await apiTreino.mostrarCheckins({ idAluno: user?.data.id })
        console.log(response.data.checkins)
        setTreino(response.data.dados)
      } catch (error) {
        const err = error as AxiosError
        const msg = err.response?.data as string
        console.log(msg)
      }
    }
    setLoading(false)
    loadMessage()
  }, [])

  /*Lógica para cancelar um checkin*/
  async function handleCadReserva(idTreino: string) {
    setLoading(true)
    try {
      await apiTreino.cancelarCheckin({ idAluno: (user?.data.id as unknown as string), idTreino: idTreino })
      Alert.alert("Checkin realizado com sucesso!")
    } catch (error) {
      const err = error as AxiosError
      const msg = err.response?.data as string
      console.log(msg)
    }
    setLoading(false)
  }

  interface itemTreino {
    item: ITreino
  }

  // foreach para percorrer todos treinos que o aluno tem checkin
  const renderItemCheckin = (({ item }: itemTreino) => {
    return (
      <View style={styles.tableDado}>
        <Text style={styles.horarioTabela}>Dia: {item.dia} ({item.horarioInicio} - {item.horarioFim})</Text>
        <Text style={styles.localTabela}>Local: {item.local}</Text>
        <Text style={styles.atividadeTabela}>Atividade: {item.nomeModalidade}</Text>
        <View style={styles.viewLinhaTabela}>
          <TouchableOpacity onPress={() => { handleCadReserva(item.idTreino as unknown as string) }}>
            <Text style={styles.Cancelar}>Cancelar checkin</Text>
          </TouchableOpacity>

          <View style={styles.numeroParticipantes}>
            <MaterialIcons name={"people"} size={25} />
            <Text>{item.vagasOcupadas}/{item.numeroMaximoParticipantes}</Text>
          </View>
        </View>

      </View>
    )

  })

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /*Lógica de listar as reservas*/
  const [reserva, setReserva] = useState<IReserva[]>([])
  useEffect(() => {
    setLoading(true)
    async function loadMessage() {
      const response = await apiReserva.mostrarReservas({idAluno: user?.data.id})
      setReserva(response.data.dados)
    }
    setLoading(false)
    loadMessage()
  }, [])

  interface itemReserva {
    item: IReserva
  }

  // foreach para percorrer todas reservas
  const renderItemReserva = (({ item }: itemReserva) => {
    if (item.local == 'Ginásio' && item.status == 'A') {
      return (
        <View style={styles.tableDado}>
          <Text style={styles.horarioTabela}>Dia: {item.dia} ({item.horarioInicio} - {item.horarioFim})</Text>
          <Text style={styles.finalidadeReserva}>{item.finalidade}</Text>
          <Text style={styles.localReserva}>{item.local}</Text>
        </View>
      )
    } else {
      return (
        <View> </View>
      )
    }
  })
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.teste}>
          <View style={styles.tex}>
            <Text style={styles.texto}>PERFIL</Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => setModalNotificacoesVisible(true)}>
          <Image style={styles.img} source={sms}></Image>
        </TouchableOpacity>
      </View>

      <View style={styles.info}>
        <View style={styles.l}>
          <View style={styles.infos}>
            <Text style={styles.title}>NOME: <Text style={styles.subtitle}>{user?.data.name}</Text></Text>
            <Text style={styles.title}>CURSO: <Text style={styles.subtitle}>{user?.data.turma} {user?.data.curso}</Text></Text>
            <Text style={styles.title}>EMAIL: <Text style={styles.subtitle}>{user?.data.email}</Text></Text>
            <Text style={styles.title}>MATRÍCULA: <Text style={styles.subtitle}>{user?.data.matricula}</Text></Text>
            <Text style={styles.title}>DATA DE NASCIMENTO: <Text style={styles.subtitle}>{user?.data.dtNascimento}</Text></Text>
          </View>
        </View>

        <View style={styles.desc}>
          <View style={styles.caixa}>
            <Text style={styles.title}>Descrição esportiva: </Text>
            <Text style={styles.title}><Text style={styles.subtitle}>{user?.data.descricaoEsportiva}</Text></Text>
          </View>
        </View>

        <View style={styles.botao}>
          <View style={styles.but}>
            <CustomButtonII title="Minhas reservas" onPress={() => setModalReservasVisible(true)} />
          </View>
          <View style={styles.but}>
            <CustomButtonII title="Meus times" onPress={() => setModalTimesVisible(true)} />
          </View>
          <View style={styles.but}>
            <CustomButtonII title="Meus checkins" onPress={() => setModalCheckinsVisible(true)} />
          </View>
          <View style={styles.but}>
            <CustomButtonII title="Editar perfil" onPress={() => setModalEtidarVisible(true)} />
          </View>
          <View style={styles.botaoSair}>
            <TouchableOpacity onPress={signOut}><Text style={styles.botaoSairTexto}>Sair</Text></TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Modal para mostrar as reservas */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalReservasVisible}
        onRequestClose={() => setModalReservasVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ width: '90%', backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Minhas reservas</Text>
            <ScrollView>
              {
                reserva.length > 0 && (
                  <FlatList
                    data={reserva}
                    renderItem={renderItemReserva}
                    keyExtractor={item => String(item.idReserva)}
                  />
                )
              }
            </ScrollView>
            <Button title="Fechar" onPress={() => setModalReservasVisible(false)} />
          </View>

        </View>
      </Modal>

      {/* Modal para mostrar a justificativa da reserva negada */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalJustificativaVisible}
        onRequestClose={() => setModalJustificativaVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ width: '90%', backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Justificativa</Text>
            <Text>{justificativaSelecionada}</Text>
            <Button title="Fechar" onPress={() => setModalJustificativaVisible(false)} />
          </View>
        </View>
      </Modal>

      {/* Modal para mostrar os times */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalTimesVisible}
        onRequestClose={() => setModalTimesVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ width: '80%', backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Meus times</Text>
            <Button title="Fechar" onPress={() => setModalTimesVisible(false)} />
          </View>
        </View>
      </Modal>

      {/* Modal para mostrar os check-ins */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalCheckinsVisible}
        onRequestClose={() => setModalCheckinsVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ width: '90%', backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Meus checkins</Text>
            <ScrollView>
              {
                treino.length > 0 && (
                  <FlatList
                    data={treino}
                    renderItem={renderItemCheckin}
                    keyExtractor={item => String(item.idTreino)}
                  />
                )
              }
            </ScrollView>
            <Button title="Fechar" onPress={() => setModalCheckinsVisible(false)} />
          </View>
        </View>
      </Modal >

      {/* Modal para mostrar as notificações */}
      < Modal
        animationType="slide"
        transparent={true}
        visible={modalNotificacoesVisible}
        onRequestClose={() => setModalNotificacoesVisible(false)}
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
            <Button title="Fechar" onPress={() => setModalNotificacoesVisible(false)} />
          </View>
        </View>
      </Modal >

      {/* Modal para editar o perfil */}
      < Modal
        animationType="slide"
        transparent={true}
        visible={modalEtidarVisible}
        onRequestClose={() => setModalEtidarVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ width: '90%', backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Editar Perfil</Text>
            <Button title="Fechar" onPress={() => setModalEtidarVisible(false)} />
          </View>
        </View>
      </Modal >
    </ScrollView >
  );
};
