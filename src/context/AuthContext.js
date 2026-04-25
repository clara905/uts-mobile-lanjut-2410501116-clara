import { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  const register = (nama, email, password) => {
    const already = users.find(u => u.email === email);
    if (already) return { success: false, message: 'Email sudah terdaftar!' };
    setUsers([...users, { nama, email, password }]);
    return { success: true };
  };

  const login = (email, password) => {
    const found = users.find(u => u.email === email && u.password === password);
    if (!found) return { success: false, message: 'Email atau password salah!' };
    setUser(found);
    return { success: true };
  };

  const logout = () => setUser(null);

  const resetPassword = (email, newPassword) => {
    const found = users.find(u => u.email === email);
    if (!found) return { success: false, message: 'Email tidak ditemukan!' };
    setUsers(users.map(u => u.email === email ? { ...u, password: newPassword } : u));
    return { success: true };
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, resetPassword }}>
      {children}
    </AuthContext.Provider>
  );
}