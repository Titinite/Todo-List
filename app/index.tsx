import { StyleSheet, View } from "react-native";
import TodoCard from "../components/TodoCard";

export default function App() {
  return (
    <View style={styles.container}>
      <TodoCard title="Apprendre React" completed={true} />
      <TodoCard title="Apprendre React Native" />
      <TodoCard title="Apprendre l'AIDD" />
      <TodoCard title="Apprendre l'Anglais" completed={true} />
      <TodoCard title="Apprendre le Japonais" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#CCC",
    padding: 8,
    gap: 20,
  },
});
