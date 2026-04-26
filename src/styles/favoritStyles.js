import { StyleSheet } from 'react-native';

export const favoritStyles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 12,
    marginHorizontal: 12,
    marginBottom: 10,
    alignItems: 'center',
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
    marginBottom: 4,
    color: '#333',
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#eaf4f4',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  badgeText: {
    fontSize: 11,
    color: '#2a9d8f',
    fontWeight: '600',
  },
  hapus: {
    color: '#e63946',
    fontWeight: 'bold',
    fontSize: 13,
    paddingHorizontal: 4,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: 'gray',
    marginTop: 8,
  },
});