import * as React from 'react';
import {View, Image} from 'react-native';
import styles from '../splashScreen/SplashScreen.styles';

function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.navigate('LoginScreen');
  }, 3000);
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('./../../assets/Logo.jpg')}
          style={styles.logo}
        />
      </View>
    </View>
  );
}

export default SplashScreen;
