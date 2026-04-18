import React from "react";
import { View, Text } from "react-native";

import { Logo } from "../../components/Logo/Logo";
import { MainButton } from "../../components/Button/MainButton";

import { styles } from './HomeStyles';

export function Home() {
    return(
        <View style={styles.container}>

            <View style={styles.logoContainer}>
                <Logo/>
            </View>

            <View>
                <Text style={styles.mainTitle}>
                    Eleve seu negócio digital a outro nível
                </Text>

                <Text style={styles.secondaryTitle}>
                    com um Front-end de qualidade!
                </Text>
            </View>

            <View>
                <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam iste, blanditiis perferendis aperiam assumenda sapiente veniam maiores modi corporis ratione voluptatem molestiae ab enim officia sint esse deleniti vel. Culpa.
                </Text>
            </View>

            <View>
                <MainButton/>
            </View>
            
        </View>
    )
}