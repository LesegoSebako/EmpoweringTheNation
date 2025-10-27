import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const courses = [
  { id: 1, name: "First Aid", price: "R 500" },
  { id: 2, name: "Sewing", price: "R 450" },
  { id: 3, name: "Life Skills", price: "R 300" },
  { id: 4, name: "Landscaping", price: "R 600" },
  { id: 5, name: "Cooking", price: "R 550" },
  { id: 6, name: "Child Minding", price: "R 400" },
  { id: 7, name: "Garden Maintenance", price: "R 350" },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.header}>Available Courses</Text>
        {courses.map((course) => (
          <TouchableOpacity
            key={course.id}
            style={styles.courseCard}
            onPress={() => navigation.navigate("CourseDetail", { course })}
          >
            <View style={styles.courseHeader}>
              <Text style={styles.courseName}>{course.name}</Text>
              <Text style={styles.checkmark}>✔️</Text>
            </View>
            <Text style={styles.coursePrice}>{course.price}</Text>
            <Text style={styles.viewDetails}>
              Tap to view details and enroll
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.footerButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.footerButtonText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate("Contact")}
        >
          <Text style={styles.footerButtonText}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate("Enrollment")}
        >
          <Text style={styles.footerButtonText}>Enrol</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2E86AB",
    marginBottom: 20,
    textAlign: "center",
  },
  courseCard: {
    backgroundColor: "#F8F9FA",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: "#2E86AB",
  },
  courseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  courseName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  checkmark: {
    fontSize: 16,
  },
  coursePrice: {
    fontSize: 16,
    color: "#2E86AB",
    fontWeight: "600",
    marginBottom: 5,
  },
  viewDetails: {
    fontSize: 14,
    color: "#666",
    fontStyle: "italic",
  },
  footer: {
    flexDirection: "row",
    backgroundColor: "#2E86AB",
    paddingVertical: 10,
  },
  footerButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
  },
  footerButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
});

export default HomeScreen;
