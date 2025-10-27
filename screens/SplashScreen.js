import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>EMPOWERING THE NATION</Text>
      <View style={styles.imagePlaceholder}>
        <Text style={styles.imageText}>Picture</Text>
      </View>
      <Text style={styles.tagline}>
        Empowering dreams, elevating communities.
      </Text>
      <Text style={styles.exploreText}>Explore Courses</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2E86AB",
    marginBottom: 30,
    textAlign: "center",
  },
  imagePlaceholder: {
    width: 200,
    height: 200,
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  imageText: {
    color: "#666",
    fontSize: 16,
  },
  tagline: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
    fontStyle: "italic",
  },
  exploreText: {
    fontSize: 16,
    color: "#2E86AB",
    fontWeight: "600",
  },
});

export default SplashScreen;
