import './AppointmentCard.css'


const AppointmentCard = (props) => {

    return (
        <div className="card">
            <div className="row">
                <div className="column">
                    <div className="field">
                        <strong>Client</strong>
                    </div>
                    <div className="field">
                        <strong>Email</strong>
                    </div>
                    <div className="field">
                        <strong>Doctor</strong>
                    </div>                    
                    <div className="field">
                        <strong>Speciality</strong>
                    </div>                    
                </div>
                <div className="column">
                <div className="field">
                        {props.clientName}
                    </div>
                    <div className="field">
                        {props.email}
                    </div>
                    <div className="field">
                        {props.doctorName}
                    </div>
                    <div className="field">
                        {props.speciality}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="appointment-id">
                    ID: {props.id}
                </div>
                <div className="date">
                    {props.date}
                </div>
                <div className="status">
                    <div className="status-msg">Status: {props.status}</div>
                    <div><a className="cancel-btn" href="http://localhost:3000/">Cancel</a></div>
                </div>
            </div>
        </div>
    );
}

export default AppointmentCard