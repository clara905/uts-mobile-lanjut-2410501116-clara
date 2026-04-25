const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchMeals = async (category = 'Seafood') => {
  try {
    const res = await fetch(`${BASE_URL}/filter.php?c=${category}`);
    const data = await res.json();
    return data.meals || [];
  } catch (error) {
    console.log('Error fetch meals:', error);
    return [];
  }
};

export const fetchMealDetail = async (id) => {
  const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
  const data = await res.json();
  return data.meals[0];
};