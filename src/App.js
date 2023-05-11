import { Route } from 'react-router-dom';
import axios from 'axios';
import {Header} from './components';
import {Home, Cart} from './pages';
import { useEffect, useState } from 'react';


function App() {
  const [menu, setMenu] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/db.json")
      .then(({data}) => {
        setMenu(data.pizzas)
      })
  }, [])

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Route exact path="/" render={() => <Home menu={menu}/>}/>
        <Route path="/cart" component={Cart}/>
      </div>
    </div>
  );
}

export default App;
