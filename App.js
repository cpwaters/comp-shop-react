import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './assets/logo.svg';
import redux from './assets/redux.svg';
import node from './assets/nodejs-icon.svg';
import fbase from './assets/firebase-1.svg';
import banner1 from './assets/comp-banner-2-mobileFade.png';
import './App.css';
import Nav from './components/nav/nav';
import Home from './components/home';
import About from './components/about';
import Drinks from './components/drinks/drink';
import Dash from './components/dashboards/dashboard';
import DrinkDash from './components/dashboards/drinkDash';
import FoodDash from './components/dashboards/foodDash';
import HhDash from './components/dashboards/hhDash';
import Food from './components/foods/food';
import Household from './components/hhs/hh';
import Login from './components/auth/login';
import Signup from './components/auth/signup';
import Admin from './components/admin/admin';
import AddDrink from './components/admin/addDrink';
import AddFood from './components/admin/addFood';
import AddHh from './components/admin/addHh';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class App extends Component {
  render() {
    const { profile } = this.props
    return (
      <BrowserRouter>
        <div className="App wrapper">
        <h2 className="top-banner">Built with React
          <img src={logo} className="App-logo" alt="logo" />
          <Link className="initials" to="/">{profile.initials}</Link>
          {/*<img src={redux} className="App-logo" alt="logo" />
          <img src={node} className="App-logo" alt="logo" />
          <img src={fbase} className="App-logo" alt="logo" />*/}
          </h2>
          <header className="App-header">
            <img src={banner1} className="Comp-logo" alt="company logo" />
          </header>
          <Nav />
          <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dash} />
            <Route path="/drinkDash" component={DrinkDash} />
            <Route path="/drinks/:id" component={Drinks} />
            <Route path="/foodDash" component={FoodDash} />
            <Route path="/foods/:id" component={Food} />
            <Route path="/hhDash" component={HhDash} />
            <Route path="/hhs/:id" component={Household} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/admin" component={Admin} />
            <Route path="/adddrink" component={AddDrink} />
            <Route path="/addfood" component={AddFood} />
            <Route path="/addhousehold" component={AddHh} />
          </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return{
      profile: state.firebase.profile,
      drinks: state.firestore.ordered.drinks
  }
}

export default connect(mapStateToProps)(App)
// This is the root component
// This is the Parent component
// This is the container / class-based / has-state component