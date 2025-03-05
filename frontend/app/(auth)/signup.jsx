import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { FontAwesome, Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";

export default function Signup() {
  const router = useRouter();
  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    sport: "",
    city: "",
    profilePicture: null,
  });

  const [sports, setSports] = useState([]);

  const handleAddSport = () => {
    if (form.sport.trim()) {
      setSports([...sports, form.sport.trim()]);
      setForm({ ...form, sport: "" });    }
  };

  const handleRemoveSport = (sportToRemove) => {
    setSports(sports.filter((sport) => sport !== sportToRemove));
  };

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setForm({ ...form, profilePicture: result.assets[0].uri });
    }
  };

  const handleSignup = () => {
    const { username, email, phone, password, city, profilePicture } = form;

    if (
      !username ||
      !email ||
      !phone ||
      !password ||
      !city ||
      !profilePicture ||
      sports.length === 0
    ) {
      Alert.alert("Validation Error", "All fields are required.");
      return;
    }

    if (phone.length !== 10) {
      Alert.alert("Validation Error", "Phone number must be 10 digits.");
      return;
    }

    Alert.alert("Signup Successful!");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          source={require("../../assets/images/sportify-bg.png")}
          style={styles.bgImage}
        />

        <Text style={styles.title}>🚀 Join Sportify Today! 🏆</Text>

        <TouchableOpacity
          onPress={handlePickImage}
          style={styles.profilePictureContainer}
        >
          {form.profilePicture ? (
            <Image
              source={{ uri: form.profilePicture }}
              style={styles.profilePicture}
            />
          ) : (
            <Ionicons name="person-circle-outline" size={100} color="orange" />
          )}
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <Feather name="user" size={20} color="orange" />
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={(text) => setForm({ ...form, username: text })}
          />
        </View>

        <View style={styles.inputContainer}>
          <FontAwesome name="envelope" size={20} color="orange" />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={(text) => setForm({ ...form, email: text })}
          />
        </View>

        <View style={styles.inputContainer}>
          <FontAwesome name="phone" size={20} color="orange" />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            onChangeText={(text) => setForm({ ...form, phone: text })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed" size={20} color="orange" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => setForm({ ...form, password: text })}
          />
        </View>

        <View style={styles.inputContainer}>
          <FontAwesome name="futbol-o" size={20} color="orange" />
          <TextInput
            style={styles.input}
            placeholder="Favorite Sport"
            onChangeText={(text) => setForm({ ...form, sport: text })}
          />
          <TouchableOpacity onPress={handleAddSport} style={styles.addButton}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sportsContainer}>
          {sports.map((sport, index) => (
            <View key={index} style={styles.sportBadge}>
              <Text style={styles.sportText}>{sport}</Text>
              <TouchableOpacity onPress={() => handleRemoveSport(sport)}>
                <Ionicons name="close-circle" size={20} color="red" />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={styles.inputContainer}>
          <FontAwesome name="map-marker" size={20} color="orange" />
          <TextInput
            style={styles.input}
            placeholder="City"
            onChangeText={(text) => setForm({ ...form, city: text })}
          />
        </View>

        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
          <Text style={styles.buttonText}>🚀 Sign Up</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  bgImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#F5EFFF",
    marginTop: 40,
  },
  profilePictureContainer: {
    marginVertical: 10,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3C3D37",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "orange",
    width: "70%",
  },
  input: {
    color: "white",
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  sportsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  sportBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "orange",
    borderRadius: 15,
    padding: 10,
    margin: 5,
  },
  sportText: {
    color: "#fff",
    marginRight: 5,
  },
  signupButton: {
    backgroundColor: "orange",
    padding: 15,
    borderRadius: 10,
    width: "70%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
