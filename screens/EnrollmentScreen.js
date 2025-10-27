import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

const EnrollmentScreen = ({ route, navigation }) => {
  const { course } = route.params || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    selectedCourse: course?.name || "",
  });

  const courses = [
    "First Aid - R 500",
    "Sewing - R 450",
    "Life Skills - R 300",
    "Landscaping - R 600",
    "Cooking - R 550",
    "Child Minding - R 400",
    "Garden Maintenance - R 350",
  ];

  const handleEnroll = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.selectedCourse
    ) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    navigation.navigate("Confirmation", { course: formData.selectedCourse });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Enrolment Form</Text>

      <Text style={styles.loginText}>
        Already Registered? <Text style={styles.loginLink}>Log in here.</Text>
      </Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>NAME</Text>
        <TextInput
          style={styles.input}
          value={formData.name}
          onChangeText={(text) => setFormData({ ...formData, name: text })}
          placeholder="Enter your full name"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>EMAIL</Text>
        <TextInput
          style={styles.input}
          value={formData.email}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>PASSWORD</Text>
        <TextInput
          style={styles.input}
          value={formData.password}
          onChangeText={(text) => setFormData({ ...formData, password: text })}
          placeholder="Enter your password"
          secureTextEntry
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>COURSE (WITH PRICE)</Text>
        <View style={styles.dropdown}>
          <Text style={styles.dropdownText}>
            {formData.selectedCourse || "Select a course"}
          </Text>
        </View>
        <ScrollView style={styles.courseList}>
          {courses.map((courseOption, index) => (
            <TouchableOpacity
              key={index}
              style={styles.courseOption}
              onPress={() =>
                setFormData({ ...formData, selectedCourse: courseOption })
              }
            >
              <Text style={styles.courseOptionText}>{courseOption}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <TouchableOpacity style={styles.continueButton} onPress={handleEnroll}>
        <Text style={styles.continueButtonText}>Continue to Payment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2E86AB",
    marginBottom: 10,
    textAlign: "center",
  },
  loginText: {
    textAlign: "center",
    marginBottom: 30,
    color: "#666",
  },
  loginLink: {
    color: "#2E86AB",
    fontWeight: "600",
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#fff",
  },
  dropdownText: {
    fontSize: 16,
    color: "#333",
  },
  courseList: {
    maxHeight: 150,
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
  },
  courseOption: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  courseOptionText: {
    fontSize: 16,
    color: "#333",
  },
  continueButton: {
    backgroundColor: "#2E86AB",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default EnrollmentScreen;
