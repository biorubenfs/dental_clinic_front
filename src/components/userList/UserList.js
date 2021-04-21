import './UserList.css'

const UserList = (props) => {

    return (
        <div className="user-list">
            <div className="user-info">
                {props.user}
            </div>
            <div className="user-info">
                {props.email}
            </div>
            <div className="user-info">
                ID: {props.id}
            </div>
            <button className="select-id-btn" onClick={props.select}>Select</button>
        </div>
    );
}

export default UserList;