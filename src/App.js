import React,{Component} from 'react';
//import logo from './logo.svg';
import {Navbar,NavbarBrand} from 'reactstrap';
import './App.css';
import {DISHES} from './shared/dishes';
//import { render } from '@testing-library/react';
import Menu from './Components/MenuComponent';
class App extends Component {
  constructor(props){
    super(props);
      this.state ={
           dishes:DISHES
      }
  }
  

render(){
  return (
    <div className="App">
       <Navbar dark color="primary">
         <div className="container"> 
         
        <NavbarBrand href="/">Resonant can fuse</NavbarBrand>
        
        </div>
        </Navbar>
            <Menu dishes={this.state.dishes}/>
    </div>
  );
}

}
 
export default App;
