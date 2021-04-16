const fetchSignup = async (username, email, password) => {

    try {

        // console.log(email, password);
        console.log(`Data received: name :${username} email: ${email} | password ${password}}`)
        console.log("Fetching...");

        const urlLogin = 'http://localhost:3001/users/signup';

        const object = await fetch(urlLogin, {
            method: 'POST',
            headers: { 'name': username, 'email': email, 'password': password }
        });

        // console.log(object.res);

        return object;


    } catch (error) {
        // return { status: "custom" };
        return console.log(error);
        // return error;
        // console.log("Something was wrong during fetching");
    }
}

export default fetchSignup;