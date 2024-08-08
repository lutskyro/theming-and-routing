import { Stack } from 'expo-router';
import Honeycomb from '../components/Honeycomb';

const RootLayout = () => {
  return (
    <>
      <Honeycomb />
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
