import React from 'react'
import {Categories, SortPopap, PizzaBlock} from '../components';

function Home({menu}) {
  return (
    <div className='container'>
    <div className='content__top'>
    <Categories  items={[
        "Все",
        "Мясные",
        "Вегетарианская",
        "Гриль",
        "Острые",
        "Закрытые"
      ]}/>
      <SortPopap items={[
        {name: "популярности", type: "popular"},
        {name: "цене", type: "price"},
        {name: "алфавиту", type: "alphabet"},
      ]}/>
    </div>
    <h2 className='content__title'>Все пиццы</h2>
    <div className='content__items'>
        {menu.map((obj) => (
            <PizzaBlock 
                key={obj.id}
                {...obj}/>
        ))}
    </div>
  </div>
  )
}

export default Home