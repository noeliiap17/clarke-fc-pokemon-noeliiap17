import React, { Component } from 'react';

class Pokemons extends Component{
	constructor(props){
		super(props);
		this.addType = this.addType.bind(this);
		this.state = {
			pokemonType: this.props.type
		};
	}
	addType(){
		let type = '';
		for (let i = 0; i< this.state.pokemonType.length; i++){
			type = type + ' ' + this.state.pokemonType[i].type.name;
		}
		return(
			<p className="ch-box">
				{type}
			</p>
		)
	}
	render(){
		const styleImage = {
			backgroundImage: `url(${this.props.image})`
		}
		return(
			<li className="pokemon__card">
					<div className="image" style = {styleImage}>
						<img height="0" width="0" src ={this.props.image} alt="Pokemons"></img>
            <div className="image__id">
              <p className="id">ID/ {this.props.id}</p>
            </div>
					</div>
          <div className="info">
            <h2 className="name">{this.props.name}</h2>
            <div className="characteristics">
              <p>{this.addType()}</p>
            </div>
          </div>
			</li>
		);
	}
}

export default Pokemons;
