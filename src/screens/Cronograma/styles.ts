import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalstyles"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        width: 400,
        height: 40,
    },

    texto: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 20,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    table: {
        flex: 1,
        padding: 10,
        backgroundColor: colors.gray,
        margin: 10,
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
        borderColor: colors.black,
        
    },
    cell: {
        flex: 1,
        padding: 10,
        borderWidth: 1,

        textAlign: 'center',
        width: 120,
    },
    text:{
        flex: 1,
        padding: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 17,
        borderWidth: 1,
        width: 120,
      },

})