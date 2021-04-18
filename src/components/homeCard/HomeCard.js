import React, { Component } from 'react';
import './HomeCard.css'

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
            <div className="cards">
                <div className="picture">
                    <img src={this.state.img} alt="treatment picture"></img>
                </div>
                <div className="bottom-half">
                    <div className="title">
                        <h3>{this.state.title}</h3>
                    </div>
                    <div className="description">
                        <span>{this.state.text}</span>
                    </div>
                </div>
                <button className="card-button">
                    More info
                </button>
            </div>
        )
    }

}

export default Card;