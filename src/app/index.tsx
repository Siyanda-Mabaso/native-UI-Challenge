
import React from "react";
import { View, StyleSheet } from "react-native";

import Header from "../Components/Header";
import CurrencyCard from "../Components/CurrencyCard";
import ExchangeRate from "../Components/ExchangeRate";
export default function Index() {
  return (
    <View style={styles.container}>
   <Header />
<CurrencyCard />
<ExchangeRate />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0B0E",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
