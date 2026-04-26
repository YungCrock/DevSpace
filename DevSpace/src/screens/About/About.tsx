import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./AboutStyles";
import { Logo } from "../../components/Logo/Logo";
import { Footer } from "../../components/Footer/Footer";
import { MainButton } from "../../components/Button/MainButton";
import { ChangeColor } from "../../components/Button/ChangeColor";

export function About() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const themeContainer = isDarkMode ? styles.bgDark : styles.bgLight;

  const navigation = useNavigation<any>();

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

      <View style={styles.titleContainer}>
        <Text style={[styles.mainTitle, themeText]}>Sobre nós</Text>
      </View>

      <View>
        <Text style={[styles.text, themeText]}>
          Somos dois jovens estudantes de programação, Enzo de Aguiar e Lucas
          Morikawa, movidos pela curiosidade, pela criatividade e pela vontade
          constante de aprender e evoluir no universo da tecnologia.
        </Text>

        <Text style={[styles.text, themeText]}>
          Nossa jornada na programação começou com o interesse em entender como
          as coisas funcionam por trás das telas, e rapidamente se transformou
          em uma paixão por desenvolver soluções digitais. Desde então, temos
          dedicado nosso tempo ao estudo e à prática de tecnologias modernas,
          buscando sempre aprimorar nossas habilidades tanto no front-end quanto
          no back-end.
        </Text>

        <Text style={[styles.text, themeText]}>
          Valorizamos a criação de interfaces intuitivas, responsivas e
          visualmente agradáveis, aliadas a uma estrutura de código organizada,
          eficiente e de fácil manutenção. Acreditamos que um bom sistema não é
          apenas aquele que funciona, mas aquele que proporciona uma experiência
          fluida e agradável para o usuário.
        </Text>

        <Text style={[styles.text, themeText]}>
          Ao longo da nossa trajetória, temos trabalhado em projetos acadêmicos
          e pessoais que nos desafiam a pensar de forma lógica, resolver
          problemas reais e aplicar boas práticas de desenvolvimento. Cada
          projeto é uma oportunidade de crescimento, onde buscamos não apenas
          entregar resultados, mas também aprender algo novo.
        </Text>

        <Text style={[styles.text, themeText]}>
          Estamos sempre atentos às tendências do mercado de tecnologia,
          explorando novas ferramentas, frameworks e metodologias que possam
          agregar valor ao nosso trabalho. Nosso objetivo é evoluir
          constantemente como desenvolvedores e construir soluções cada vez mais
          completas e impactantes.
        </Text>

        <Text style={[styles.text, themeText]}>
          Mais do que escrever código, queremos criar experiências digitais que
          façam sentido, que sejam úteis e que realmente atendam às necessidades
          das pessoas. Esse é o propósito que guia nosso aprendizado e nossa
          dedicação diária.
        </Text>
      </View>

      <View>
        <ChangeColor onColorChange={() => setIsDarkMode(!isDarkMode)} />
      </View>

      <View>
        <MainButton
          title="Página inicial"
          onPress={() => navigation.navigate("Home")}
        />
      </View>

      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </ScrollView>
  );
}
