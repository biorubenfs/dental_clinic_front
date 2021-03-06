import React, { Component } from 'react';
import AppointmentMessage from '../../components/appointmentMessage/AppointmentMessage';
import fetchAppointments from '../../services/fetchAppointments';
import fetchUsers from "../../services/fetchUsers"
import './NewAppointment.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import UserList from '../../components/userList/UserList';

class NewAppointment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: null,
            date: new Date(),
            fetchedClients: null,
            fetchedDoctors: null,
            clientList: null,
            doctorList: null,
            clientId: null,
            doctorId: null,
            showSearchBoxClients: false,
            showSearchBoxDoctors: false
        }
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


    //La lista de clientes y doctores se pide una vez, al caragr el componente

    componentDidMount() {
        this.fetchingClients();
        this.fetchingDoctors();
    }

    //Almacenar la lista de clientes (viene como un array) en un estado
    async fetchingClients() {

        try {
            const res = await fetchUsers.fetchClients();
            const { client } = res;

            this.setState({ fetchedClients: client })

        } catch (e) {
            console.log(e);
        }
    }

    //handler para escuchar cambios en el input de search cliente
    getClients(event) {

        event.preventDefault();
        const name = event.target.value;

        const filterParam = element => {
            if (!name) return false
            return element.name.toLowerCase().includes(name.toLowerCase());
        }

        const filterResults = this.state.fetchedClients.filter(filterParam);

        this.setState({ clientList: filterResults });

    }

    //En caso de querer hacer fetch con cada input o con cada 3 caracteres para no sobrecargar las
    // peticiones a la base de datos se podr??a incluir la l??gica de los handlers dentro de los fetch

    //Almacenar la lista de doctores (viene como un array) en un estado
    async fetchingDoctors() {


        try {
            const res = await fetchUsers.fetchDoctors();
            const { doctors } = res;

            this.setState({ fetchedDoctors: doctors })

        } catch (e) {
            console.log(e);
        }
    }

    //handler para escuchar cambios en el input de search doctor
    getDoctors(event) {

        event.preventDefault();
        const name = event.target.value;

        const filterParam = element => {
            if (!name) return false
            return element.name.toLowerCase().includes(name.toLowerCase());
        }

        const filterResults = this.state.fetchedDoctors.filter(filterParam);

        this.setState({ doctorList: filterResults });

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
                            minDate={Date.now()} showTimeSelect dateFormat="Pp" /><br></br>
                        <label htmlFor="user"></label>
                        <input
                            className="short-input"
                            type="number"
                            min="2"
                            name="userId"
                            required
                            placeholder="user ID"
                            value={this.state.clientId && this.state.clientId}
                            onFocus={() => this.setState({ showSearchBoxClients: true })}
                        ></input><br></br>
                        <label htmlFor="doctor"></label>
                        <input
                            className="short-input"
                            type="number"
                            min="1"
                            name="doctorId"
                            required
                            placeholder="doctor ID"
                            value={this.state.doctorId && this.state.doctorId}
                            onFocus={() => this.setState({ showSearchBoxDoctors: true })}
                        ></input><br></br>
                        <button className="button sub-btn" type="submit">Submit</button><br></br>
                    </form>
                    {msg}
                    <span className="tip">Use the search tools below to know the user's and doctor's ID</span>
                    {this.state.showSearchBoxClients && <div className="search-pop-up">
                        <label htmlFor="search user"></label>
                        <div className="search-bar">
                            <input
                                className="short-input"
                                type="search"
                                name="searchUser"
                                placeholder="search user by name"
                                onInput={(e) => this.getClients(e)}
                            ></input>
                        </div>

                        {/* Mapeo del array de clientes para pintarlos como un componente tipo tabla llamado UserList que recibe por 
props los campos de la "tabla" */}

                        <UserList user="Client" email="email" id="XX"></UserList>
                        {this.state.clientList && <div>
                            {this.state.clientList.map(element => <UserList
                                key={this.state.clientList.indexOf(element)}
                                user={element.name}
                                email={element.email}
                                id={element.id}
                                select={() => {
                                    this.setState({ clientId: element.id });
                                    this.setState({ showSearchBoxClients: false });
                                }}
                            ></UserList>)}
                        </div>}
                    </div>}
                    {this.state.showSearchBoxDoctors && <div className="search-pop-up">
                        <label htmlFor="search doctor"></label>
                        <div className="search-bar">
                            <input
                                className="short-input"
                                type="search"
                                name="searchDoctor"
                                placeholder="search doctor by name"
                                onInput={(e) => this.getDoctors(e)}
                            ></input>
                        </div>

                        {/* Lo mismo para los doctores */}

                        <UserList user="Doctor" email="speciality" id="XX"></UserList>
                        {this.state.doctorList && <div>
                            {this.state.doctorList.map(element => <UserList
                                key={this.state.doctorList.indexOf(element)}
                                user={element.name}
                                email={element.speciality}
                                id={element.id}
                                select={() => {
                                    this.setState({ doctorId: element.id });
                                    this.setState({ showSearchBoxDoctors: false });
                                }}
                            ></UserList>)}
                        </div>}
                    </div>}
                </div>
            </>
        );
    }

}

export default NewAppointment;