import { combineReducers } from "@reduxjs/toolkit";

import filterReduser from "./filters"
import pizzasReduser from "./pizzas"


const rootReducer = combineReducers({
  filter: filterReduser,
  pizzas: pizzasReduser
})

export default rootReducer;