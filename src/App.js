import './App.css';
import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

//This app will display all the characters of Dota 2.
class App extends Component {
  constructor() {
    super();

    this.state = {
      heroes: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://api.opendota.com/api/heroStats')
    .then(response => response.json())
    .then(users => this.setState({heroes: users}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render() {
    const {heroes, searchField} = this.state;
    const filteredHeroes = heroes.filter(hero => 
      hero.localized_name.toLowerCase().includes(searchField.toLowerCase())
      );
    return(
      <div className="App">
        <h1>Dota 2 Heroes</h1>
        <SearchBox
          placeholder='search heroes'
          handleChange={this.handleChange}
        />
        <CardList heroes = {filteredHeroes} />
    </div>
    );
  }
}

export default App;
