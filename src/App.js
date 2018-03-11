import React, { Component } from 'react';
import './App.css';
import PokemonList from './components/PokemonList';

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
    for (let i = 1; i <= 25; i++) {
		fetch (`https://pokeapi.co/api/v2/pokemon/${i}/`)
		.then(request => request.json())
		.then(json => {
			this.setState({
				pokemons: json,
			});
			// console.log(pokemons);
		});
	}
}
  paintPokemons() {
		let listPokemons = this.state.pokemons;

    listPokemons = listPokemons.filter(element => element.name.toLowerCase().includes(this.state.valorInput.toLowerCase())
    );

    listPokemons = listPokemons.sort(function (a, b){
      return a.id - b.id;
    });

			return (<section className="container">
         <div></div>
        <PokemonList poke={listPokemons} observer={this.observer} />
      </section>)
		};

handleChange(event){
  const searchCharacters = event.target.value
  this.setState({
    valorInput: searchCharacters.toLowerCase()
  });
}
  render() {
    return (
      <div className="App">
        <div className="App-background">
          <div className="App-principal">
            <header className="App-header">
              <div className="App-title">

              </div>
              <input className="search" placeholder=" Encuentra tu Pokémon favorito" onChange={this.handleClick}></input>
            </header>
            <main>
            <div className="Container-page">
    					<ul className="Container-pokemons">{this.paintPokemons()}</ul>
    				</div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
