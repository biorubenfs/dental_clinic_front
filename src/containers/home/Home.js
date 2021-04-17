import Covid from '../../components/covid/Covid'
import orthodontics from '../../img/orthodontics.jpg'
import Card from '../../components/homeCard/HomeCard';
import './Home.css'
import Navbar from '../../components/navbar/Navbar';

const Home = (props) => {

    return (
        <>
            <div>
                <Navbar/>
            </div>
            <div className='covid-alert'>
                <Covid />
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