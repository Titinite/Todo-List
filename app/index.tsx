import { StyleSheet, View } from "react-native";
import Card from "../components/Card";

export default function App() {
  return (
    <View style={styles.container}>
      <Card title="Apprendre React" isFinished={true} />
      <Card title="Apprendre React Native" isFinished={false} />
      <Card title="Apprendre l'AIDD" isFinished={false} />
      <Card title="Apprendre l'Anglais" isFinished={true} />
      <Card title="Apprendre le Japonais" isFinished={false} />
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
