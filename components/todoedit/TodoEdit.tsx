import { Stack } from "expo-router";
import { Text } from "react-native";

export default function TodoEdit() {
  return (
    <>
      <Stack.Screen
        options={{ title: "Créer une TODO", headerBackTitle: "Retour" }}
      />
      <Text>Section à faire : édition une TODO</Text>
    </>
  );
}
