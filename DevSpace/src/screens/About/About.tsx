import React from "react";
import { View, Text } from "react-native";

import { styles } from "./AboutStyles";
import { Logo } from "../../components/Logo/Logo";
import { Footer } from "../../components/Footer/Footer";

export function About() {
  return (
    <View style={styles.container}>
      <View>
        <Logo />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>Sobre mim</Text>
      </View>

      <View>
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
