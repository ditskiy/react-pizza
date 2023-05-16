import axios from 'axios';

export const setLoading = (payload) => ({
    type: "SET_LOADING",
    payload,
})

export const fetchPizzas = (category, sortBy) => (dispatch) => {
    dispatch(setLoading(false));
    axios.get(`http://localhost:3004/pizzas?${
        category !== 0 ? `category=${category}` : ""
        }&${
        sortBy === "name" ? `_sort=${sortBy}&_order=asc` : `_sort=${sortBy}&_order=desc` }`).then(({ data }) => {
        dispatch(setPizzas(data));
      });
}

export const setPizzas = (items) => ({
    type: "SET_PIZZAS",
    payload: items,
})
