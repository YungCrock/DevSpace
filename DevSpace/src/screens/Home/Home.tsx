import React from "react";
import { View, Text } from "react-native";

import { Logo } from "../../components/Logo/Logo";
import { MainButton } from "../../components/Button/MainButton";

import { styles } from "./HomeStyles";
import { Footer } from "../../components/Footer/Footer";

export function Home() {
  return (
    <View style={styles.container}>
      <View>
        <Logo />
      </View>

      <View style={styles.subContainer}>
        <Text style={styles.mainTitle}>
          Eleve seu negócio digital a outro nível
        </Text>

        <Text style={styles.secondaryTitle}>
          com um Front-end de qualidade!
        </Text>
      </View>

      <View style={styles.subContainer}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam iste,
          blanditiis perferendis aperiam assumenda sapiente veniam maiores modi
          corporis ratione voluptatem molestiae ab enim officia sint esse
          deleniti vel. Culpa.
        </Text>
      </View>

      

      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </View>
  );
}
