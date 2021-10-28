import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import styles from '../loginScreen/LoginScreen.styles';

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
          <Text style={styles.title}>Ingrese sus datos</Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Nombre y Apellido"
            placeholder="Ingrese sus datos"
            right={<TextInput.Affix text="/100" />}
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Password"
            secureTextEntry
          />
        </View>
        <View>
          <Button
            style={styles.btn}
            mode="contained"
            onPress={() => console.log('Pressed')}>
            Iniciar Sesión
          </Button>
        </View>
      </View>
    </>
  );
}

export default LoginScreen;
