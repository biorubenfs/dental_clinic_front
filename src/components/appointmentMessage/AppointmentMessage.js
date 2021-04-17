const AppointmentMessage = (props) => {

    return (
        <h4>
            {props.msg}
            {props.children}
        </h4>
    )
}

export default AppointmentMessage;