import React, { Component } from 'react';
import AppointmentMessage from '../../components/appointmentMessage/AppointmentMessage';
import fetchAppointments from '../../services/fetchAppointments';
import './NewAppointment.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class NewAppointment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: null,
            date: new Date()
        };
    }

    async fetchHandler(event) {
        event.preventDefault();

        const userId = event.target[1].value;
        const doctorId = event.target[2].value;

        try {

            const res = await fetchAppointments.newAppointment(this.state.date, userId, doctorId);


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
        const thisDate = this.state.date.toDateString()

        const thisTime = this.state.date.toLocaleTimeString()

        let msg;

        switch (this.state.message) {
            case 0:
                msg = <AppointmentMessage msg="All fields are required"></AppointmentMessage>;
                break;
            case 1:
                msg = <AppointmentMessage msg="Internal server error"></AppointmentMessage>;
                break;
            case 2:
                msg = <AppointmentMessage msg="Appointment created on ">{`${thisDate} at ${thisTime}`}</AppointmentMessage>;
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

        return (
            <>
                <div className="new-appointment">
                    <strong>New Appointment</strong>
                    <form className="appointForm" onSubmit={(e) => this.fetchHandler(e)}><br></br>
                        <label htmlFor="date"></label>
                            <DatePicker className="date-input" selected={this.state.date} 
                            onChange={date => {
                                this.setState({ date: date });
                                const startDate = this.state.date;
                            }} 
                            minDate={Date.now()} showTimeSelect dateFormat="Pp"/><br></br>
                        <label htmlFor="user"></label>
                        <input
                            className="short-input"
                            type="number"
                            min="2"
                            name="userId"
                            required
                            placeholder="User ID"
                        ></input><br></br>
                        <label htmlFor="doctor"></label>
                        <input
                            className="short-input"
                            type="number"
                            min="1"
                            name="doctorId"
                            required
                            placeholder="Doctor ID"
                        ></input><br></br>
                        <button className="button sub-btn" type="submit">Submit</button>
                    </form>
                    {msg}
                </div>
            </>
        );
    }

}

export default NewAppointment;