import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalstyles"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    tela: {
        flex: 1
    },
    cefet: {
        backgroundColor: colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 150,
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
        
    },
    text: {
        textAlign: 'center',
        margin: 5,
        fontSize: 15
    },


    but: {
        margin: 10,
    },

    footer: {
        margin: 15,

    },
    input: {
        height: 50, 
        width: "60%",
        borderRadius: 20,
        margin: 20,
        marginBottom: 5,
        marginTop: 10,
        backgroundColor: colors.gray,
        elevation: 10,
        padding: 5
    },
    login: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        textAlign: 'center',
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: 'bold',
        padding: 20,
    },
    header: {
        position: 'relative',
        backgroundColor: colors.secondary,
        borderColor: colors.primary,
        borderTopWidth: 10,
        borderBottomWidth: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
      },
      educacao: {
        fontSize: 40,
        color: colors.primary,
        fontWeight: 'bold',
      },
      fisica: {
        fontSize: 40,
        fontFamily: 'Open Sans', 
        fontWeight: 'bold',
        color: colors.secondary, // Cor do texto principal
        textShadowColor: colors.primary, // Cor da borda
        textShadowOffset: { width: -1, height: -1 }, // Offset da sombra
        textShadowRadius: 1,
        
      },
      fisica2: {
        position: "absolute",
        right: 15,
        fontSize: 40,
        fontFamily: 'Open Sans', 
        fontWeight: 'bold',
        color: colors.secondary, // Cor do texto principal
        textShadowColor: colors.primary, // Cor da borda
        textShadowOffset: { width: 1, height: 1 }, // Offset da sombra
        textShadowRadius: 1,
        
      },



})