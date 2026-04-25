import { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { AuthContext } from '../../context/AuthContext';

export default function RegisterScreen({ navigation }) {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [konfirmasi, setKonfirmasi] = useState('');
  const [errors, setErrors] = useState({});
  const { register } = useContext(AuthContext);

  const validate = () => {
    const e = {};
    if (!nama) e.nama = 'Nama wajib diisi';
    if (!email) e.email = 'Email wajib diisi';
    if (password.length < 6) e.password = 'Password minimal 6 karakter';
    if (password !== konfirmasi) e.konfirmasi = 'Password tidak cocok';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleRegister = () => {
    if (!validate()) return;
    const result = register(nama, email, password);
    if (!result.success) { Alert.alert('Gagal', result.message); return; }
    Alert.alert('Berhasil!', 'Akun berhasil dibuat. Silakan login.', [
      { text: 'OK', onPress: () => navigation.navigate('Login') }
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Akun</Text>

      <TextInput
        style={styles.input}
        placeholder="Nama lengkap"
        value={nama}
        onChangeText={setNama}
      />
      {errors.nama ? <Text style={styles.error}>{errors.nama}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Password (min. 6 karakter)"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {errors.password ? <Text style={styles.error}>{errors.password}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Konfirmasi password"
        value={konfirmasi}
        onChangeText={setKonfirmasi}
        secureTextEntry
      />
      {errors.konfirmasi ? <Text style={styles.error}>{errors.konfirmasi}</Text> : null}

      <TouchableOpacity style={styles.btn} onPress={handleRegister}>
        <Text style={styles.btnText}>Daftar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Sudah punya akun? <Text style={styles.linkBold}>Login</Text></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 24 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 10, padding: 12, marginBottom: 4, fontSize: 15 },
  error: { color: 'red', fontSize: 12, marginBottom: 8 },
  btn: { backgroundColor: '#e76f51', padding: 14, borderRadius: 10, alignItems: 'center', marginBottom: 16, marginTop: 8 },
  btnText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  link: { textAlign: 'center', color: 'gray' },
  linkBold: { color: '#e76f51', fontWeight: 'bold' },
});