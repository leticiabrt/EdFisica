import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ReservationData {
  dia: string;
  horarios: string[];
}

export const Perfil = () => {
  const data: ReservationData[] = [
    { dia: '2024-04-22', horarios: ['09:00', '09:30', '10:00'] },
    { dia: '2024-04-23', horarios: ['09:00', '09:30', '10:00'] },
  ];

  // Função para criar os elementos da tabela
  const renderTableRows = () => {
    let rows = [];
    for (let i = 0; i < data.length; i++) {
      const rowData = data[i];
      const dateCell = (
        <Text key={`date_${i}`} style={[styles.tableCell, styles.dateCell]}>
          {rowData.dia}
        </Text>
      );
      const firstRow = (
        <View key={`row_${i}`} style={styles.tableRow}>
          {dateCell}
          <Text style={styles.tableCell}>{rowData.horarios[0]}</Text>
          <Text style={styles.tableCell}>Disponível</Text>
        </View>
      );
      rows.push(firstRow);
      for (let j = 1; j < rowData.horarios.length; j++) {
        const row = (
          <View key={`row_${i}_${j}`} style={styles.tableRow}>
            <Text style={styles.tableCell}>{rowData.horarios[j]}</Text>
            <Text style={styles.tableCell}>Disponível</Text>
          </View>
        );
        rows.push(row);
      }
    }
    return rows;
  };

  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={styles.tableCell}>Dia</Text>
          <Text style={styles.tableCell}>Horário</Text>
          <Text style={styles.tableCell}>Reserva</Text>
        </View>
        {renderTableRows()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  table: {
    borderWidth: 1,
    borderColor: '#000',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  tableHeader: {
    backgroundColor: '#f0f0f0',
  },
  tableCell: {
    flex: 1,
    padding: 10,
  },
  dateCell: {
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
});








