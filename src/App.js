import React, { Component } from 'react';
import { CardList } from './components/cardlist/card-list.component'
import logo from './Assets/logo.png'
import './App.css';
class App extends Component {
  constructor(props){
    super(props);
      this.state ={
        monsters:[],
        searchField: ""
      };
  }

 async componentDidMount(){
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then (response => response.json())
    .then (users => this.setState({ monsters: users }))
    .catch(Error);
  }

render(){
  const { searchField , monsters } = this.state;
  
  const SearchFilters = monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );
  return (
    <div className="App"> 
      <img className="imag" src={logo} alt="Logo" /><br/>
      <input type="search" className="form-control" placeholder="Search" onChange={e=> this.setState({searchField: e.target.value}) }/>        
      <CardList monsters={SearchFilters}/>
      {this.state.monsters ? <div>Hey!</div> : null }
    </div>
  );
}
}
export default App;