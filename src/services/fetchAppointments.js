const fetchAppointments = {

    newAppointment: async (date, user, doctor) => {
        try {

            const userDataLocal = localStorage.getItem('userData');
            const userData = JSON.parse(userDataLocal);

            const body = {
                "date": date,
                "usersId": user,
                "doctorsId": doctor
            }

            const res = await fetch('http://localhost:3001/appointments/newApptts', {
                method: 'POST',
                headers: { "authentication": userData.token, "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            return res;

        } catch (e) {
            console.log(e.message);
        }
    },

    appointmentStatus: async () => {

        const userDataLocal = localStorage.getItem('userData');
        const userData = JSON.parse(userDataLocal);

        try {
            const res = await fetch('http://localhost:3001/appointments/appttsStts', {
                method: 'GET',
                headers: { "authentication": userData.token }
            });

            return res;

        } catch (e) {
            console.log(e.message);
        }
    },

    cancelAppointment: async (appointmentId) => {

        try {

            const userDataLocal = localStorage.getItem('userData');
            const userData = JSON.parse(userDataLocal);

            const res = await fetch(`http://localhost:3001/appointments/appttsDlt/${appointmentId}`, {
                method: 'PATCH',
                headers: { "authentication": userData.token }
            }
            );

            return res;

        } catch (e) {
            console.log(e.message);
        }
    }

}

export default fetchAppointments;