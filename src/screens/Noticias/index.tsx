import { ImageBackground, View, Text, Image } from "react-native";
import { styles } from "./styles"
import { styleContainer } from "../../styles/globalstyles"


export function Noticias() {
    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.texto}>NOTÍCIAS</Text>
            </View>
            <View style={styles.noticias}>
                <View style={styles.caixa}>
                    <Text>Notícia 1</Text>
                </View>
                <View style={styles.caixa}>
                    <Text>Notícia 2</Text>
                </View>
                <View style={styles.caixa}>
                    <Text>Notícia 3</Text>
                </View>
            </View>
        </View>

    )
}
