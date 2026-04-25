import { createContext, useReducer } from 'react';

export const FavoritContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD': return state.find(m => m.idMeal === action.payload.idMeal) ? state : [...state, action.payload];
    case 'REMOVE': return state.filter(m => m.idMeal !== action.payload);
    default: return state;
  }
};

export function FavoritProvider({ children }) {
  const [favorit, dispatch] = useReducer(reducer, []);
  const addFavorit = (meal) => dispatch({ type: 'ADD', payload: meal });
  const removeFavorit = (id) => dispatch({ type: 'REMOVE', payload: id });
  return (
    <FavoritContext.Provider value={{ favorit, addFavorit, removeFavorit }}>
      {children}
    </FavoritContext.Provider>
  );
}