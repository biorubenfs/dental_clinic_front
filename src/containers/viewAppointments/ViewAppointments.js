import React, { useState } from "react";
import AppointmentCard from "../../components/appointmentCard/AppointmentCard";
import AppointmentMessage from "../../components/appointmentMessage/AppointmentMessage";
import fetchAppointments from "../../services/fetchAppointments";

const ViewAppointments = () => {

    const [error, setError] = useState(null);
    const [results, setResults] = useState(null);

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
    console.log(results)

    let msg;

    if (error == 0) {
            msg = <AppointmentMessage msg="Internal server error"></AppointmentMessage>
    }

    return (
        <>
            {msg}
            <div>
                Appointments
            </div>
            <AppointmentCard date="04-16-2021" status="pending" clientName="Client1"
                doctorName="Doctor1" email="client@client.com" speciality="All"></AppointmentCard>
            {results && <div>
                {results.map(element => <AppointmentCard key={results.indexOf(element)} date={element.date} status={element.status}
                    clientName={element.User.name} doctorName={element.Doctor.name}
                    email={element.User.email} speciality={element.Doctor.speciality}></AppointmentCard>)}
            </div>}
        </>
    );
}

export default ViewAppointments