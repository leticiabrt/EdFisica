import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalstyles"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cefet: {
        backgroundColor: colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 150,
    },
    header: {
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 70,
    },
    
    texto: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 20,
    },
    image: {
        width: 150,
        height: 116.
    },
    image2: {
        width: 380,
        height: 47,
    },
    image3: {
        width: 50,
        height: 50,
    },
    image4: {
        width: 60,
        height: 50,
    },
    images: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end'
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center',
    },


    but: {
        margin: 10,
        width: 200,
    },

    footer: {
        marginBottom: 5,
    }


})