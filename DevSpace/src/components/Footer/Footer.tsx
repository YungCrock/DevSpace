import React from "react";
import { View, Text } from "react-native";

import { styles } from "./FooterStyles";

export function Footer() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Desenvolvido por Enzo e Lucas
            </Text>
        </View>
    )
}