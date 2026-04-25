import { NavigationContainer } from '@react-navigation/native';
import { FavoritProvider } from './src/context/FavoritContext';
import { AuthProvider } from './src/context/AuthContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <AuthProvider>
      <FavoritProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </FavoritProvider>
    </AuthProvider>
  );
}