const fetchDashboard = async () => {

    const userDataLocal = localStorage.getItem('userData');
    const userData = JSON.parse(userDataLocal);

    try {
        const res = await fetch('http://localhost:3001/users/dashboard', {
            method: 'GET',
            headers: { "authentication": userData.token }
        });

        return res;

    } catch (e) {
        console.log(e.message);
    }
}

export default fetchDashboard;