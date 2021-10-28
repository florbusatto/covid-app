import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    height: 102,
    width: 102,
    borderRadius: 50,
    top: 40,
  },
  title: {
    color: '#560cce',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 50,
  },
  input: {
    width: 328,
    height: 40,
    borderColor: 'red',
    top: 70,
    marginBottom: 18,
  },
  btn: {
    backgroundColor: '#560cce',
    borderRadius: 4,
    width: 328,
    height: 40,
    top: 130,
  },
});

export default styles;
