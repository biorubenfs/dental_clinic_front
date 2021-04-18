import './AlertPopUp.css';

const AlertPopUp = (props) => {
    return (
        <div className="alert-pop-up">
            <div className="ask-msg">
                Are you sure?
            </div>
            <div className="confirm-btns">
                <a className="yes-btn" href="#" onClick={props.cancel}>Yes</a>
                <a className="no-btn" href="#" onClick={props.cancelNot}>No!</a>
            </div>
        </div>
    )
}

export default AlertPopUp;