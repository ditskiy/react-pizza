import { Route } from 'react-router-dom';
import axios from 'axios';
import { Header } from './components';
import { Home, Cart } from './pages';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setPizzas } from './redux/action/pizzas';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3004/pizzas').then(({ data }) => {
      dispatch(setPizzas(data));
    });
  }, []);

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Route exact path='/' component={Home} />
        <Route path='/cart' component={Cart} />
      </div>
    </div>
  );
}

export default App;
