import { Link } from "expo-router";
import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function SettingsScreen() {
  return (
      <SafeAreaView style={styles.container}>
        <Text>Settings</Text>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
});