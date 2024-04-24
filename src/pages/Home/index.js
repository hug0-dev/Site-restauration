import './index.css'
import Slider from '../../components/sliders'
import {Footer} from '../../components/footer'
import {Cards} from '../../components/Cards'
import logo from '../../components/Logo'
import image from '../../components/assets/images/logo1.png'
import Logo from '../../components/Logo'
import {Header} from '../../components/header'

const Home = () => {


    return(

        
        <div >
       
            <div className="background">
            <Header label="Bienvenue sur notre site"></Header>
            <div className="transbox">
            <Cards logo={logo} logoChange="display"> </Cards>
            <Logo.Display1 logo={image} logoChange="display"> </Logo.Display1>
            </div>
            </div>

            <div className='container-slider'>
            

            <Slider></Slider>
           
            
           
           
            </div>
            <Footer></Footer>
         </div>
    
    )
}
export default Home;