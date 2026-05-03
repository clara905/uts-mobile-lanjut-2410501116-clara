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

## refleksi
Selama mengerjakan proyek UTS ini, saya mendapatkan banyak pengalaman berharga 
dalam pengembangan aplikasi mobile menggunakan React Native dan Expo. Proyek ini 
cukup menantang karena saya harus membangun aplikasi dari nol dengan berbagai 
fitur yang terintegrasi satu sama lain.

Kesulitan pertama yang saya hadapi adalah mengatur struktur navigasi kombinasi 
Stack Navigator dan Bottom Tab Navigator. Awalnya saya bingung bagaimana cara 
passing params dari HomeScreen ke DetailScreen karena berada di dalam Stack yang 
berbeda. Setelah mencoba beberapa pendekatan, akhirnya saya memahami bahwa params 
harus diakses melalui route.params di screen tujuan.

Bug terbesar yang pernah muncul adalah error "Element type is invalid: expected 
a string but got undefined". Error ini muncul berkali-kali dan cukup membuat 
frustasi karena pesannya tidak langsung menunjukkan file mana yang bermasalah. 
Setelah ditelusuri, ternyata penyebabnya adalah file context seperti AuthContext 
dan FavoritContext belum dibuat namun sudah diimport di navigator. Saya belajar 
bahwa setiap file yang diimport harus benar-benar ada dan memiliki export default 
yang benar.

Kesulitan lain yang saya alami adalah saat mengimplementasikan Context API untuk 
state management favorit. Saya harus memahami konsep useReducer yang berbeda dari 
useState biasa, terutama dalam mendefinisikan reducer function dan dispatch action 
yang tepat.

Secara keseluruhan, proyek ini sangat membantu saya memahami konsep React Native 
secara lebih mendalam, terutama dalam hal navigasi, state management, integrasi 
API, dan pengelolaan struktur project yang rapi.

## referensi
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
