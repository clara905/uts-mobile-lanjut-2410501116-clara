import { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  FlatList, Image, ActivityIndicator
} from 'react-native';
import { searchStyles as styles } from '../styles/searchStyles';

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (query.trim() === '') { setError('Tidak boleh kosong!'); return; }
    if (query.trim().length < 3) { setError('Minimal 3 karakter!'); return; }
    try {
      setError('');
      setLoading(true);
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await res.json();
      setResults(data.meals || []);
    } catch (e) {
      setError('Gagal mencari resep. Cek koneksi kamu.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Cari resep... (min. 3 karakter)"
        value={query}
        onChangeText={setQuery}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity style={styles.btn} onPress={handleSearch}>
        <Text style={styles.btnText}>🔍 Cari</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator color="#e76f51" />}

      {!loading && results.length === 0 && query.length >= 3 && (
        <Text style={styles.emptyText}>Resep tidak ditemukan 😢</Text>
      )}

      <FlatList
        data={results}
        keyExtractor={item => item.idMeal}
        contentContainerStyle={{ paddingTop: 8, paddingBottom: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('HomeTab', { screen: 'Detail', params: { idMeal: item.idMeal } })}
          >
            <Image source={{ uri: item.strMealThumb }} style={styles.img} />
            <View style={styles.cardInfo}>
              <Text style={styles.title}>{item.strMeal}</Text>
              {item.strCategory && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>🍽️ {item.strCategory}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}