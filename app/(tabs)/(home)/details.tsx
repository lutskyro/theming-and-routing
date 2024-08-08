// app/(tabs)/shop.tsx

import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import Honeycomb from '../../../components/Honeycomb';
import { useHoneycombBackground } from '../../../hooks/useHoneycombBackground';

export default function DetailsScreen() {
  const honeycombBackground = useHoneycombBackground();

  return (
    <SafeAreaView style={styles.container}>
      {honeycombBackground}
      <Text>Details</Text>
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