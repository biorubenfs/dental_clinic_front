import './AlertPopUp.css';

const AlertPopUp = (props) => {
    return (
        <div className="alert-pop-up">
            <div className="ask-msg">
                Are you sure?
            </div>
            <div className="confirm-btns">
                <button className="card-button" onClick={props.cancel}>Yes</button>
                <button className="card-button" onClick={props.cancelNot}>No!</button>
            </div>
        </div>
    )
}

export default AlertPopUp;