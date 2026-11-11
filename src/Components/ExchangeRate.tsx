
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ExchangeRate = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Exchange rate</Text>

      <Text style={styles.rate}>
        1 ETH = 3.462 USD
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 5,
  },

  label: {
    color: "#A9A2B4",
    fontSize: 14,
  },

  rate: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
  },
});

export default ExchangeRate;
