import React, { useState } from "react";
import AppointmentCard from "../../components/appointmentCard/AppointmentCard";
import AppointmentMessage from "../../components/appointmentMessage/AppointmentMessage";
import fetchAppointments from "../../services/fetchAppointments";
import './ViewAppointment.css'

const ViewAppointments = () => {

    const [error, setError] = useState(null);
    const [results, setResults] = useState(null);
    const [count, setCount] = useState(null);

    console.log(results)

    const getAppointments = async () => {

        try {
            const res = await fetchAppointments.appointmentStatus();
            const json = await res.json();
            const { rows } = json;
            const { count } = json;

            if (rows) {
                setResults(rows);
                setCount(Math.ceil(count / 10));
            }

        } catch (e) {
            console.log(e)
            setError(0);
        }
    }

    if (!results) {
        getAppointments()
    }

    let msg;

    if (error === 0) {
        msg = <AppointmentMessage msg="Internal server error"></AppointmentMessage>
    }

    return (
        <>
            <div className="appointments">
                Appointments
            
                <div className="appointments-grid">
                    {msg}
                    {results && <div className="appointment-cards">
                        {results.map(element => <AppointmentCard key={results.indexOf(element)} id={element.id} date={element.date} status={element.status}
                            clientName={element.User.name} doctorName={element.Doctor.name}
                            email={element.User.email} speciality={element.Doctor.speciality}></AppointmentCard>)}
                    </div>}
                </div>
                <div className="pagination">
                    <a href="http://localhost:3000/">prev</a>
                    <div>page 1 of {count}</div>
                    <a href="http://localhost:3000/">next</a>
                </div>
            </div>
        </>
    );
}

export default ViewAppointments