import { useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { FavoritContext } from '../context/FavoritContext';
import { favoritStyles as styles } from '../styles/favoritStyles';

export default function FavoritesScreen() {
  const { favorit, removeFavorit } = useContext(FavoritContext);

  if (favorit.length === 0) return (
    <View style={styles.center}>
      <Text style={styles.emptyText}>Belum ada favorit 😢</Text>
    </View>
  );

  return (
    <FlatList
      data={favorit}
      keyExtractor={item => item.idMeal}
      contentContainerStyle={{ paddingTop: 8, paddingBottom: 16 }}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.strMealThumb }} style={styles.img} />
          <View style={styles.cardInfo}>
            <Text style={styles.title}>{item.strMeal}</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{item.strCategory} • {item.strArea}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => removeFavorit(item.idMeal)}>
            <Text style={styles.hapus}>Hapus</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
}