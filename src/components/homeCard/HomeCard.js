import './HomeCard.css'

const Card = (props) => {

    return (
        <div className="cards">
            <div className="picture">
                <img src={props.img} alt="treatment"></img>
            </div>
            <div className="bottom-half">
                <div className="title">
                    <h3>{props.title}</h3>
                </div>
                <div className="description">
                    <span>{props.text}</span>
                </div>
            </div>
            <button className="card-button">
                More info
            </button>
        </div>
    )

}

export default Card;