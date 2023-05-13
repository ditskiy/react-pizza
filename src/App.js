import { Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchPizzas } from './redux/action/pizzas';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas())
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
