const fetchSignup = async (username, email, password) => {

    try {

        // console.log(email, password);
        console.log(`Data received: name :${username} email: ${email} | password ${password}}`)
        console.log("Fetching...");

        const urlLogin = 'http://localhost:3001/users/signup';

        const res = await fetch(urlLogin, {
            method: 'POST',
            headers: { 'name': username, 'email': email, 'password': password }
        });


        const object = await res.json();

        // console.log("After fetching");
        // console.log(object);

        return object;

    } catch (error) {
        console.log("Something was wrong during fetching");
    }
}

export default fetchSignup;