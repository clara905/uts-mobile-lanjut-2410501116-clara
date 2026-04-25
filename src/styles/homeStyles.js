import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  categoryContainer: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    maxHeight: 90,
    backgroundColor: '#fff',
  },
  categoryBtn: {
    alignItems: 'center',
    marginHorizontal: 6,
    padding: 6,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    width: 70,
  },
  categoryBtnActive: {
    borderColor: '#e76f51',
    backgroundColor: '#fff3ef',
  },
  categoryImg: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginBottom: 4,
  },
  categoryText: {
    fontSize: 10,
    textAlign: 'center',
    color: 'gray',
  },
  categoryTextActive: {
    color: '#e76f51',
    fontWeight: 'bold',
  },
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
    width: 75,
    height: 75,
    borderRadius: 10,
    marginRight: 12,
  },
  cardInfo: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff3ef',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  categoryBadgeText: {
    fontSize: 11,
    color: '#e76f51',
    fontWeight: '600',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  retryBtn: {
    marginTop: 10,
    backgroundColor: '#e76f51',
    padding: 10,
    borderRadius: 8,
  },
  retryText: {
    color: 'white',
    fontWeight: 'bold',
  },
});