import { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { authStyles as styles } from '../../styles/authStyles';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const { login } = useContext(AuthContext);

  const validate = () => {
    const e = {};
    if (!email) e.email = 'Email wajib diisi';
    if (!password) e.password = 'Password wajib diisi';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleLogin = () => {
    if (!validate()) return;
    const result = login(email, password);
    if (!result.success) Alert.alert('Login Gagal', result.message);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ResepKita 🍳</Text>
      <Text style={styles.subtitle}>Masuk ke akun kamu</Text>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
      {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      {errors.password ? <Text style={styles.error}>{errors.password}</Text> : null}
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgot}>Lupa password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={handleLogin}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Belum punya akun? <Text style={styles.linkBold}>Daftar</Text></Text>
      </TouchableOpacity>
    </View>
  );
}