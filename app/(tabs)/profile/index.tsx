import Profile from "@/components/profile/Profile";
import { Stack } from "expo-router";

export default function ProfileScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Profil",
        }}
      />
      <Profile />
    </>
  );
}
