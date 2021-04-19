import React, { useState } from "react";
import AlertPopUp from "../../components/alertPopUp/AlertPopUp";
import AppointmentCard from "../../components/appointmentCard/AppointmentCard";
import AppointmentMessage from "../../components/appointmentMessage/AppointmentMessage";
import fetchAppointments from "../../services/fetchAppointments";
import './ViewAppointment.css'

const ViewAppointments = () => {

    const [error, setError] = useState(null);
    const [results, setResults] = useState(null);
    const [count, setCount] = useState(null);
    const [startSkip, setStartSkip] = useState(0);
    const [endSkip, setEndtSkip] = useState(10);
    const [alert, setAlert] = useState(false);

    const getAppointments = async () => {

        try {
            const res = await fetchAppointments.appointmentStatus();
            const json = await res.json();
            const { rows } = json;
            const { count } = json;
            
            const tenResults = rows.slice(startSkip , endSkip);

            if (rows) {
                setResults(tenResults);
                setCount(Math.ceil(count / 10));
            }

        } catch (e) {
            console.log(e)
            setError(0);
        }
    }

    if (!results) {
        getAppointments();
    }

    let msg;

    if (error === 0) {
        msg = <AppointmentMessage msg="Internal server error"></AppointmentMessage>
    }

    const nextPage = () => {
        setStartSkip(startSkip +10);
        setEndtSkip(endSkip +10);
        getAppointments();
    }

    const previousPage = () => {
        setStartSkip(startSkip -10);
        setEndtSkip(endSkip -10);
        getAppointments();
    }

    const cancelBtn = () => {
        setAlert(true);
    }

    const cancelDate = (id) => {

    }

    return (            
        <>
            <div className="appointments">
                <strong>Appointments</strong>
                {alert && <div><AlertPopUp cancel={() => cancelDate()} cancelNot={() => setAlert(false)}/></div>}            
                <div className="appointments-grid">
                    {msg}
                    {results && <div className="appointment-cards">
                        {results.map(element => <AppointmentCard key={results.indexOf(element)} id={element.id} date={element.date} status={element.status}
                            clientName={element.User.name} doctorName={element.Doctor.name}
                            email={element.User.email} speciality={element.Doctor.speciality} cancelBtn={() => cancelBtn()}></AppointmentCard>)}
                    </div>}
                </div>
                <div className="pagination">
                    <a href="#" onClick={() => previousPage()}>prev</a>
                    <div>page 1 of {count}</div>
                    <a href="#" onClick={() => nextPage()}>next</a>
                </div>
            </div>
        </>
    );
}

export default ViewAppointments