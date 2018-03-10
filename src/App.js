import React, { Component } from 'react';
import './App.css';
import NameCharacter from './components/Name';

class App extends Component {
  constructor(props){
    super(props);
		// this.handleChange = this.handleChange.bind(this)
    this.state = {
      pokemons: [],
			valorInput:''
    };
  }
  componentDidMount() {
		fetch ('http://pokeapi.salestock.net/api/v2/pokemon/')
		.then(request => request.json())
		.then(json => {
			this.setState({
				pokemons: json,
			});
			console.log(this.state.pokemons.results[0].name);
		});
	}
//   paintPokemons() {
// 		const listName = this.state.pokemons.filter(item => item.name.toLowerCase().includes(this.state.valorInput));
//
// 		return listName.map(item => {
// 			return (<li>
// 			<NameCharacter name={item.name} />
// 			// <img src={item.image} className="image" />
// 			// <div className="container__info">
// 			// <div className={`icon house_${item.house.toLowerCase()}`}></div>
// 			// <div className={`icon alive_${item.alive? 'live': 'dead'.toLowerCase()}`}></div>
// 			// </div>
// 			</li>)
// 		});
// }
// handleChange(event){
//   const searchCharacters = event.target.value
//   //console.log(writting)
//   this.setState({
//     valorInput: searchCharacters.toLowerCase()
//   });
// }
  render() {
    return (
      <div className="App">
        <div className="App-background">
          <div className="App-principal">
            <header className="App-header">
              <div className="App-title">

              </div>
              <input className="search" placeholder=" Encuentra tu Pokémon favorito"></input>
            </header>
            <main>
            <div className="Container-page">
    					<ul className="Container-pokemons"></ul>
    				</div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
