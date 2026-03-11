import * as Device from "expo-device";
import { StyleSheet, Text, View } from "react-native";

export default function Profile() {
  const formatMemory = (bytes: number | null) => {
    if (!bytes) return "Inconnu";
    const gb = bytes / 1024 / 1024 / 1024;
    return `${gb.toFixed(1)} GB`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mon Appareil</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Nom</Text>
        <Text style={styles.value}>{Device.deviceName ?? "Inconnu"}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Marque</Text>
        <Text style={styles.value}>{Device.brand ?? "Inconnu"}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Modèle</Text>
        <Text style={styles.value}>{Device.modelName ?? "Inconnu"}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>OS</Text>
        <Text style={styles.value}>
          {`${Device.osName} ${Device.osVersion}`}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Mémoire Totale</Text>
        <Text style={styles.value}>{formatMemory(Device.totalMemory)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#ecf0f1",
    gap: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  row: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 14,
    color: "#888",
    fontWeight: "500",
  },
  value: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
});
