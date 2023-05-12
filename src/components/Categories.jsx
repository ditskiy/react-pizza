import { memo, useState } from 'react'


const Categories = memo(function Categories({items, onClickItem}) {

  const [activeItem, setActiveItem] = useState(0)

  const onSelectItem = (index) => {
    setActiveItem(index)
    onClickItem(index)
  }

  return (
    <div className='categories'>
        <ul>
        {items && items.map((name, index) => (<li
          className={activeItem === index ? "active" : ""}
          onClick={() => onSelectItem(index)} 
          key={name}
          >{name}</li>))}
        </ul>
    </div>
  )
})

export default Categories