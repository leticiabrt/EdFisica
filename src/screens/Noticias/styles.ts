import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalstyles"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
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

    caixa: {
        backgroundColor: colors.gray,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
    },
    
    noticias: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        flexDirection: 'column',
        paddingStart: 20,
        paddingRight: 20,
    },

    
})