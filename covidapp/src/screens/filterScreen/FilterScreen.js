import * as React from 'react';
import {View, Text} from 'react-native';
import Navbar from '../../components/navbar/Navbar';
import Select from '../../components/select/Select';
import styles from '../filterScreen/FilterScreen.styles';

const FilterScreen = () => {
  return (
    <View style={styles.container}>
      <Navbar />
      <View>
        <Text style={styles.title}>Selecciona el país de tu interés</Text>
      </View>
      <View>
        <Text style={styles.subtitle}>
          Para generar el reporte de casos confirmados, primero selecciona un
          país
        </Text>
      </View>
      <Select />
    </View>
  );
};

export default FilterScreen;
