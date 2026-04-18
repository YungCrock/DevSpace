import React from "react"
import { View, Image } from "react-native";
import logo from "../../../assets/devspacelogo.png"

export function Logo() {
    return(
        <View>
            <Image
                source={logo}
            />
        </View>
    )
}