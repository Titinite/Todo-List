import TodoDetail from "@/components/tododetail/TodoDetail";
import { Stack, useLocalSearchParams } from "expo-router";

export default function TodoDetailScreen() {
  const { id } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen
        options={{
          title: `TODO #${id}`,
        }}
      />
      <TodoDetail id={id as string} />
    </>
  );
}
