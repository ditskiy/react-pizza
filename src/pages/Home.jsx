import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import {Categories, SortPopap, PizzaBlock, LoadingPizza } from '../components';
import {setCategory} from "../redux/action/filters"


import { fetchPizzas } from '../redux/action/pizzas';


const categoriesName = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые"
]
const sortItems = [
  {name: "популярности", type: "popular"},
  {name: "цене", type: "price"},
  {name: "алфавиту", type: "alphabet"},
]

function Home() {
  const dispatch = useDispatch();

  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoading = useSelector(({ pizzas }) => pizzas.isLoading);


  useEffect(() => {
      dispatch(fetchPizzas())
  }, []);


  const onSelectCategori = useCallback((index) => {
    dispatch(setCategory(index))
  }, [])

  return (
    <div className='container'>
    <div className='content__top'>
    <Categories  
      onClickItem={onSelectCategori}
      items={categoriesName}/>
      <SortPopap items={sortItems}/>
    </div>
    <h2 className='content__title'>Все пиццы</h2>
    <div className='content__items'>
        {isLoading ? items && items.map((obj) => (
            <PizzaBlock  
                key={obj.id}
                {...obj}/>
        )) : Array(12).fill(<LoadingPizza/>)}
        
    </div>
  </div>
  )
}

export default Home