import { useContext } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { aboutStyles as styles } from '../styles/aboutStyles';

export default function AboutScreen() {
  const { logout } = useContext(AuthContext);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../assets/image.png')} style={styles.foto} />
      <View style={styles.card}>
        <Text style={styles.cardTitle}>👤 Identitas Mahasiswa</Text>
        <View style={styles.row}><Text style={styles.label}>Nama</Text><Text style={styles.value}>Clara</Text></View>
        <View style={styles.row}><Text style={styles.label}>NIM</Text><Text style={styles.value}>2410501116</Text></View>
        <View style={styles.row}><Text style={styles.label}>Kelas</Text><Text style={styles.value}>A</Text></View>
        <View style={styles.row}><Text style={styles.label}>Tema</Text><Text style={styles.value}>A - ResepKita</Text></View>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🔌 Credit API</Text>
        <Text style={styles.credit}>TheMealDB</Text>
        <Text style={styles.creditUrl}>themealdb.com</Text>
      </View>
      <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}