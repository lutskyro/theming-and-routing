import { Link } from "expo-router";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import HoneycombGrid from "../../../components/HoneycombGrid";

export default function HomeScreen() {
  return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Link href="/details">View details</Link>
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
