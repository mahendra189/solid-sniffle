// components/TableView.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const TableView = ({ columns }) => {
  return (
    <View style={styles.table}>
      <View style={styles.row}>
        {columns.map((col, index) => (
          <Text key={index} style={styles.cell}>
            {col}
          </Text>
        ))}
      </View>
      {/* Add more rows as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: colors.primary,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
  cell: {
    flex: 1,
    padding: 10,
    borderRightWidth: 1,
    borderRightColor: colors.primary,
    textAlign: 'center',
  },
});

export default TableView;
