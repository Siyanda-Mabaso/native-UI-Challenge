
import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const BuyButton = () => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>Buy ETH</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#aca9b3",
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
  },
});

export default BuyButton;
