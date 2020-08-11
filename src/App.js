import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import {BrowserRouter,Switch ,Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'
import {auth} from './firebase/firebase.utils'; 

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser : null
    }
  }
  unsubscrbeFromAuth =null;

  componentDidMount(){
    this.unsubscrbeFromAuth=auth.onAuthStateChanged(user => {
      this.setState({ currentUser : user});

      console.log(user);
    });
  }
  componentWillUnmount(){
    this.unsubscrbeFromAuth();
  }
  render(){
      return (
    <div >
      <BrowserRouter>
      <Header currentUser={this.state.currentUser}/>

      <Switch>
      <Route exact path='/' component={HomePage}/>

      <Route  path='/shop' component={ShopPage}/>
      <Route  path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
      </BrowserRouter>
      </div>
  );
}
}
export default App;
