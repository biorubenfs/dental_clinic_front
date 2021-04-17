import Covid from '../../components/covid/Covid'
import home_1 from '../../img/home_1.jpg'
import home_2 from '../../img/home_2.jpg'
import home_3 from '../../img/home_3.jpg'
import home_4 from '../../img/home_4.jpg'
import home_5 from '../../img/home_5.jpg'
import home_6 from '../../img/home_6.jpg'

import Card from '../../components/homeCard/HomeCard';
import './Home.css'

const Home = (props) => {

    return (
        <>
            <div className='covid-alert'>
                <Covid />
            </div>
            <div className='cards-grid'>
                <Card img={home_1} title={"Lorem ipsum "} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo quam in ligula vestibulum, ac pharetra magna egestas. Sed in dictum nunc. Nunc dictum, dolor et laoreet euismod, leo odio blandit sem, feugiat aliquet massa libero nec massa."}></Card>
                <Card img={home_2} title={"Orthodontics"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo quam in ligula vestibulum, ac pharetra magna egestas. Sed in dictum nunc. Nunc dictum, dolor et laoreet euismod, leo odio blandit sem, feugiat aliquet massa libero nec massa."}></Card>
                <Card img={home_3} title={"Venners"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo quam in ligula vestibulum, ac pharetra magna egestas. Sed in dictum nunc. Nunc dictum, dolor et laoreet euismod, leo odio blandit sem, feugiat aliquet massa libero nec massa."}></Card>
                <Card img={home_4} title={"Dental Hygiene"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo quam in ligula vestibulum, ac pharetra magna egestas. Sed in dictum nunc. Nunc dictum, dolor et laoreet euismod, leo odio blandit sem, feugiat aliquet massa libero nec massa."}></Card>
                <Card img={home_5} title={"Dental Hygiene"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo quam in ligula vestibulum, ac pharetra magna egestas. Sed in dictum nunc. Nunc dictum, dolor et laoreet euismod, leo odio blandit sem, feugiat aliquet massa libero nec massa."}></Card>
                <Card img={home_6} title={"Dental Hygiene"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo quam in ligula vestibulum, ac pharetra magna egestas. Sed in dictum nunc. Nunc dictum, dolor et laoreet euismod, leo odio blandit sem, feugiat aliquet massa libero nec massa."}></Card>
            </div>
        </>
    );

}

export default Home;