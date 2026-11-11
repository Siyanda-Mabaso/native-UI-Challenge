import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

interface CurrencyCardProps {
  currency: string;
  amount: string;
  balance: string;
  type: "ethereum" | "usd";
}

const CurrencyCard: React.FC<CurrencyCardProps> = ({
  currency,
  amount,
  balance,
  type,
}) => {
  return (
    <View style={styles.container}>
      {/* Currency Selector */}
      <View style={styles.currencyRow}>
        <View style={styles.iconContainer}>
          {type === "ethereum" ? (
            <MaterialCommunityIcons name="ethereum" size={29} color="#FFFFFF" />
          ) : (
            <Text style={styles.dollarIcon}>$</Text>
          )}
        </View>

        <Text style={styles.currencyText}>{currency}</Text>

        <Ionicons name="chevron-down" size={16} color="#A9A2B4" />
      </View>

      {/* Currency Amount */}
      <Text style={styles.amount}>{amount}</Text>

      {/* Balance Information */}
      <View style={styles.balanceRow}>
        <Text style={styles.balanceLabel}>Balance</Text>
        <Text style={styles.balanceValue}>{balance}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 24,
    minHeight: 210,
    justifyContent: "space-between",
  },

  currencyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },

  iconContainer: {
    width: 43,
    height: 43,
    borderRadius: 50,
    backgroundColor: "#29272E",
    justifyContent: "center",
    alignItems: "center",
  },

  dollarIcon: {
    color: "#FFFFFF",
    fontSize: 27,
    fontWeight: "400",
  },

  currencyText: {
    color: "#FFFFFF",
    fontSize: 20,
  },

  amount: {
    color: "#FFFFFF",
    fontSize: 49,
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
    fontSize: 15,
  },

  balanceValue: {
    color: "#A9A2B4",
    fontSize: 15,
  },
});

export default CurrencyCard;
