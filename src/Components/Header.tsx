
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity>
        <Ionicons
          name="chevron-back"
          size={24}
          color="#FFFFFF"
        />
      </TouchableOpacity>

      {/* Screen Title */}
      <Text style={styles.title}>Exchange</Text>

      {/* Notification Icon */}
      <TouchableOpacity>
        <Ionicons
          name="notifications"
          size={23}
          color="#B9A8C5"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "500",
  },
});

export default Header;
