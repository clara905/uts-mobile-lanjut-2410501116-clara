import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { FavoritProvider } from './src/context/FavoritContext';


export default function App() {
  return (
    <FavoritProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </FavoritProvider>
  );
}