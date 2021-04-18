import './AppointmentCard.css'


const AppointmentCard = (props) => {

    return (
        <div className="card">
            <div className="row">
                <div className="column">
                    <div className="field client">
                        <strong>Client</strong>
                    </div>
                    <div className="field email">
                        <strong>Email</strong>
                    </div>
                    <div className="field doctor">
                        <strong>Doctor</strong>
                    </div>
                    <div className="field speciality">
                        <strong>Speciality</strong>
                    </div>
                </div>
                <div className="column">
                    <div className="field client">
                        {props.clientName}
                    </div>
                    <div className="field email">
                        {props.email}
                    </div>
                    <div className="field doctor">
                        {props.doctorName}
                    </div>
                    <div className="field speciality">
                        {props.speciality}
                    </div>
                </div>
            </div>
            <div className="pivot">
                <div className="id-info">
                    <div className="id-label">ID:</div>
                    <div className="appointment-id">
                        {props.id}
                    </div>
                </div>
                <div className="date">
                    {props.date}
                </div>
                <div className="status">
                    <div className="status-msg">Status: {props.status}</div>
                    <div><a className="cancel-btn" href="#" onClick={props.cancelBtn}>Cancel</a></div>
                </div>
            </div>
        </div>
    );
}

export default AppointmentCard