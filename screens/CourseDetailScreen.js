import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const CourseDetailScreen = ({ route, navigation }) => {
  const { course } = route.params;

  const courseDescriptions = {
    "First Aid":
      "Learn essential first aid skills including CPR, wound care, and emergency response. This course prepares you to handle medical emergencies confidently.",
    Sewing:
      "Master sewing techniques from basic stitches to garment construction. Perfect for beginners and those looking to enhance their sewing skills.",
    "Life Skills":
      "Develop essential life skills including communication, financial literacy, time management, and problem-solving for personal and professional growth.",
    Landscaping:
      "Learn landscape design, plant selection, irrigation systems, and maintenance techniques to create beautiful outdoor spaces.",
    Cooking:
      "Explore culinary techniques, recipe development, and food safety. From basic cooking to advanced culinary skills.",
    "Child Minding":
      "Gain knowledge in child development, safety protocols, educational activities, and professional childcare practices.",
    "Garden Maintenance":
      "Learn garden planning, plant care, pest management, and sustainable gardening practices for beautiful, productive gardens.",
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imageText}>Course Image</Text>
        </View>

        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>
          {courseDescriptions[course.name] ||
            "Comprehensive course designed to provide practical skills and knowledge."}
        </Text>

        <Text style={styles.sectionTitle}>Price</Text>
        <Text style={styles.price}>{course.price}</Text>

        <Text style={styles.sectionTitle}>Duration</Text>
        <Text style={styles.duration}>
          6 weeks to 6 months (varies by course)
        </Text>

        <Text style={styles.sectionTitle}>Benefits</Text>
        <Text style={styles.benefits}>
          • Practical, hands-on learning{"\n"}• Affordable pricing{"\n"}•
          Employment opportunities{"\n"}• Self-sufficiency skills{"\n"}•
          Community support
        </Text>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.contactButton}
          onPress={() => navigation.navigate("Contact")}
        >
          <Text style={styles.buttonText}>Contact Us</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.enrollButton}
          onPress={() => navigation.navigate("Enrollment", { course })}
        >
          <Text style={styles.enrollButtonText}>Enrol</Text>
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
  imagePlaceholder: {
    width: "100%",
    height: 200,
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  imageText: {
    color: "#666",
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E86AB",
    marginTop: 15,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: "#333",
    lineHeight: 22,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2E86AB",
  },
  duration: {
    fontSize: 16,
    color: "#333",
  },
  benefits: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
  },
  buttonContainer: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  contactButton: {
    flex: 1,
    backgroundColor: "#6C757D",
    padding: 15,
    borderRadius: 8,
    marginRight: 10,
    alignItems: "center",
  },
  enrollButton: {
    flex: 1,
    backgroundColor: "#2E86AB",
    padding: 15,
    borderRadius: 8,
    marginLeft: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  enrollButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default CourseDetailScreen;
