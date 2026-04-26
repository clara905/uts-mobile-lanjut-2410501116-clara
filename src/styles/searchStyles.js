import { StyleSheet } from 'react-native';

export const searchStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    marginBottom: 4,
    fontSize: 15,
    backgroundColor: '#fff',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 8,
  },
  btn: {
    backgroundColor: '#e76f51',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
    marginTop: 4,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  img: {
    width: 65,
    height: 65,
    borderRadius: 10,
    marginRight: 12,
  },
  cardInfo: {
    flex: 1,
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff3ef',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  badgeText: {
    fontSize: 11,
    color: '#e76f51',
    fontWeight: '600',
  },
  emptyText: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 40,
    fontSize: 15,
  },
});