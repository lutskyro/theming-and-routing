import { Link } from "expo-router";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Honeycomb from "../../../components/Honeycomb";
import { useHoneycombBackground } from "../../../hooks/useHoneycombBackground";

export default function HomeScreen() {
  const honeycombBackground = useHoneycombBackground();

  return (
    <View style={styles.container}>
      {honeycombBackground}
      <Text>Home Screen Content</Text>
      <Link href="/(tabs)/(home)/details">Details</Link>
    </View>
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
