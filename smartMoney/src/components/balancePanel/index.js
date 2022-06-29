/* eslint-disable no-undef */
import React from "react";
import { View, StyleSheet} from "react-native";

import BalancePanelLabel from "./balancePanelLabel";
import BalancePanelChart from "./balancePanelChart";

const BalancePanel = ({currentBalance}) => {
  return (
    <View style={styles.container}>
      <BalancePanelLabel currentBalance={currentBalance}/>
      <BalancePanelChart />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
   // flex: 1,
   alignItems:'center',
  },
});

export default BalancePanel;