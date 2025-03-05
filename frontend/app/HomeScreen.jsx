import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const games = [
  { id: "1", name: "Football", icon: "futbol" },
  { id: "2", name: "Basketball", icon: "basketball-ball" },
  { id: "3", name: "Tennis", icon: "table-tennis" },
  { id: "4", name: "Cricket", icon: "baseball-ball" }, // Using baseball as a substitute
];

const initialEvents = [
  { id: "1", name: "Football Tournament", date: "2024-12-15", place: "City Stadium", registered: false },
  { id: "2", name: "Basketball League", date: "2024-12-20", place: "Sports Arena", registered: false },
];

export default function HomeScreen() {
  const [events, setEvents] = useState(initialEvents);

  const handleRegister = (eventId) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === eventId ? { ...event, registered: true } : event
      )
    );
    console.log(`Registered for event: ${eventId}`);
  };

  const renderGameIcon = ({ item }) => (
    <TouchableOpacity style={styles.gameIconContainer}>
      <FontAwesome5 name={item.icon} size={30} color="red" />
      <Text style={styles.gameText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderEvent = ({ item }) => (
    <View style={styles.eventContainer}>
      <Text style={styles.eventName}>{item.name}</Text>
      <Text style={styles.eventDetails}>{item.date} - {item.place}</Text>
      <TouchableOpacity
        style={[styles.registerButton, item.registered && styles.disabledButton]}
        onPress={() => handleRegister(item.id)}
        disabled={item.registered}
      >
        <Text style={styles.registerButtonText}>
          {item.registered ? "Registered ✅" : "Register"}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏆 Game Types</Text>
      <FlatList
        data={games}
        renderItem={renderGameIcon}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.gamesList}
      />

      <Text style={styles.title}>🚀 Upcoming Events</Text>
      <FlatList
        data={events}
        renderItem={renderEvent}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.eventsList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "orange",
    marginVertical: 10,
  },
  gamesList: {
    paddingVertical: 10,
  },
  gameIconContainer: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  gameText: {
    marginTop: 5,
    color: "#333",
  },
  eventsList: {
    paddingVertical: 10,
  },
  eventContainer: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    borderColor: "orange",
    borderWidth: 2,
  },
  eventName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  eventDetails: {
    fontSize: 16,
    color: "#666",
    marginVertical: 5,
  },
  registerButton: {
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
  registerButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
