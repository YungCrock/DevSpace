import React, { useState } from "react";
import { View, Text, ScrollView, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Logo } from "../../components/Logo/Logo";
import { MainButton } from "../../components/Button/MainButton";
import { styles } from "./HomeStyles";
import { Footer } from "../../components/Footer/Footer";
import { ChangeColor } from "../../components/Button/ChangeColor";

export function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const themeContainer = isDarkMode ? styles.bgDark : styles.bgLight;

  const navigation = useNavigation<any>();

  const url = "https://linktr.ee/DevSpace";

  const handlePress = async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log("Não foi possível abrir o link: " + url);
    }
  }

  const themeText = isDarkMode
    ? styles.mainTitleColorDark
    : styles.mainTitleColorLight;

  return (
    <ScrollView
      style={[themeContainer, { flex: 1 }]}
      contentContainerStyle={[styles.container, themeContainer]}
    >
      <View>
        <Logo />
      </View>

      <View style={styles.subContainer}>
        <Text style={[styles.mainTitle, themeText]}>
          Eleve seu negócio digital a outro nível
        </Text>

        <Text style={styles.secondaryTitle}>
          com um Front-end de qualidade!
        </Text>
      </View>

      <View style={styles.subContainer}>
        <Text style={[styles.text, themeText]}>
          A união entre Enzo Aguiar e Lucas Morikawa foca em transformar
          conceitos em interfaces de alto impacto. Combinamos o desenvolvimento
          front-end moderno com uma arquitetura técnica sólida para entregar
          projetos que alinham código limpo, performance e navegação fluida.
        </Text>
      </View>

      <View>
        <Text style={styles.sectionTitle}>Nossas Stacks</Text>
        <View style={styles.cardsSection}>
          <Text style={styles.stacksCards}>REACT</Text>
          <Text style={styles.stacksCards}>Spring Boot</Text>
          <Text style={styles.stacksCards}>Java</Text>
          <Text style={styles.stacksCards}>Angular</Text>
        </View>
        <ChangeColor onColorChange={() => setIsDarkMode(!isDarkMode)} />
      </View>

      <View>
        <MainButton
          title="Sobre nós"
          onPress={() => navigation.navigate("About")}
        />

        <MainButton 
          title="Nossos Links" 
          onPress={handlePress} 
        />
      </View>

      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </ScrollView>
  );
}
