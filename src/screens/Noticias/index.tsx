import { View, Text, ScrollView } from "react-native";
import { styles } from "./styles"

export function Noticias() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.texto}>NOTÍCIAS</Text>
            </View>
            <ScrollView style={styles.noticias}>
                <View style={styles.caixa}>
                    <Text style={styles.tituloNoticia}>Reta Final do Intercurso de Futsal!</Text>
                    <Text style={styles.textoNoticia}>
                        Estamos na reta final do Intercurso de Futsal! Essa semana encerraremos a 6ª rodada e, em duas semanas, será a grande final. E aí, para quem vai sua torcida? Prepare-se, pois grandes emoções vêm por aí!
                    </Text>
                </View>

                <View style={styles.caixa}>
                    <Text style={styles.tituloNoticia}>Intercurso de Vôlei Misto - Monte Seu Time!</Text>
                    <Text style={styles.textoNoticia}>
                        No dia 19/10, teremos o Intercurso de Vôlei, modalidade mista, a partir das 8h no nosso ginásio. Monte seu time e entregue a ficha de inscrição para o Diretor de Esportes, Thiago Lucas (2º ano Informática). Participe e venha torcer pelo seu time favorito!
                    </Text>
                </View>

                <View style={styles.caixa}>
                    <Text style={styles.tituloNoticia}>Competição de Orientação na Semana C&T!</Text>
                    <Text style={styles.textoNoticia}>
                        Durante a Semana C&T, no dia 17/10, a professora Gabriela promoverá uma competição de orientação às 8h. Venha participar desta divertida competição de habilidades e estratégia! Inscreva-se através do formulário online e venha fazer parte dessa atividade que une esporte e raciocínio.
                    </Text>
                </View>

                <View style={styles.caixa}>
                    <Text style={styles.tituloNoticia}>Copa Azimute: Evento de Orientação no CEFET</Text>
                    <Text style={styles.textoNoticia}>
                        A Copa Azimute, uma competição de orientação que mistura velocidade, inteligência e contato com a natureza, está agitando a comunidade! Com mais de 150 competidores esperados, o evento será uma grande oportunidade para aprender e superar limites. As inscrições são gratuitas e podem ser feitas individualmente ou em grupo. Vamos juntos nessa nova aventura!
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}
