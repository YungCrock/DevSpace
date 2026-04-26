import { Pressable, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native'; 
import { styles } from "./MainButtonStyles";

export function MainButton() {
    const navigation = useNavigation<any>(); 

    return(
        <View>
            <Pressable
                onPress={() => navigation.navigate('About')} 
                style={({ pressed }) => [
                    styles.button, 
                    pressed && styles.pressedStyle, 
                    pressed && { transform: [{ scale: 0.97}] } 
                ]}
            >
                <Text style={styles.text}>Sobre mim</Text>
            </Pressable>

            <Pressable
                onPress={() => navigation.navigate('Contato')}
                style={({ pressed }) => [
                    styles.button, 
                    pressed && styles.pressedStyle, 
                    pressed && { transform: [{ scale: 0.97}] } 
                ]}
            >
                <Text style={styles.text}>Entre em contato!</Text>
            </Pressable>
        </View>
    )
}