import './UserList.css'

const UserList = (props) => {

    return (
        <div className="user-list">
            <div className="user-name">
                {props.user}
            </div>
            <div className="user-id">
                ID: {props.id}
            </div>
        </div>
    );
}

export default UserList;