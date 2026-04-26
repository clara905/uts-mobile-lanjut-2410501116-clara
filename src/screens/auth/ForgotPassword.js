import { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { authStyles as styles } from '../../styles/authStyles';

export default function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [konfirmasi, setKonfirmasi] = useState('');
  const [errors, setErrors] = useState({});
  const { resetPassword } = useContext(AuthContext);

  const validate = () => {
    const e = {};
    if (!email) e.email = 'Email wajib diisi';
    if (newPassword.length < 6) e.newPassword = 'Password minimal 6 karakter';
    if (newPassword !== konfirmasi) e.konfirmasi = 'Password tidak cocok';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleReset = () => {
    if (!validate()) return;
    const result = resetPassword(email, newPassword);
    if (!result.success) { Alert.alert('Gagal', result.message); return; }
    Alert.alert('Berhasil!', 'Password berhasil direset!', [
      { text: 'OK', onPress: () => navigation.navigate('Login') }
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleSmall}>Reset Password</Text>
      <Text style={styles.subtitle}>Masukkan email dan password baru kamu</Text>
      <TextInput style={styles.input} placeholder="Email terdaftar" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
      {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}
      <TextInput style={styles.input} placeholder="Password baru" value={newPassword} onChangeText={setNewPassword} secureTextEntry />
      {errors.newPassword ? <Text style={styles.error}>{errors.newPassword}</Text> : null}
      <TextInput style={styles.input} placeholder="Konfirmasi password baru" value={konfirmasi} onChangeText={setKonfirmasi} secureTextEntry />
      {errors.konfirmasi ? <Text style={styles.error}>{errors.konfirmasi}</Text> : null}
      <TouchableOpacity style={styles.btn} onPress={handleReset}>
        <Text style={styles.btnText}>Reset Password</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Kembali ke Login</Text>
      </TouchableOpacity>
    </View>
  );
}