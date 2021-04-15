const fetchLogin = async (email, password) => {

    try {

        // console.log(email, password);
        console.log(`Data received: email: ${email} | password ${password}}`)
        console.log("Fetching...");

        const urlLogin = 'http://localhost:3001/auth/login';

        const res = await fetch(urlLogin, {
            method: 'POST',
            headers: { 'email': email, 'password': password }
        });


        const object = await res.json();

        // console.log("After fetching");
        // console.log(object);

        return object;

    } catch (error) {
        console.log("Something was wrong during fetching");
    }
}

export default fetchLogin;