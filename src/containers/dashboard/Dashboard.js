import AppointmentCard from '../../components/appointmentCard/AppointmentCard'
import DashboardCard from '../../components/dashboardCard/DashboardCard'
import './Dashboard.css'

const Dashboard = () => {

    return (
        <div className="appointments">
            <strong>Dashboard</strong>
            <div className="appointments-grid">
                <div className="appointment-cards">
                    <DashboardCard clientName="Client" email="email@email.com" doctorName="Doctor"
                    speciality="All" id="1" date="2021-19-04" status="pending" cancelBtn="cancel"></DashboardCard>
                </div>
            </div>
            <div className="pagination">
                {/* <a href="#" onClick={() => previousPage()}>prev</a>
                <div>page 1 of {count}</div>
                <a href="#" onClick={() => nextPage()}>next</a> */}
            </div>
        </div>
    )
}

export default Dashboard