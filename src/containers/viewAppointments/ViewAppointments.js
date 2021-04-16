import React, { useState } from "react";
import AppointmentCard from "../../components/appointmentCard/AppointmentCard";
import AppointmentMessage from "../../components/appointmentMessage/AppointmentMessage";
import fetchAppointments from "../../services/fetchAppointments";

const ViewAppointments = () => {

    const [date, setDate] = useState(null);
    const [status, setstatus] = useState(null);
    const [client, setClient] = useState(null);
    const [doctor, setdoctor] = useState(null);
    const [email, setEmail] = useState(null);
    const [speciality, setSpeciality] = useState(null);
    const [error, setError] = useState(null);

    const userDataLocal = localStorage.getItem('userData');
    const userData = JSON.parse(userDataLocal);

    const getAppointments = async () => {

        try {
            const res = await fetchAppointments.appointmentStatus(userData.token);
            const json = await res.json();
            const { rows } = json;
            console.log(rows)
        } catch (e) {
            console.log(e)
            setError = 0
        }
    }

    getAppointments();
    
    let msg;

    switch (error) {
        case 0:
            msg = <AppointmentMessage msg="Internal server error"></AppointmentMessage>
            break;
        default:
            msg = null
            break;
    }

    return (
        <>
            {msg}
            <div>
                Appointments
            </div>
            <AppointmentCard date="04-16-2021" status="pending" clientName="Client1"
                doctorName="Doctor1" email="client@client.com" speciality="All"></AppointmentCard>
        </>
    );
}

export default ViewAppointments