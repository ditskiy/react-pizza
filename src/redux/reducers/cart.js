const initialState = {
  items: {},
  totalPrice: 0,
  itemCount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART': {
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id] 
        ? [action.payload] 
        : [...state.items[action.payload.id], action.payload],
      };

      const allPizzas =  [].concat.apply([], Object.values(newItems))
      const totalPrice = allPizzas.reduce((sum, obj) => obj.price + sum, 0)

      return {
        ...state,
        items: newItems,
        itemCount: allPizzas.length,
        totalPrice, 
      };
    }

    default:
      return state;
  }
};

export default cart;
