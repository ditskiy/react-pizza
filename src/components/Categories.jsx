import { memo } from 'react'


const Categories = memo(function Categories({activCategories, items, onClickItem}) {


  return (
    <div className='categories'>
        <ul>
        {items && items.map((name, index) => (<li
          className={activCategories === index ? "active" : ""}
          onClick={() => onClickItem(index)} 
          key={name}
          >{name}</li>))}
        </ul>
    </div>
  )
})

export default Categories