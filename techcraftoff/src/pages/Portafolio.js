import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Asegúrate de importar los estilos CSS
import imagen1 from '../assets/vista1.jpg'; 
import imagen2 from '../assets/vista2.jpg';
import imagen3 from '../assets/vista3.jpg';
import '../style/Portafolio.css'

const Portafolio = () => {
    return (
      <>
      <div className='intro-portafolio'>
        
      </div>
        <Carousel>
            <div>
                <img src={imagen1} alt="Descripción de la imagen 1" />
            </div>
            <div>
                <img src={imagen2} alt="Descripción de la imagen 1" />
            </div>
            <div>
                <img src={imagen3} alt="Descripción de la imagen 1" />
            </div>
        </Carousel>
      </>
    );
}

export default Portafolio;
