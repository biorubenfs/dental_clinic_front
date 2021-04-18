import './DashboardCard.css'

const DashboardCard = (props) => {

    return (
        <div className="card">
            <div className="row">
                <div className="column">
                    <div className="field doctor">
                        <strong>Doctor</strong>
                    </div>
                    <div className="field speciality">
                        <strong>Speciality</strong>
                    </div>
                </div>
                <div className="column">
                    <div className="field doctor">
                        {props.doctorName}
                    </div>
                    <div className="field speciality">
                        {props.speciality}
                    </div>
                </div>
            </div>
            <div className="pivot">
                <div className="date">
                    {props.date}
                </div>
                <div className="status-msg-dashboard">
                    Status: {props.status}
                </div>
            </div>
        </div>
    )
}

export default DashboardCard