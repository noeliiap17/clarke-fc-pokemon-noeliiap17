import React from 'react';
import CardPokemon from './CardPokemon';

export default class PokemonList extends React.Component {
  render(){

    return(
      <ul className="">
        {
          this.props.poke.map(({ id, sprites,name, types}) =>
            <CardPokemon key={id} number={id} sprite={sprites.front_default} name={name} observer={this.props.observer}
            types= {types.sort((typeNumber) => typeNumber.slot).map((typeNumber) => typeNumber.type.name)} />
          )
        }
      </ul>
    )
  }
}
