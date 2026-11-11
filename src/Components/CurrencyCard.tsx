import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const CurrencyCard = () => {
  return (
    <View style={styles.container}>
      {/* ETH Section */}
      <View style={styles.currencySection}>
        <View style={styles.currencyRow}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="ethereum" size={28} color="#FFFFFF" />
          </View>

          <Text style={styles.currencyText}>ETH</Text>

          <Ionicons name="chevron-down" size={17} color="#A9A2B4" />
        </View>

        <Text style={styles.amount}>12,695</Text>

        <View style={styles.balanceRow}>
          <Text style={styles.balanceLabel}>Balance</Text>
          <Text style={styles.balanceValue}>293.0187</Text>
        </View>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* USD Section */}
      <View style={styles.currencySection}>
        <View style={styles.currencyRow}>
          <View style={styles.iconContainer}>
            <Text style={styles.dollarIcon}>$</Text>
          </View>

          <Text style={styles.currencyText}>USD</Text>

          <Ionicons name="chevron-down" size={17} color="#A9A2B4" />
        </View>

        <Text style={styles.amount}>43,937.4</Text>

        <View style={styles.balanceRow}>
          <Text style={styles.balanceLabel}>Balance</Text>
          <Text style={styles.balanceValue}>12,987.21</Text>
        </View>
      </View>

      {/* Swap Button */}
      <View style={styles.swapButton}>
        <Ionicons name="swap-vertical" size={23} color="#FFFFFF" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#211D26",
    borderRadius: 24,
    marginTop: 20,
    position: "relative",
  },

  currencySection: {
    paddingHorizontal: 24,
    paddingVertical: 22,
    minHeight: 195,
    justifyContent: "space-between",
  },

  currencyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 50,
    backgroundColor: "#302B37",
    justifyContent: "center",
    alignItems: "center",
  },

  dollarIcon: {
    color: "#FFFFFF",
    fontSize: 25,
  },

  currencyText: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "500",
  },

  amount: {
    color: "#FFFFFF",
    fontSize: 46,
    fontWeight: "300",
    letterSpacing: -1.5,
  },

  balanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  balanceLabel: {
    color: "#A9A2B4",
    fontSize: 14,
  },

  balanceValue: {
    color: "#A9A2B4",
    fontSize: 14,
  },

  divider: {
    height: 1,
    backgroundColor: "#100E13",
  },

  swapButton: {
    position: "absolute",
    top: "50%",
    alignSelf: "center",
    marginTop: -22,
    width: 44,
    height: 44,
    borderRadius: 50,
    backgroundColor: "#080709",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
    elevation: 5,
  },
});

export default CurrencyCard;
