import hash from '../../utils/hash'

const STORAGE_STATE = localStorage.cart ? JSON.parse(localStorage.cart) : null
const EMPTY_STATE = { glasses: [], quantity: 0, total: 0 };
const INITIAL_STATE =  STORAGE_STATE || EMPTY_STATE;

const calculateTotal = (state) => {
  let total = 0;
  state.map(glasses => total += parseFloat(glasses.value));
  return total;
}

const addGlassesFromState = (state, glasses) => {
  const newGlassesState = [...state.glasses, glasses];
  const newTotal = calculateTotal(newGlassesState);
  const newState = { glasses: newGlassesState, quantity: newGlassesState.length, total: newTotal };

  localStorage.setItem('cart', JSON.stringify(newState));
  return newState;
}

const removeGlassesFromState = (state, glasses) => {
  const newGlassesState = state.glasses.filter(value => hash(value) !== hash(glasses));
  const newTotal = calculateTotal(newGlassesState);
  const newState = { glasses: newGlassesState, quantity: newGlassesState.length, total: newTotal };

  localStorage.setItem('cart', JSON.stringify(newState));
  return newState;
}

export default (state = INITIAL_STATE, action) => {
  let newState = state
  switch(action.type) {
    case 'ADD_TO_CART': 
      newState = addGlassesFromState(state, action.glasses);
      return newState;

    case 'REMOVE_FROM_CART':
      newState = removeGlassesFromState(state, action.glasses);
      return newState;

    case 'CLEAR_CART':
      localStorage.clear();
      return INITIAL_STATE;

    default: return state;
  }
};
