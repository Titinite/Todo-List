import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface TodoCardProps {
  title: string;
  completed?: boolean;
}

export default function TodoCard({ title, completed }: TodoCardProps) {
  const [isCompleted, setIsCompleted] = useState(completed);
  return (
    <Pressable onPress={() => setIsCompleted(!isCompleted)}>
      <View
        style={[
          styles.container,
          isCompleted ? styles.containerCompleted : undefined,
        ]}
      >
        <Text
          style={[
            styles.title,
            isCompleted ? styles.titleCompleted : undefined,
          ]}
        >
          {title}
        </Text>
        <Text style={styles.paragraph}>{isCompleted ? "Fait" : "A faire"}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 25,
    borderRadius: 25,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  containerCompleted: {
    backgroundColor: "#fff5",
  },
  title: {
    marginBottom: 24,
    fontSize: 18,
    fontWeight: "bold",
  },
  titleCompleted: {
    textDecorationLine: "line-through",
    fontStyle: "italic",
  },
  paragraph: {
    fontSize: 14,
    fontWeight: "500",
  },
});
