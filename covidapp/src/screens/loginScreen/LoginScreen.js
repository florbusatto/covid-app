import * as React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../loginScreen/LoginScreen.styles';
import ButtonGoogle from '../../components/buttonGoogle/ButtonGoogle';

function LoginScreen() {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Image
            source={require('./../../assets/Logo.jpg')}
            style={styles.logo}
          />
        </View>
        <View>
          <Text style={styles.title}>Ingrese a su cuenta</Text>
        </View>
        <ButtonGoogle />
      </View>
    </>
  );
}

export default LoginScreen;
