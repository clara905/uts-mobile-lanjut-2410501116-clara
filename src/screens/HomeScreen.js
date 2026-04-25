import { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator, StyleSheet, RefreshControl } from 'react-native';
import { fetchMeals } from '../api/mealApi';

export default function HomeScreen({ navigation }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const loadData = async () => {
    try {
      setError(null);
      const data = await fetchMeals();
      setMeals(data);
    } catch (e) {
      setError('Gagal memuat data. Cek koneksi kamu.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => { loadData(); }, []);

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  if (error) return <View style={styles.center}><Text>{error}</Text></View>;

  return (
    <FlatList
      data={meals}
      keyExtractor={item => item.idMeal}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => { setRefreshing(true); loadData(); }} />}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Detail', { idMeal: item.idMeal, name: item.strMeal })}>
          <Image source={{ uri: item.strMealThumb }} style={styles.img} />
          <Text style={styles.title}>{item.strMeal}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', padding: 12, alignItems: 'center', borderBottomWidth: 1, borderColor: '#eee' },
  img: { width: 70, height: 70, borderRadius: 8, marginRight: 12 },
  title: { fontSize: 15, fontWeight: '600', flex: 1 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});