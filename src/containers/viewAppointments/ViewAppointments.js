import React, { useState, useEffect } from "react";
import AlertPopUp from "../../components/alertPopUp/AlertPopUp";
import AppointmentCard from "../../components/appointmentCard/AppointmentCard";
import AppointmentMessage from "../../components/appointmentMessage/AppointmentMessage";
import fetchAppointments from "../../services/fetchAppointments";
import './ViewAppointment.css';

const ViewAppointments = () => {

    const [error, setError] = useState(null);
    const [results, setResults] = useState(null);
    const [alert, setAlert] = useState(false);
    const [cancelId, setCancelId] = useState(null);

    useEffect(() => {
        getAppointments();
    }, []);

    const getAppointments = async () => {

        try {
            const res = await fetchAppointments.appointmentStatus();
            const json = await res.json();
            const { rows } = json;

            if (rows) {
                setResults(rows);
            } else if (rows.length <= 0) {
                setError(1)
            }

        } catch (e) {
            console.log(e)
            setError(0);
        }
    }

    let msg;

    if (error === 0) {
        msg = <AppointmentMessage msg="Internal server error"></AppointmentMessage>
    } else if (error === 1) {
        <AppointmentMessage msg="There are currently no appointments"></AppointmentMessage>
    }

    const cancelDate = async () => {
        try {
            await fetchAppointments.cancelAppointment(cancelId)
            setAlert(false);
            getAppointments();
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <div className="appointments">
                <strong>Appointments</strong>
                {alert && <div><AlertPopUp cancel={() => cancelDate()} cancelNot={() => setAlert(false)} /></div>}
                <div className="appointments-grid">
                    {msg}
                    {results && <div className="appointment-cards">
                        {results.map(element => <AppointmentCard key={results.indexOf(element)} id={element.id}
                            date={new Date(element.date).toDateString() + ' ' + new Date(element.date).toLocaleTimeString()}
                            status={element.status} clientName={element.User.name} doctorName={element.Doctor.name}
                            email={element.User.email} speciality={element.Doctor.speciality}
                            cancelBtn={() => {
                                setAlert(true);
                                setCancelId(element.id);
                            }}></AppointmentCard>)}
                    </div>}
                </div>
            </div>
        </>
    );
}

export default ViewAppointments