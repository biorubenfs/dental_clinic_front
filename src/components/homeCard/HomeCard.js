import React, { Component } from 'react';
import './Card.css'

class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            img: props.img,
            title: props.title,
            text: props.text
        }
    }
    render() {
        return (
            <div className='cards'>
                <img src={this.state.img} alt='orthodontics'></img>
                <h3>{this.state.title}</h3>
                <span className='text'>{this.state.text}</span>
            </div>
        )
    }

}

export default Card;