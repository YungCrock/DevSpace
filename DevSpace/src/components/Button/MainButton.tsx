import { Pressable, Text, View } from "react-native";

import { styles } from "./MainButtonStyles";

export function MainButton() {
    return(
        <View>
            <Pressable
                style={({ pressed }) => [styles.button, pressed && styles.pressedStyle, pressed && { transform: [{ scale: 0.97}] } ]}
            >
                <Text style={styles.text}>
                    Sobre mim
                </Text>
            </Pressable>

            <Pressable
                style={({ pressed }) => [styles.button, pressed && styles.pressedStyle, pressed && { transform: [{ scale: 0.97}] } ]}
            >
                <Text style={styles.text}>
                    Entre em contato!
                </Text>
            </Pressable>
        </View>
    )
}