const fetchLogin = async (email, password) => {

    try {
        console.log(email, password);

        const urlLogin = 'http://localhost:3001/auth/login';

        const res = await fetch(urlLogin, {
            method: 'POST',
            body: JSON.stringify({ "email": email, "password": password })
        });

        const object = await res.json();

        return object;
    } catch (error) {
        console.log(error.message);
    }

}

export default fetchLogin;