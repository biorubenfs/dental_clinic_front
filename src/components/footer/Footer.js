import './Footer.css'

const Footer = () => {

    return (
        <footer className="App-footer">
            <div className="footer-bg">
                <div className="footer">
                    <div>
                        <div className="footer-title">Jarki and Ruben Team</div>
                        <div className="footer-paragraph">Copyright © 2021</div>
                    </div>

                    <div>70 Great Russell St, Holborn, London WC1B 3BN, UK</div>
                    <div className="footer-iconos">
                        <a target="_blank" rel="noreferrer" href="http://www.google.es">
                            <div className="icon icon-twitter" ></div>
                        </a>
                        <a target="_blank" rel="noreferrer" href="http://www.google.es">
                            <div className="icon icon-instagram" ></div>
                        </a>
                        <a target="_blank" rel="noreferrer" href="http://www.google.es">
                        <div className="icon icon-facebook" ></div>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer