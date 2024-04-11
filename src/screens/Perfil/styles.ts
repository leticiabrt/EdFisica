import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalstyles"

export const styles = StyleSheet.create({
    fundo:{
        flex: 1,
        backgroundColor: colors.white,
    }, 
    
    image: {
        width: 250,
        height: 180,
        borderRadius: 15,
    },
    texto: {
        fontSize: 25
    },
    ativado:{
        backgroundColor: 'white'
    },
    desativado:{
        backgroundColor: 'black'
    },
    centralizar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
})