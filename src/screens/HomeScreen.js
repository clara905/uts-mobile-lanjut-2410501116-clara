import { useEffect, useState } from 'react';
import {
  View, Text, FlatList, Image, TouchableOpacity,
  ActivityIndicator, RefreshControl, ScrollView
} from 'react-native';
import { fetchMeals, fetchAllMeals, fetchCategories } from '../api/mealApi';
import { homeStyles as styles } from '../styles/homeStyles';

export default function HomeScreen({ navigation }) {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const loadCategories = async () => {
    const data = await fetchCategories();
    setCategories(data);
  };

  const loadData = async (category = selectedCategory) => {
    try {
      setError(null);
      setLoading(true);
      const data = category === 'Semua'
        ? await fetchAllMeals()
        : await fetchMeals(category);
      setMeals(data);
    } catch (e) {
      setError('Gagal memuat data. Cek koneksi kamu.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadCategories();
    loadData('Semua');
  }, []);

  const handleCategoryPress = (categoryName) => {
    setSelectedCategory(categoryName);
    loadData(categoryName);
  };

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} color="#e76f51" />;

  if (error) return (
    <View style={styles.center}>
      <Text>{error}</Text>
      <TouchableOpacity style={styles.retryBtn} onPress={() => loadData()}>
        <Text style={styles.retryText}>Coba Lagi</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Filter Kategori */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryContainer}
      >
        {/* Tombol Semua */}
        <TouchableOpacity
          style={[styles.categoryBtn, selectedCategory === 'Semua' && styles.categoryBtnActive]}
          onPress={() => handleCategoryPress('Semua')}
        >
          <Text style={{ fontSize: 24 }}>🍽️</Text>
          <Text style={[styles.categoryText, selectedCategory === 'Semua' && styles.categoryTextActive]}>
            Semua
          </Text>
        </TouchableOpacity>

        {/* Kategori dari API */}
        {categories.map(cat => (
          <TouchableOpacity
            key={cat.idCategory}
            style={[styles.categoryBtn, selectedCategory === cat.strCategory && styles.categoryBtnActive]}
            onPress={() => handleCategoryPress(cat.strCategory)}
          >
            <Image source={{ uri: cat.strCategoryThumb }} style={styles.categoryImg} />
            <Text style={[styles.categoryText, selectedCategory === cat.strCategory && styles.categoryTextActive]}>
              {cat.strCategory}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* List Resep */}
      <FlatList
        data={meals}
        keyExtractor={item => item.idMeal}
        contentContainerStyle={{ paddingTop: 8, paddingBottom: 16 }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => { setRefreshing(true); loadData(selectedCategory); }}
            colors={['#e76f51']}
          />
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Detail', { idMeal: item.idMeal })}
          >
            <Image source={{ uri: item.strMealThumb }} style={styles.img} />
            <View style={styles.cardInfo}>
              <Text style={styles.title}>{item.strMeal}</Text>
              <View style={styles.categoryBadge}>
                <Text style={styles.categoryBadgeText}>🍽️ {selectedCategory}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}