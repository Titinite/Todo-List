import { ScrollView, StyleSheet } from "react-native";
import TodoCard from "../TodoCard";

export default function TodoList() {
  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.container}>
      <TodoCard title="Apprendre React" completed={true} />
      <TodoCard title="Apprendre React Native" />
      <TodoCard title="Apprendre l'AIDD" />
      <TodoCard title="Apprendre l'Anglais" completed={true} />
      <TodoCard title="Apprendre le Japonais" />
      <TodoCard title="Apprendre le Japonais" />
      <TodoCard title="Apprendre le Japonais" />
      <TodoCard title="Apprendre le Japonais" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    justifyContent: "flex-start",
    backgroundColor: "#CCC",
    padding: 8,
    gap: 20,
  },
});
