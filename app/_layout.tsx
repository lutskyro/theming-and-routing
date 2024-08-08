import { Stack } from 'expo-router';
import HoneycombGrid from '../components/HoneycombGrid';

const RootLayout = () => {
  return (
    <>
      <HoneycombGrid />
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        />
      </Stack>
    </>
  );
};

export default RootLayout;
