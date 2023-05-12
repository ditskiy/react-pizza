import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import {Categories, SortPopap, PizzaBlock} from '../components';
import {setCategory} from "../redux/action/filters"

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
        {items && items.map((obj) => (
            <PizzaBlock 
                key={obj.id}
                {...obj}/>
        ))}
    </div>
  </div>
  )
}

export default Home