import { StyleSheet } from 'react-native';

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
    color: '#333',
  },
  titleSmall: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    color: '#333',
  },
  subtitle: {
    textAlign: 'center',
    color: 'gray',
    marginBottom: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    marginBottom: 4,
    fontSize: 15,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 8,
  },
  forgot: {
    textAlign: 'right',
    color: '#e76f51',
    marginBottom: 16,
  },
  btn: {
    backgroundColor: '#e76f51',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 8,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    textAlign: 'center',
    color: 'gray',
  },
  linkBold: {
    color: '#e76f51',
    fontWeight: 'bold',
  },
});