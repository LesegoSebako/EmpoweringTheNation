import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ConfirmationScreen = ({ route, navigation }) => {
  const { course } = route.params || {};

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.successIcon}>✅</Text>
        <Text style={styles.confirmationTitle}>Confirmation</Text>
        <Text style={styles.successMessage}>Thank you for enrolling!</Text>

        {course && (
          <View style={styles.courseInfo}>
            <Text style={styles.courseLabel}>Course:</Text>
            <Text style={styles.courseName}>{course}</Text>
          </View>
        )}

        <Text style={styles.followUpMessage}>
          We'll contact you soon with further details about your course and
          payment options.
        </Text>

        <View style={styles.paymentInfo}>
          <Text style={styles.paymentTitle}>Payment Information</Text>
          <Text style={styles.paymentText}>
            You will receive payment instructions via email. We accept various
            payment methods including:
          </Text>
          <Text style={styles.paymentMethods}>
            • Debit/Credit Card{"\n"}• Bank Transfer{"\n"}• Mobile Payments
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.exitButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.exitButtonText}>Exit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  successIcon: {
    fontSize: 80,
    marginBottom: 20,
  },
  confirmationTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2E86AB",
    marginBottom: 10,
  },
  successMessage: {
    fontSize: 22,
    color: "#28A745",
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
  courseInfo: {
    backgroundColor: "#F8F9FA",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
  },
  courseLabel: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
  },
  courseName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E86AB",
  },
  followUpMessage: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 22,
  },
  paymentInfo: {
    backgroundColor: "#E8F4FD",
    padding: 15,
    borderRadius: 8,
    width: "100%",
  },
  paymentTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E86AB",
    marginBottom: 10,
  },
  paymentText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 10,
    lineHeight: 20,
  },
  paymentMethods: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },
  exitButton: {
    backgroundColor: "#2E86AB",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  exitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ConfirmationScreen;
