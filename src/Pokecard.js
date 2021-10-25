import React, { Component } from 'react';
import './Pokecard.css'

// 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png'
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

const padToThree = function (num) {
    if (num > 999) {
        return num
    } else {
        return `00${num}`.slice(-3)
    }

}

class Pokecard extends Component {
    render() {
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <div className="Pokecard-image">
                    <img src={imgSrc} alt="" />
                </div>
                <div className="Pokecard-data">Type: {this.props.type}</div>
                <div className="Pokecard-data">EXP: {this.props.exp}</div>
            </div>
        )
    }
}

export default Pokecard