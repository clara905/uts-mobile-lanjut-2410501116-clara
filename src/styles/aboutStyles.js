import { StyleSheet } from 'react-native';

export const aboutStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f8f8f8',
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#e76f51',
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#e76f51',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
  },
  label: {
    color: 'gray',
    fontSize: 14,
  },
  value: {
    fontWeight: '600',
    fontSize: 14,
    color: '#333',
  },
  credit: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
  creditUrl: {
    fontSize: 13,
    color: 'gray',
    fontStyle: 'italic',
    marginTop: 2,
  },
  logoutBtn: {
    width: '100%',
    backgroundColor: '#e63946',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  logoutText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});