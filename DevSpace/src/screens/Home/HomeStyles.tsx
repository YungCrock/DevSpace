import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F172A',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth: 3,
    },
    footerContainer: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    subContainer: {
        marginBottom: 30
    },
    mainTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#F1F5F9'
    },
    secondaryTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#06B6D4'
    },
    text: {
        fontSize: 15,
        color: '#F1F5F9'
    },
})