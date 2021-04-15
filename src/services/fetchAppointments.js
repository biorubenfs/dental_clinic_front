const fetchAppointments = {

    newAppointment: async (token, date, user, doctor) => {
        try {

            const body = {
                "date": date,
                "usersId": user,
                "doctorsId": doctor
            }

            const res = await fetch('http://localhost:3001/appointments/newApptts', {
                method: 'POST',
                headers: { "authentication": token , "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            return res;

        } catch (e) {
            console.log(e.message);
        }
    },
    
    appointmentStatus: async (token) => {

        try {
            const res = await fetch('http://localhost:3001/appointments/appttsStts', {
                method: 'GET',
                headers: { "authentication": token }
            });

            return res;

        } catch (e) {
            console.log(e.message);
        }
    },
    
    cancelAppointment: async (userId, token) => {

        try {
            const res = await fetch(`http://localhost:3001/appointments/appttsDlt/${userId}`, {
                method: 'PATCH',
                headers: { "authentication": token }
            }
            );

            return res;

        } catch (e) {
            console.log(e.message);
        }
    }

}

export default fetchAppointments;