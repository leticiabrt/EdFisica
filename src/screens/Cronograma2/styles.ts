import { StyleSheet } from 'react-native';
import { colors } from '../../styles/globalstyles';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f7', // Fundo suave
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
    scrollContainer: {
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        marginBottom: 15,
        shadowColor: '#000', // Sombra
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3, // Para sombra no Android
    },
    dateText: {
        fontSize: 16,
        color: '#6b7280', // Cor suave para data
        marginBottom: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    detail: {
        fontSize: 16,
        marginBottom: 5,
        color: '#374151',
    },
    location: {
        fontSize: 14,
        color: '#9ca3af', // Cinza mais claro para localização
        marginBottom: 5,
    },
    responsible: {
        fontSize: 14,
        color: '#4b5563', // Cor diferenciada para o responsável
    },
    data: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    }
});
