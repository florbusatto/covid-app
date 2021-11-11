import * as React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Button, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './Select.styles';

const Select = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState([]);

  const selectCountry = country => {
    setCountry(country);
  };

  useEffect(() => {
    axios
      .get('https://api.covid19api.com/countries')
      .then(res => {
        setCountries(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return (
    <View style={styles.container}>
      <Picker
        style={styles.pickerSelect}
        selectedValue={country}
        onValueChange={country => selectCountry(country)}>
        <Picker.Item label="Selecciona un país" value="" />
        {countries.map(item => (
          <Picker.Item
            style={styles.item}
            key={item.ISO2}
            label={item.Country}
            value={item.Slug}>
            {item.Country}
          </Picker.Item>
        ))}
      </Picker>
    </View>
  );
};

export default Select;
