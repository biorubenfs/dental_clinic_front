import logo from '../../logo.svg'
import Covid from '../covid/Covid'
import orthodontics from '../../img/orthodontics.jpg'
import Card from '../card/Card';
import './Home.css'

const Home = (props) => {

    return (
        <>
            <div className='header'></div>
            <img className='logo' src={logo} alt='logo'></img>
            <button type='submit'>Login</button>
            <button type='button'>Register</button>
            <button type='button'>Contact</button>
            <button type='button'>Get an Appointment</button>
            <div className='covid-alert'>
                <Covid></Covid>
            </div>
            <div className='cards-grid'>
                <Card img={orthodontics} title='Orthodontics' text='Correct the placement of your teeth and reduce problems, you will achieve health and aesthetics'>                </Card>
                <Card img={orthodontics} title='Orthodontics' text='Correct the placement of your teeth and reduce problems, you will achieve health and aesthetics'>                </Card>
                <Card img={orthodontics} title='Orthodontics' text='Correct the placement of your teeth and reduce problems, you will achieve health and aesthetics'>                </Card>
                <Card img={orthodontics} title='Orthodontics' text='Correct the placement of your teeth and reduce problems, you will achieve health and aesthetics'>                </Card>
                <Card img={orthodontics} title='Orthodontics' text='Correct the placement of your teeth and reduce problems, you will achieve health and aesthetics'>                </Card>
                <Card img={orthodontics} title='Orthodontics' text='Correct the placement of your teeth and reduce problems, you will achieve health and aesthetics'>                </Card>
                <Card img={orthodontics} title='Orthodontics' text='Correct the placement of your teeth and reduce problems, you will achieve health and aesthetics'>                </Card>
                <Card img={orthodontics} title='Orthodontics' text='Correct the placement of your teeth and reduce problems, you will achieve health and aesthetics'>                </Card>
            </div>
        </>
    );

}

export default Home;