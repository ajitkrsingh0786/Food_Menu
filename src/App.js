import React,{Component} from 'react';
//import logo from './logo.svg';
import {Navbar,NavbarBrand} from 'reactstrap';
import './App.css';
//import { render } from '@testing-library/react';
import Menu from './Components/MenuComponent';
class App extends Component {
render(){
  return (
    <div className="App">
       <Navbar dark color="primary">
         <div className="container"> 
         
        <NavbarBrand href="/">Resonant can fuse</NavbarBrand>
        
        </div>
        </Navbar>
            <Menu/>
    </div>
  );
}

}
 
export default App;