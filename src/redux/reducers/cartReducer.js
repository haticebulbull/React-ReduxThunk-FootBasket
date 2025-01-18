import Types from "../actionTypes";
const initialState = {
  cart: [],
  isLoading: true,
  error: null,
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.CART_LOADING:
      return { ...state, isLoading: true };
    case Types.CART_ERROR:
      return { ...state, isLoading: false, error: payload?.message };
    case Types.CART_SUCCESS:
      return { ...state, isLoading: false, error: null, cart: payload };
    case Types.CREATE_ITEM:
      return {
        ...state,
        cart: state.cart.concat(payload),
      };

    case Types.UPDATE_ITEM:
      // aksiyonun payload'ı ile gelen güncel elemanın dizideki eski halini güncelle
      const updated = state.cart.map((i) =>
        i.id === payload.id ? payload : i
      );
      return { ...state, cart: updated };

    case Types.DELETE_ITEM:
      const filtered = state.cart.filter((i) => i.id !== payload);
      return { ...state, cart: filtered };
    default:
      return state;
  }
};

export default cartReducer;
