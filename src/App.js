import React, { Component } from 'react';
import './App.css';
import PokemonList from './components/PokemonList';

class App extends Component {
  constructor(props){
    super(props);
		this.handleChange = this.handleChange.bind(this)
    this.state = {
      pokemons: [],
			valorInput:''
    };
  }
  componentDidMount(){
  		for (let pokemonID = 1; pokemonID <=25; pokemonID++) {
  		fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}/`)
  		.then(response => response.json())
  		.then(results => {
  			let listPokemons = this.state.pokemons;
  			listPokemons.push(results)
  			this.setState({
  				pokemons: listPokemons
  			});
  		})
  	}
  	}
handleChange(event){
  const searchCharacters = event.target.value
  this.setState({
    valorInput: searchCharacters.toLowerCase()
  });
}
  paintPokemons() {
		let listPokemons = this.state.pokemons;

    listPokemons = listPokemons.filter(element => element.name.toLowerCase().includes(this.state.valorInput.toLowerCase())
    );


    listPokemons = listPokemons.sort(function (a, b){
      return a.id - b.id;
    });

			return (
				listPokemons.map((pokemon, i) =>
								<PokemonList key={i} id={pokemon.id} name={pokemon.name} type={pokemon.types} image={pokemon.sprites.front_default} />)
		);
		};


  render() {
    return (
      <div className="App">
        <div className="App-background">
          <div className="App-principal">
            <header className="App-header">
              <div className="App-title">

              </div>
              <input className="search" placeholder=" Encuentra tu Pokémon favorito" onChange={this.handleChange}></input>
            </header>
            <main>
            <div className="Container__page">
    					<ul className="Container__pokemons">{this.paintPokemons()}</ul>
    				</div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
