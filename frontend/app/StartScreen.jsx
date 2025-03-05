import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

export default function StartScreen() {
  const router = useRouter();

  return (

      <LinearGradient
        colors={["rgba(1, 100, 237, 0.6)", "rgba(63, 0, 118, 0.8)"]}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            color: "#fff",
            marginBottom: 20,
          }}
        >
          Welcome to Sportify
        </Text>
        <Text style={styles.slogan}>🔥 Turn Notification into Action ⚡️</Text>



        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/(auth)/login")}
        >
          <FontAwesome name="sign-in" size={24} color="#fff" />
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#FF4949" }]}
          onPress={() => router.push("/(auth)/signup")}
        >
          <FontAwesome name="user-plus" size={24} color="#fff" />
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </LinearGradient>
  );
}

const styles = {
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: 200,
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 10,
  },slogan: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFCD38", // Orange color
    fontFamily: "serif", // Slogan-style font
  },
};
