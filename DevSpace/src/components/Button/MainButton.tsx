import { Pressable, Text, View } from "react-native";
import { styles } from "./MainButtonStyles";

type MainButtonProps = {
  title?: string;
  onPress?: () => void;
};

export function MainButton({ title, onPress }: MainButtonProps) {

  return (
    <View>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.pressedStyle,
          pressed && { transform: [{ scale: 0.97 }] },
        ]}
      >
        {title && <Text style={styles.text}>{title}</Text>}
      </Pressable>
    </View>
  );
}
