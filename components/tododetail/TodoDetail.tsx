import { TodoContext } from "@/data/context/TodoContext";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TodoDetail({ id }: { id: string }) {
  const { todos } = useContext(TodoContext);

  const todo = todos.find((t) => t.id === parseInt(id));
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.paragraph,
          todo?.completed ? styles.paragraphDone : undefined,
        ]}
      >
        {todo?.todo}
      </Text>
      <Text>{todo?.completed ? "Fait" : "A faire"}</Text>
      <Text>UserID : {todo?.userId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    gap: 16,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "bold",
  },
  paragraphDone: {
    textDecorationLine: "line-through",
    fontStyle: "italic",
  },
});
