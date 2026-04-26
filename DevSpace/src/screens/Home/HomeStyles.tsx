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

    mainTitle: {
        fontSize: 30,
        fontWeight: 'bold', 
        textAlign: 'center',
    },
    
    text: {
        fontSize: 15,
        textAlign: 'center',
        margin: 16,
        letterSpacing: 3,
       
    },
    container: {
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
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#06B6D4'
    },
    cardsSection: {
        flexDirection: 'row', 
        flexWrap: 'wrap',   
        justifyContent: 'center',
        marginTop: 16, 
        gap: 10,
        marginBottom: 16,           
    },
    stacksCards: {
        backgroundColor: 'rgba(6, 182, 212, 0.15)', 
        color: '#06B6D4', 
        fontSize: 14,
        fontWeight: '700',
        paddingVertical: 12,
        textAlign: 'center',
        width: '45%', 
        borderRadius: 12, 
        borderWidth: 1,
        borderColor: 'rgba(6, 182, 212, 0.4)',
        shadowColor: '#06B6D4',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    }
})