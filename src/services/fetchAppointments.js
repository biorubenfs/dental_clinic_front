const fetchAppointments = {

    newAppointment: async (token, date, user, doctor) => {
        try {

            const res = await fetch('http://localhost:3001/appointments/newApptts', {
                method: 'POST',
                headers: {
                    "authentication": token
                },
                body: {
                    "date": date,
                    "usersId": user,
                    "doctorsId": doctor
                }
            });

            const object = await res.json();
            return object;

        } catch (e) {
            console.log(e.message);
        }
    },
    
    appointmentStatus: async (token) => {

        try {
            const res = await fetch('http://localhost:3001/appointments/appttsStts', {
                method: 'GET',
                headers: {
                    "authentication": token
                }
            });

            const object = await res.json();
            return object;

        } catch (e) {
            console.log(e.message);
        }
    },
    
    cancelAppointment: async (userId, token) => {

        try {
            const res = await fetch(`http://localhost:3001/appointments/appttsDlt/${userId}`, {
                method: 'PATCH',
                headers: {
                    "authentication": token
                }
            }
            );

            const object = await res.json();
            return object;

        } catch (e) {
            console.log(e.message);
        }
    }

}

export default fetchAppointments;