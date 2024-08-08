import { Link } from "expo-router";
import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function HomeScreen() {
  return (
      <SafeAreaView style={styles.container}>
        <Text>Home</Text>
        <Link href="/details">View details</Link>
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
    position: 'relative',
  },
});
