import { Pressable, Text, View } from "react-native";

export function MainButton() {
    return(
        <View>
            <Pressable>
                <Text>
                    Sobre mim
                </Text>
            </Pressable>

            <Pressable>
                <Text>
                    Entre em contato!
                </Text>
            </Pressable>
        </View>
    )
}