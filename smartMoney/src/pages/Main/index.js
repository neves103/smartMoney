import React from "react";
import { View, Button, StyleSheet } from "react-native";

import BalancePanel from "../../components/balancePanel";
import EntrySummary from "../../components/EntrySummary";
import EntryList from "../../components/EntryList";

const Main = ({ navigation }) => {
  const currentBalance = "2.060,35";

  const entries = [
    { key: "1", description: "Padaria asa Branca", amount: 10 },
    { key: "2", description: "Supermercado Isadora", amount: 190 },
    { key: "3", description: "Posto Ipiranga", amount: 290 },
  ];

  const entriesGrouped = [
    { key: '1', description: 'Alimentação', amount: 200 },
    { key: '2', description: 'Combustivel', amount: 12 },
    { key: '3', description: 'Aluguel', amount: 120 },
    { key: '4', description: 'Lazer', amount: 250 },
    { key: '5', description: 'Outros', amount: 1200 },
  ];

  return (
    <View style={styles.container}>
      <BalancePanel currentBalance={currentBalance} />
      <Button
        title="Adicionar"
        onPress={() => navigation.navigate("NewEntry")}
      />
      <EntrySummary entriesGrouped={entriesGrouped} />
      <EntryList entries={entries} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //padding: 10,
  },
});

export default Main;
