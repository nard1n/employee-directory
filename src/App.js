import React, { Component } from 'react';
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
    search: "",
    searchData: [],
    directory: []
  }

  componentDidMount() {
    M.AutoInit();

    API.search()
      .then(res => this.setState({
        directory: res.data.results,
        searchData: res.data.results
      }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const value = event.target.value;
    let query = value.toLowerCase().trim();
    const searchData = this.state.searchData;
    let results = [];

    for (let i = 0; i < searchData.length; i++) {
      let person = searchData[i];
      let fullName = (person.name.first + " " + person.name.last).toLowerCase();
      console.log(fullName);
      if (query === fullName.substring(0, query.length)) {
        results.push(person);
      }
    }

    this.setState({
      search: value,
      directory: results
    });
  }

  render() {
    return (
      <>
        <NavBar />
        <Search change={this.handleInputChange} />
        <EmployeeList employees={this.state.directory} />

      </>
    );
  }
}

export default App;
