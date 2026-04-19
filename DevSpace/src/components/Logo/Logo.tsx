import React from "react"
import { View, Image, Text } from "react-native";
import devLogo from "../../../assets/devspacelogo.png"
import { styles } from "./LogoStyles";

export function Logo() {
    return(
        <View>
            <Image
                source={devLogo}
                style={styles.logo}
            />
        </View>
    )
}