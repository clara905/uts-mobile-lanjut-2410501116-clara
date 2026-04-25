const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchMeals = async (category = 'Seafood') => {
  const res = await fetch(`${BASE_URL}/filter.php?c=${category}`);
  const data = await res.json();
  return data.meals;
};