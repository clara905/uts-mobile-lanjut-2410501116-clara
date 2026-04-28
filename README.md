# ResepKita 🍳

Nama: Clara Ragil Dewanti  
NIM: 2410501116 
Kelas: A  
Tema: A - ResepKita (API: themealdb.com)

## Tech Stack
- React Native + Expo SDK 51
- @react-navigation/native, stack, bottom-tabs
- Context API + useReducer 

## Cara Install & Run
npx create-expo-app resepkita
cd resepkita
npx expo install @react-navigation/native react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
npm install @react-navigation/stack @react-navigation/bottom-tabs
npx expo install @expo/vector-icons
npm install
npx expo start

Scan QR dengan Expo Go.

## Screenshots
![home] (assets/home.png)
![error] (assets/error.png)
![favorit] (assets/Favorit.png)
![search] (assets/search.png)
![passwordGagal] (assets/passwordGagal.png)
![gagalDaftar] (assets/gagalDaftar.png)

## Video Demo
https://drive.google.com/drive/folders/19IFJcQOuZ7fsLL66RQLoHoYMd8_ZaLUw?usp=sharing

## Justifikasi State Management
Dipilih Context API + useReducer karena state yang dikelola hanya daftar favorit (sederhana), tidak memerlukan middleware, dan tidak menambah dependency eksternal.

## Daftar Referensi
- [TheMealDB API](https://www.themealdb.com/api.php)
- [React Navigation Docs](https://reactnavigation.org/docs/getting-started)
- [Expo Docs](https://docs.expo.dev)
- [React Native Docs](https://reactnative.dev/docs/getting-started)


## Referensi
1. TheMealDB API Documentation — https://www.themealdb.com/api.php
2. React Navigation Getting Started — https://reactnavigation.org/docs/getting-started
3. React Navigation Stack Navigator — https://reactnavigation.org/docs/stack-navigator
4. React Navigation Bottom Tabs — https://reactnavigation.org/docs/bottom-tab-navigator
5. Expo Documentation — https://docs.expo.dev
6. Expo Vector Icons — https://docs.expo.dev/guides/icons
7. React Native FlatList — https://reactnative.dev/docs/flatlist
8. React Native TextInput — https://reactnative.dev/docs/textinput
9. React Context API — https://react.dev/reference/react/createContext
10. React useReducer Hook — https://react.dev/reference/react/useReducer
11. React Native Share API — https://reactnative.dev/docs/share
12. React Native RefreshControl — https://reactnative.dev/docs/refreshcontrol
