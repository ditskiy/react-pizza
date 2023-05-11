import { createStore } from '@reduxjs/toolkit'; 

import rootReduser from "./reducers/"



const store = createStore(rootReduser, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;