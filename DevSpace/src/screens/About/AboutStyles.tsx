import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F172A',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    titleContainer:{
        width: '90%',
        paddingBottom: 30
    },
    footerContainer: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    mainTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#F1F5F9'
    },
    text: {
        fontSize: 15,
        color: '#F1F5F9'
    }
})