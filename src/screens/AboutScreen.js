import { useContext } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function AboutScreen() {
  const { logout } = useContext(AuthContext);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../assets/image.png')} style={styles.foto} />

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Identitas Mahasiswa</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Nama</Text>
          <Text style={styles.value}>Clara</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>NIM</Text>
          <Text style={styles.value}>2410501116</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Kelas</Text>
          <Text style={styles.value}>A</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Tema</Text>
          <Text style={styles.value}>A - ResepKita</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Credit API</Text>
        <Text style={styles.credit}>TheMealDB</Text>
        <Text style={styles.creditUrl}>themealdb.com</Text>
      </View>

      <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', padding: 24, backgroundColor: '#f8f8f8' },
  foto: { width: 100, height: 100, borderRadius: 50, marginBottom: 20, borderWidth: 3, borderColor: '#e76f51' },
  card: { width: '100%', backgroundColor: '#fff', borderRadius: 14, padding: 16, marginBottom: 16, elevation: 2, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4 },
  cardTitle: { fontSize: 15, fontWeight: '700', color: '#e76f51', marginBottom: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6, borderBottomWidth: 1, borderColor: '#f0f0f0' },
  label: { color: 'gray', fontSize: 14 },
  value: { fontWeight: '600', fontSize: 14, color: '#333' },
  credit: { fontSize: 15, fontWeight: '600', color: '#333' },
  creditUrl: { fontSize: 13, color: 'gray', fontStyle: 'italic', marginTop: 2 },
  logoutBtn: { width: '100%', backgroundColor: '#e63946', padding: 14, borderRadius: 12, alignItems: 'center', marginTop: 8 },
  logoutText: { color: 'white', fontWeight: 'bold', fontSize: 15 },
});