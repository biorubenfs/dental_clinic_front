import './AppointmentCard.css'


const AppointmentCard = (props) => {

    return (
        <div className="card">
            <div className="row">
                <div className="date">
                    {props.date}
                </div>
                <div className="status">
                    {props.status}
                </div>
            </div>
            <div className="row">
                <div className="field">
                    Client
                </div>
                <div className="field">
                    Doctor
                </div>
            </div>
            <div className="row">
                <div className="field">
                    {props.clientName}
                </div>
                <div className="field">
                    {props.doctorName}
                </div>
            </div>
            <div className="row">
                <div className="field">
                    {props.email}
                </div>
                <div className="field">
                    {props.speciality}
                </div>
            </div>
        </div>
    );
}

export default AppointmentCard