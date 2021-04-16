import React, { Component } from 'react';
import AppointmentMessage from '../../components/appointmentMessage/AppointmentMessage';
import fetchAppointments from '../../services/fetchAppointments';

class NewAppointment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: null,
            userId: null,
            doctorId: null,
            message: null
        };
    }


    inputHandler(event) {
        const attribute = event.target.name;
        this.setState({ [attribute]: event.target.value });
    }

    async fetchHandler(event) {
        event.preventDefault();

        const userDataLocal = localStorage.getItem('userData')
        const userData = JSON.parse(userDataLocal);

        if (!this.state.date || !this.state.userId || !this.state.doctorId) {

            return this.setState({ message: 0 })
        };

        try {

            const res = await fetchAppointments.newAppointment(userData.token, this.state.date, this.state.userId, this.state.doctorId);
            const error = await res.json()

            if (res.status === 201) {
                this.setState({ message: 2 })
            } else if (error.code === 3) {
                this.setState({ message: error.code });
            } else if (error.code === 4) {
                this.setState({ message: error.code });
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
                <form className="appointForm"><br></br>
                    <label htmlFor="date">Date</label>
                    <input
                        className="input"
                        type="datetime-local"
                        name="date"
                        min={dateNow}
                        required
                        onChange={(e) => this.inputHandler(e)}
                    ></input><br></br>
                    <label htmlFor="user">User ID</label>
                    <input
                        className="input"
                        type="number"
                        min="2"
                        name="userId"
                        required
                        onChange={(e) => this.inputHandler(e)}
                    ></input><br></br>
                    <label htmlFor="doctor">Doctor ID</label>
                    <input
                        className="input"
                        type="number"
                        min="1"
                        name="doctorId"
                        required
                        onChange={(e) => this.inputHandler(e)}
                    ></input><br></br>
                    <button className="button" type="button" onClick={(e) => this.fetchHandler(e)}>Submit</button>
                </form>
                {msg}
            </>
        );
    }

}

export default NewAppointment;