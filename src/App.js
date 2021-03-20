import React, {Component} from 'react';
//import components
import NavBar from'./components/NavBar/NavBar';
import Search from'./components/SearchBar/Search';
import EmployeeList from'./components/EmployeeList/EmployeeList';
import EmployeeCard from'./components/EmployeeCard/EmployeeCard';
//import materialize
import M from 'materialize-css';
//import apis
import API from './utils/API';

class App extends Component{
  state = {

  }
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <>
        <NavBar />
        <Search />
      </>
    );
  }
}

export default App;
