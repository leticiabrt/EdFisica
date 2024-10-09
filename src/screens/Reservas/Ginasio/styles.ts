import { StyleSheet } from "react-native";
import { colors } from "../../../styles/globalstyles"


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  ajuste: {
    padding: 16,
  },
  header: {
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
        
  },
  texto: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  cell: {
    fontSize: 16,
    color: '#333',
  },
  cellReservado: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    paddingVertical: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  bot:{
    marginBottom: 10,
  },
  text:{
    fontWeight: 'bold',
    fontSize: 17,
  },
  textt: {
    margin: 10,
    fontSize: 14,
  }
});
