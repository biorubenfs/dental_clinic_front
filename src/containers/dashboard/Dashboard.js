import React, { useEffect, useState } from "react";
import AppointmentMessage from "../../components/appointmentMessage/AppointmentMessage";
import DashboardCard from '../../components/dashboardCard/DashboardCard'
import fetchDashboard from '../../services/fetchDashboard'
import './Dashboard.css'

const Dashboard = () => {

    const [error, setError] = useState(null);
    const [results, setResults] = useState(null);

    useEffect(() => {
        getAppointments();
    }, []);

    const getAppointments = async () => {

        try {
            const res = await fetchDashboard();
            const json = await res.json();
            const { Appointments } = json;

            setResults(Appointments)

            if (Appointments.length < 1) {
                setError(0);
            }

        } catch (e) {
            console.log(e)
            setError(1);
        }
    }

    let msg;

    if (error === 0) {
        msg = <AppointmentMessage msg="There is currently no appointments to show"></AppointmentMessage>
    } else if (error === 1) {
        msg = <AppointmentMessage msg="Internal server error"></AppointmentMessage>
    }


    return (
        <div className="appointments">
            <strong>Dashboard</strong>
            <div className="appointments-grid">
                {msg}
                {results && <div className="appointment-cards">
                    {results.map(element => <DashboardCard key={results.indexOf(element)}
                        doctorName={element.Doctor.name} speciality={element.Doctor.speciality}
                        date={new Date(element.date).toDateString() + ' ' + new Date(element.date).toLocaleTimeString()}
                        status={element.status}></DashboardCard>)}
                </div>}
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