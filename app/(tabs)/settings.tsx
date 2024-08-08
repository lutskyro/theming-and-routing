import { Link } from "expo-router";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { useHoneycombBackground } from "../../hooks/useHoneycombBackground";

export default function SettingsScreen() {
  const honeycombBackground = useHoneycombBackground();
  return (
      <SafeAreaView style={styles.container}>
        {honeycombBackground}
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