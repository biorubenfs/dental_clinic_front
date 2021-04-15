import React, { Component } from 'react';
import AppointmentMessage from '../../components/appointmentMessage/AppointmentMessage';
import fetchAppointments from '../../services/fetchAppointments';

class NewAppointment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: null,
            usersId: null,
            doctorsId: null
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

        try {

            const res = await fetchAppointments(userData.token ,this.state.date, this.state.usersId, this.state.doctorsId);

            if (res.status !== 201) {
                
            }

        } catch(e) {
            
        }
    }

    render() {

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
                        type="date"
                        name="date"
                        min={dateNow}
                        required
                        onChange={(e) => this.inputHandler(e)}
                    ></input>
                    <label htmlFor="user">User ID</label>
                    <input
                        className="input"
                        type="number"
                        min="2"
                        name="user"
                        required
                        onChange={(e) => this.inputHandler(e)}
                    ></input>
                    <label htmlFor="doctor">Doctor ID</label>
                    <input
                        className="input"
                        type="number"
                        min="1"
                        name="doctor"
                        required
                        onChange={(e) => this.inputHandler(e)}
                    ></input>
                </form>
                <div>
                    msg
                </div>
            </>
        );
    }

}

export default NewAppointment;