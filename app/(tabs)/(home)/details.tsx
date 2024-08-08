// app/(tabs)/shop.tsx

import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import HoneycombGrid from '../../../components/HoneycombGrid';

export default function DetailsScreen() {
  return (
    <SafeAreaView style={styles.container}>
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