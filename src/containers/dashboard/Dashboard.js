import React, { useState } from "react";
import AppointmentCard from '../../components/appointmentCard/AppointmentCard'
import AppointmentMessage from "../../components/appointmentMessage/AppointmentMessage";
import DashboardCard from '../../components/dashboardCard/DashboardCard'
import fetchDashboard from '../../services/fetchDashboard'
import './Dashboard.css'

const Dashboard = () => {

    const [error, setError] = useState(null);
    const [results, setResults] = useState(null);

    const getAppointments = async () => {

        try {
            const res = await fetchDashboard();
            const json = await res.json();
            const { Appointments } = json;
            const results = [...Appointments];

            console.log(results)

            setResults(results)

        } catch (e) {
            console.log(e)
            setError(0);
        }
    }

    if (!results) {
        getAppointments();
        console.log(results)
    }

    let msg;

    if (error === 0) {
        msg = <AppointmentMessage msg="Internal server error"></AppointmentMessage>
    }


    return (
        <div className="appointments">
            <strong>Dashboard</strong>
            <div className="appointments-grid">
                {msg}
                {results && <div className="appointment-cards">
                    {results.map(element => <DashboardCard key={results.indexOf(element)} doctorName={element.Doctor.name}
                        speciality={element.Doctor.speciality} date={element.date} status={element.status}></DashboardCard>)}
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