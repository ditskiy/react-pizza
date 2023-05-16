import { useSelector } from 'react-redux';
import Button from './Button';
import logoSvg from '../assets/img/pizza-logo.svg';

import { Link } from 'react-router-dom';

function Header() {

  const {totalPrice, itemCount} = useSelector(({ cart }) => ({
    totalPrice: cart.totalPrice,
    itemCount: cart.itemCount,
  }));

  return (
    <div className='header'>
      <div className='container'>
        <Link to="/">
          <div className='header__logo'>
            <img width='38' src={logoSvg} alt='Pizza logo' />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <Link to="/cart">
          <Button 
            totalPrice={totalPrice}
            itemCount={itemCount}/>
        </Link>
      </div>
    </div>
  );
}

export default Header;
