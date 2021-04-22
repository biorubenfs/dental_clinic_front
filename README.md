# Table of contents
- [Configuration](#Configuration)
- [Run](#Run)
- [Folder structure](#Project-folder-structure)
- [Demo](#Demo)
- [Features](#Features)
#


# Dental clinic app
It's a responsive web application  made by [Rubén Fernández](https://www.linkedin.com/in/rubenfernandezsantos/) and [Jarki Melendez](https://www.linkedin.com/in/jarki-melendez/) for appointments administration.

Made with:
- React 17
- NodeJs with express
- MySQL with sequelize 
#


## Configuration
- Backend: Download and install the [backend](https://github.com/jarki7777/API_Citas) repo
- Dependencies: Clone this repository and on root folder run command:

        npm install

By default the react server will run on port 3000

#

## Run

On root folder run:

        npm start

A new browser tab should open with http://localhost:3000/

You can now use the app
#


## Project folder structure
                ├───public
                └───src
                ├───components
                │   ├───alertPopUp
                │   ├───appointmentCard
                │   ├───appointmentMessage
                │   ├───covid
                │   ├───dashboardCard
                │   ├───footer
                │   ├───homeCard
                │   ├───loginMessage
                │   ├───logo
                │   ├───navbar
                │   ├───searchInput
                │   └───signupMessage
                ├───containers
                │   ├───contact
                │   ├───dashboard
                │   ├───home
                │   ├───login
                │   ├───newAppointment
                │   ├───signup
                │   └───viewAppointments
                ├───img
                └───services
#

## Demo

![demovideo](https://user-images.githubusercontent.com/76188418/115768719-fa0f3300-a3aa-11eb-821f-6aa8652872f3.mp4)

![ezgif com-gif-maker](https://user-images.githubusercontent.com/76188418/115443154-314adc00-a213-11eb-816f-c1e8b7ab9535.gif)
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/76188418/115443163-34de6300-a213-11eb-973a-c0e2e338e37c.gif)

## Features

- Homepage with fictional treatments offered by the clinic

![screenshot_home](https://user-images.githubusercontent.com/76188418/115441175-dd3ef800-a210-11eb-8308-dbbed14c5a09.png)

![localhost_3000_](https://user-images.githubusercontent.com/76188418/115441158-da440780-a210-11eb-806d-00b8bd45d2f4.png)

- Signup page

![screenshot_signup](https://user-images.githubusercontent.com/76188418/115441177-dd3ef800-a210-11eb-93a1-bd8715e2c17b.png)

- Login page

![screenshot_login](https://user-images.githubusercontent.com/76188418/115441176-dd3ef800-a210-11eb-9849-537b7f41efea.png)

- Client users will be redirected to a dashboard once logged in and they can see their upcoming appointments info

![screenshot_dashboard](https://user-images.githubusercontent.com/76188418/115441172-dca66180-a210-11eb-98ab-165779857d8a.png)

- If the logged user is an Admin, it will be redirected to a view of pending appointments instead

![localhost_3000_view-appointments](https://user-images.githubusercontent.com/76188418/115441162-dadc9e00-a210-11eb-91c1-50a3b0d1d749.png)

- Admin can cancel pending appointments

![screenshot_](https://user-images.githubusercontent.com/76188418/115441166-dc0dcb00-a210-11eb-90c3-f0997670edaa.png)

- Admin can also create new appointments. Originally the backend didn't show users or doctors list, so the admin must know the IDs of users and doctors to create appointments

![screenshot_appointment_2](https://user-images.githubusercontent.com/76188418/115441171-dca66180-a210-11eb-8276-795cfa1f273f.png)


#


## Authors

[Rubén Fernández](https://www.linkedin.com/in/rubenfernandezsantos/)

[Jarki Melendez](https://www.linkedin.com/in/jarki-melendez/)

[TOP](#Table-of-contents)