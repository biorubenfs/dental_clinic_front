import React, { useState } from "react";
import AppointmentCard from "../../components/appointmentCard/AppointmentCard";
import AppointmentMessage from "../../components/appointmentMessage/AppointmentMessage";
import fetchAppointments from "../../services/fetchAppointments";

const ViewAppointments = () => {

    const [error, setError] = useState(null);
    const [results, setResults] = useState(null);

    console.log(results)

    const getAppointments = async () => {

        try {
            const res = await fetchAppointments.appointmentStatus();
            const json = await res.json();
            const { rows } = json;

            if (rows) {
                setResults(rows);
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

    if (error == 0) {
            msg = <AppointmentMessage msg="Internal server error"></AppointmentMessage>
    }

    return (
        <>
            <div>
                Appointments
            </div>
            {msg}            
            {results && <div>
                {results.map(element => <AppointmentCard key={results.indexOf(element)} date={element.date} status={element.status}
                    clientName={element.User.name} doctorName={element.Doctor.name}
                    email={element.User.email} speciality={element.Doctor.speciality}></AppointmentCard>)}
            </div>}
        </>
    );
}

export default ViewAppointments