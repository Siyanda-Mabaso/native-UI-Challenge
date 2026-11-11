
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TransactionDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Estimated fee</Text>
        <Text style={styles.value}>$2.50</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>You will receive</Text>
        <Text style={styles.value}>12.695 ETH</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Spread</Text>
        <Text style={styles.value}>0.5%</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Gas fee</Text>
        <Text style={styles.value}>$1.20</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    gap: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    color: "#A9A2B4",
    fontSize: 14,
  },
  value: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
  },
});

export default TransactionDetails;
