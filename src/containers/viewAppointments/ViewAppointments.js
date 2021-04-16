import React, { useState } from "react";
import AppointmentCard from "../../components/appointmentCard/AppointmentCard";


const ViewAppointments = () => {

    return (
        <>
            <div>
                Appointments
            </div>
            <AppointmentCard date="04-16-2021" status="pending" clientName="Client1" 
            doctorName="Doctor1" email="client@client.com" speciality="All"></AppointmentCard>
        </>
    );
}

export default ViewAppointments