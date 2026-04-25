import { useEffect, useState, useContext } from 'react';
import {
  View, Text, Image, ScrollView,
  TouchableOpacity, ActivityIndicator, Share
} from 'react-native';
import { fetchMealDetail } from '../api/mealApi';
import { FavoritContext } from '../context/FavoritContext';
import { detailStyles as styles } from '../styles/detailStyles';

export default function DetailScreen({ route }) {
  const { idMeal } = route.params;
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addFavorit } = useContext(FavoritContext);

  useEffect(() => {
    fetchMealDetail(idMeal).then(data => {
      setMeal(data);
      setLoading(false);
    });
  }, []);

  const handleShare = async () => {
    await Share.share({
      message: `🍳 Coba resep: ${meal.strMeal}\nKategori: ${meal.strCategory} | Area: ${meal.strArea}\nYouTube: ${meal.strYoutube || '-'}\n\nDari ResepKita App 🍴`,
    });
  };

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} color="#e76f51" />;

  if (!meal) return (
    <View style={styles.center}>
      <Text style={styles.errorText}>😢 Gagal memuat resep</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image source={{ uri: meal.strMealThumb }} style={styles.img} />
      <View style={styles.content}>
        <Text style={styles.title}>{meal.strMeal}</Text>

        <View style={styles.badgeRow}>
          <View style={[styles.badge, { backgroundColor: '#fff3ef' }]}>
            <Text style={[styles.badgeText, { color: '#e76f51' }]}>🍽️ {meal.strCategory}</Text>
          </View>
          <View style={[styles.badge, { backgroundColor: '#eaf4f4' }]}>
            <Text style={[styles.badgeText, { color: '#2a9d8f' }]}>🌍 {meal.strArea}</Text>
          </View>
          {meal.strTags && (
            <View style={[styles.badge, { backgroundColor: '#fef9ef' }]}>
              <Text style={[styles.badgeText, { color: '#e9c46a' }]}>🏷️ {meal.strTags.split(',')[0]}</Text>
            </View>
          )}
        </View>

        {meal.strYoutube ? (
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>📺 Video Tutorial</Text>
            <Text style={styles.infoValue} numberOfLines={1}>{meal.strYoutube}</Text>
          </View>
        ) : null}

        <View style={styles.instruksiCard}>
          <Text style={styles.sectionTitle}>📋 Instruksi Memasak</Text>
          <Text style={styles.instruksiText}>{meal.strInstructions}</Text>
        </View>

        <TouchableOpacity style={styles.btnFavorit} onPress={() => addFavorit(meal)}>
          <Text style={styles.btnText}>⭐ Tambah ke Favorit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnShare} onPress={handleShare}>
          <Text style={styles.btnText}>🔗 Bagikan Resep</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}