import { Slot, Tabs } from 'expo-router';
import HoneycombGrid from '../../components/HoneycombGrid';
import { View, StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: {
          display: 'none',
        },
    }}>

      <Tabs.Screen name="(home)" />
      <Tabs.Screen name="settings" />

    </Tabs>
  );
}
