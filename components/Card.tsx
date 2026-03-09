import { StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  isFinished: boolean;
};

export default function CardTodo({ title, isFinished }: Props) {
  const description = isFinished ? "Fait" : "A faire";
  return (
    <View style={[styles.container, isFinished && styles.containerFinished]}>
      <Text style={[styles.title, isFinished && styles.titleFinished]}>
        {title}
      </Text>
      <Text style={styles.paragraph}>{description}</Text>
    </View>
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
  containerFinished: {
    backgroundColor: "#fff5",
  },
  title: {
    marginBottom: 24,
    fontSize: 18,
    fontWeight: "bold",
  },
  titleFinished: {
    textDecorationLine: "line-through",
  },
  paragraph: {
    fontSize: 14,
    fontWeight: "500",
  },
});
