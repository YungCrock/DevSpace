import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    bgDark: { backgroundColor: '#0F172A' },
    bgLight: { backgroundColor: '#F1F5F9' },

    mainTitleColorDark: { color: '#F1F5F9' },
    mainTitleColorLight: { color: '#0F172A' },
    secondaryTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#06B6D4' 
    },
    container: {
        backgroundColor: '#0F172A',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    titleContainer:{
        width: '90%',
        paddingBottom: 30
    },
    footerContainer: {
        width: '100%',
        alignItems: 'flex-start',
    },
    mainTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#F1F5F9'
    },
    text: {
        fontFamily: 'Inter-Regular',
        fontSize: 15,
        textAlign: 'left',
        margin: 10
    }
})