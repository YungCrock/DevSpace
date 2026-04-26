import React, { useState } from "react";
import { View, Text, ScrollView  } from "react-native";
import { Logo } from "../../components/Logo/Logo";
import { MainButton } from "../../components/Button/MainButton";
import { styles } from "./HomeStyles";
import { Footer } from "../../components/Footer/Footer";
import { ChangeColor } from "../../components/Button/ChangeColor";


export function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const themeContainer = isDarkMode ? styles.bgDark : styles.bgLight;

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
        <MainButton />
      </View>

      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </ScrollView>
  );
}
