import { useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FavoritContext } from '../context/FavoritContext';

export default function FavoritesScreen() {
  const { favorit, removeFavorit } = useContext(FavoritContext);

  if (favorit.length === 0) return <View style={styles.center}><Text>Belum ada favorit 😢</Text></View>;

  return (
    <FlatList
      data={favorit}
      keyExtractor={item => item.idMeal}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.strMealThumb }} style={styles.img} />
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>{item.strMeal}</Text>
            <Text>{item.strCategory} • {item.strArea}</Text>
          </View>
          <TouchableOpacity onPress={() => removeFavorit(item.idMeal)}>
            <Text style={styles.hapus}>Hapus</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', padding: 12, alignItems: 'center', borderBottomWidth: 1, borderColor: '#eee' },
  img: { width: 60, height: 60, borderRadius: 8, marginRight: 10 },
  title: { fontWeight: '600', fontSize: 14, marginBottom: 2 },
  hapus: { color: 'red', fontWeight: 'bold' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});