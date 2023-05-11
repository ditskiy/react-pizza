import { Route } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import {Header} from './components';
import {Home, Cart} from './pages';
import { useEffect } from 'react';
// import setPizzas from "./redux/action/pizzas"


function App() {

  useEffect(() => {
    axios.get("http://localhost:3000/db.json")
      .then(({data}) => {
        this.props.dispatch(setPizzas(data.pizzas))
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

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items
  }
}

export default connect(mapStateToProps)(App);
