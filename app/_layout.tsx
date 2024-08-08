import React from 'react';
import { Stack, Slot } from 'expo-router';
import HoneycombGrid from '../components/HoneycombGrid';
import { View, StyleSheet } from 'react-native';

// const RootLayout = () => {
//   return (
//     <>
//     <HoneycombGrid />
//       <Stack>
//         <Stack.Screen
//           name="(tabs)"
//           options={{
//             headerShown: false,
//           }}
//         />
//       </Stack>
//       </>
//   );
// };

const RootLayout = () => {
  return (
    <View style={{ flex: 1 }}>
      <HoneycombGrid hexSize={30} color="transparent" strokeColor="#000" strokeWidth={1} />
      <Slot />
    </View>
  );
};

export default RootLayout;
