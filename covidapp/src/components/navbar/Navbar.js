import * as React from 'react';
import {Appbar} from 'react-native-paper';
import styles from './Navbar.styles';

const Navbar = () => (
  <Appbar.Header style={styles.top}>
    <Appbar.Content title="Selección de País" />
  </Appbar.Header>
);

export default Navbar;
