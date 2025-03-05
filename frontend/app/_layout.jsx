import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="StartScreen" options={{ headerShown: false }} />
      <Stack.Screen name="HomeScreen" options={{ title: "HomeScreen" }} />

      
      <Stack.Screen name="(auth)/signup" options={{ title: "Sign Up" }} />
      <Stack.Screen name="(auth)/login" options={{ title: "Login" }} />


   
    </Stack>
  );
}
