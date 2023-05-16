import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import {Categories, SortPopap, PizzaBlock, LoadingPizza } from '../components';
import {setCategory, setSortBy} from "../redux/action/filters"


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
  {name: "алфавиту", type: "name"},
]

function Home() {
  const dispatch = useDispatch();

  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoading = useSelector(({ pizzas }) => pizzas.isLoading);
  const { category, sortBy } = useSelector(({ filter }) => filter);


  useEffect(() => {
      dispatch(fetchPizzas(category, sortBy, sortItems))
  }, [category, sortBy]);


  const onSelectCategori = useCallback((index) => {
    dispatch(setCategory(index))
  }, [dispatch])

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type))
  }, [dispatch])

  const onClickAddPizza = useCallback((obj) => {
    console.log(obj)
  }, [])

  return (
    <div className='container'>
    <div className='content__top'>
    <Categories  
      activCategories={category}
      onClickItem={onSelectCategori}
      items={categoriesName}/>
      <SortPopap
      onSelectCategori={onSelectCategori}
        onClickSortType={onSelectSortType}
        activeSortType={sortBy}
        items={sortItems}/>
    </div>
    <h2 className='content__title'>Все пиццы</h2>
    <div className='content__items'>
        {isLoading ? items && items.map((obj) => (
            <PizzaBlock 
              onClickAddPizza={onClickAddPizza}
              key={obj.id}
              {...obj}/>
        )) : Array(12).fill(0).map((_, index) => <LoadingPizza key={index}/>)}
        
    </div>
  </div>
  )
}

export default Home