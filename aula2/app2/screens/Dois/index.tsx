import React from 'react';
import { View, StyleSheet } from 'react-native';
import { styles } from './styles';


const Dois: React.FC = () => {
    return (
      <View style={styles.container}>
        <View style={styles.metadeSuperior}>
          <View style={styles.metadeEsquerda} />
          <View style={styles.metadeDireita} />
        </View>
        <View style={styles.metadeInferior} />
      </View>
    );
  };

export default Dois;