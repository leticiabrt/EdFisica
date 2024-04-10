import React from 'react';
import { View, Text } from 'react-native';
import { styles } from "./styles"

export const Header = () => {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.retangulo}>
          <Text style={styles.headerText}>EDUCAÇÃO FÍSICA</Text>
        </View>
      </View>
      <View style={styles.header2}>
        <Text style={styles.headerText}>TEXT</Text>
      </View>
    </View>
  );
};

