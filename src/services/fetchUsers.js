const fetchUsers = {

    fetchClients: async () => {
        try {

            const userDataLocal = localStorage.getItem('userData');
            const userData = JSON.parse(userDataLocal);

            const res = await fetch('http://localhost:3001/users/list', {
                method: 'GET',
                headers: { "authentication": userData.token, "Content-Type": "application/json" }
            });
                        
            return res.json();

        } catch (e) {
            console.log(e.message);
        }
    },
    fetchDoctors: async () => {
        try {

            const userDataLocal = localStorage.getItem('userData');
            const userData = JSON.parse(userDataLocal);

            const res = await fetch('http://localhost:3001/users/doctors', {
                method: 'GET',
                headers: { "authentication": userData.token, "Content-Type": "application/json" }
            });
                        
            return res.json();

        } catch (e) {
            console.log(e.message);
        }
    }
}

export default fetchUsers;