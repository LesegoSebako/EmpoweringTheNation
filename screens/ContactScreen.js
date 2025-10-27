import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Linking,
  Alert,
} from "react-native";

const ContactScreen = ({ navigation }) => {
  const [inquiry, setInquiry] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSendInquiry = () => {
    if (!inquiry.name || !inquiry.email || !inquiry.message) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    Alert.alert(
      "Success",
      "Your inquiry has been sent! We will contact you soon."
    );
    setInquiry({ name: "", email: "", message: "" });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Contact Us</Text>

      <View style={styles.contactInfo}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <TouchableOpacity onPress={() => Linking.openURL("tel:+27111234567")}>
          <Text style={styles.contactItem}>📞 Phone: +27 11 123 4567</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL("mailto:info@empoweringthenation.org")}
        >
          <Text style={styles.contactItem}>
            📧 Email: info@empoweringthenation.org
          </Text>
        </TouchableOpacity>
        <Text style={styles.contactItem}>
          📍 Address: 123 Education Street, Johannesburg, South Africa
        </Text>
      </View>

      <View style={styles.mapPlaceholder}>
        <Text style={styles.mapText}>Map Location</Text>
      </View>

      <View style={styles.inquiryForm}>
        <Text style={styles.sectionTitle}>Send Us an Inquiry</Text>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={inquiry.name}
            onChangeText={(text) => setInquiry({ ...inquiry, name: text })}
            placeholder="Your full name"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={inquiry.email}
            onChangeText={(text) => setInquiry({ ...inquiry, email: text })}
            placeholder="Your email address"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Message</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={inquiry.message}
            onChangeText={(text) => setInquiry({ ...inquiry, message: text })}
            placeholder="Your message or inquiry"
            multiline
            numberOfLines={4}
          />
        </View>

        <TouchableOpacity style={styles.sendButton} onPress={handleSendInquiry}>
          <Text style={styles.sendButtonText}>Send Inquiry</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 20,
    textAlign: "center",
  },
  contactInfo: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E86AB",
    marginBottom: 15,
  },
  contactItem: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
    paddingVertical: 5,
  },
  mapPlaceholder: {
    height: 200,
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  mapText: {
    color: "#666",
    fontSize: 16,
  },
  inquiryForm: {
    marginBottom: 40,
  },
  formGroup: {
    marginBottom: 15,
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
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  sendButton: {
    backgroundColor: "#2E86AB",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ContactScreen;
