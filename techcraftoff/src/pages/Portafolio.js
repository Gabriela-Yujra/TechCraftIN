/*import { Carousel } from 'react-responsive-carousel';
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

export default Portafolio;*/
import imagen1 from '../assets/vista1.jpg'; 
import imagen2 from '../assets/vista2.jpg';
import imagen3 from '../assets/vista3.jpg';
import '../style/Portafolio.css'

const Portafolio = () => {
  const handleAccordionClick = (index) => {
    const accordionItem = document.querySelector(`#accordion-item-${index}`);
    accordionItem.classList.toggle('active');
  };

  return (
    <>
    <div className='portafolio'>
      <h1>PharmaTech Guia</h1>
      <div className='accordion'>
        <div className='accordion-item' id='accordion-item-1' onClick={() => handleAccordionClick(1)}>
          <img src={imagen1} alt="Descripción de la imagen 1" />
          <div className='accordion-content'>
            <p></p>
          </div>
        </div>
        <div className='accordion-item' id='accordion-item-2' onClick={() => handleAccordionClick(2)}>
          <img src={imagen2} alt="Descripción de la imagen 2" />
          <div className='accordion-content'>
            <p>Diseño de páginas web empresa web en colombia</p>
          </div>
        </div>
        <div className='accordion-item' id='accordion-item-3' onClick={() => handleAccordionClick(3)}>
          <img src={imagen3} alt="Descripción de la imagen 3" />
          <div className='accordion-content'>
            <p>Diseño de páginas web diseno responsive web</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Portafolio;

