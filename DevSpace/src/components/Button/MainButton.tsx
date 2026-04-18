import { Pressable, Text, View } from "react-native";

import { styles } from "./MainButtonStyles";

export function MainButton() {
    return(
        <View>
            <Pressable
                style={({ pressed }) => [styles.button, pressed && styles.pressedStyle, pressed && { transform: [{ scale: 0.97}] } ]}
            >
                <Text>
                    Sobre mim
                </Text>
            </Pressable>

            <Pressable
                style={({ pressed }) => [styles.button, pressed && styles.pressedStyle, pressed && { transform: [{ scale: 0.97}] } ]}
            >
                <Text>
                    Entre em contato!
                </Text>
            </Pressable>
        </View>
    )
}