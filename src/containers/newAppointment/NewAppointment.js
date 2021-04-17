import React, { Component } from 'react';
import AppointmentMessage from '../../components/appointmentMessage/AppointmentMessage';
import fetchAppointments from '../../services/fetchAppointments';
import './NewAppointment.css'

class NewAppointment extends Component {
    constructor(props) {
        super(props);
        this.state = { message: null };
    }


    async fetchHandler(event) {
        event.preventDefault();

        const date = event.target[0].value;
        const userId = event.target[1].value;
        const doctorId = event.target[2].value;

        try {

            const res = await fetchAppointments.newAppointment(date, userId, doctorId);


            if (res.status === 201) {
                this.setState({ message: 2 });
            } else {
                const error = await res.json()
                if (error.code === 3) {
                    this.setState({ message: error.code });
                } else if (error.code === 4) {
                    this.setState({ message: error.code });
                } else {
                    this.setState({ message: 5 })
                }
            }

        } catch (e) {
            console.log(e)
            this.setState({ message: 1 })

        }
    }

    render() {

        let msg;

        switch (this.state.message) {
            case 0:
                msg = <AppointmentMessage msg="All fields are required"></AppointmentMessage>;
                break;
            case 1:
                msg = <AppointmentMessage msg="Internal server error"></AppointmentMessage>;
                break;
            case 2:
                msg = <AppointmentMessage msg="Appointment created"></AppointmentMessage>;
                break;
            case 3:
                msg = <AppointmentMessage msg="Doctor is busy at that time, please select a different time or doctor"></AppointmentMessage>;
                break;
            case 4:
                msg = <AppointmentMessage msg="Client already has an appointment at that time"></AppointmentMessage>;
                break;
            case 5:
                msg = <AppointmentMessage msg="Please enter a registered client and doctor"></AppointmentMessage>;
                break;
            default:
                msg = null
        }


        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        const dateNow = (`${year}-${month}-${day}`);

        return (
            <>
                <div>
                    New Appointment
                </div>
                <form className="appointForm" onSubmit={(e) => this.fetchHandler(e)}><br></br>
                    <label htmlFor="date">Date</label>
                    <input
                        className="input"
                        type="datetime-local"
                        name="date"
                        min={dateNow}
                        required
                    ></input><br></br>
                    <label htmlFor="user">User ID</label>
                    <input
                        className="input"
                        type="number"
                        min="2"
                        name="userId"
                        required
                    ></input><br></br>
                    <label htmlFor="doctor">Doctor ID</label>
                    <input
                        className="input"
                        type="number"
                        min="1"
                        name="doctorId"
                        required
                    ></input><br></br>
                    <button className="button" type="submit">Submit</button>
                </form>
                {msg}
            </>
        );
    }

}

export default NewAppointment;