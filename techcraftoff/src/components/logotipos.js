import React from 'react';
import Slider from 'react-slick';
import '../style/logosCarusel.css'

// Estilos CSS para el carrusel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LogoCarousel = () => {
  // Configuración del carrusel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Lista de logotipos con enlaces
  const logos = [
    {
      imgSrc: 'https://tuatara.co/wp-content/uploads/2023/05/13.svg',
      alt: 'img1',
      title: 'img1',
    },
    {
      imgSrc: 'https://tuatara.co/wp-content/uploads/2023/05/25.svg',
      alt: 'img2',
      title: 'img2',
    },
    {
      imgSrc: 'https://tuatara.co/wp-content/uploads/2023/05/28.svg',
      alt: 'img3',
      title: 'img3',
    },
    {
      imgSrc: 'https://tuatara.co/wp-content/uploads/2023/05/17.svg',
      alt: 'img4',
      title: 'img4',
    },
    {
      imgSrc: 'https://tuatara.co/wp-content/uploads/2023/05/24.svg',
      alt: 'img5',
      title: 'img5',
    },
    {
      imgSrc: 'https://tuatara.co/wp-content/uploads/2023/05/12.svg',
      alt: 'img6',
      title: 'img6',
    },
    {
      imgSrc: 'https://tuatara.co/wp-content/uploads/2023/05/10-1.svg',
      alt: 'img7',
      title: 'img7',
    },
    {
      imgSrc: 'https://tuatara.co/wp-content/uploads/2023/05/14.svg',
      alt: 'img8',
      title: 'img8',
    },
    {
      imgSrc: 'https://tuatara.co/wp-content/uploads/2023/05/29.svg',
      alt: 'img9',
      title: 'img9',
    },
    {
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Firebase_icon.svg/210px-Firebase_icon.svg.png?20231023160108',
      alt: 'img11',
      title: 'img11',
    },
    {
      imgSrc: 'https://web-strapi.mrmilu.com/uploads/flutter_logo_470e9f7491.png',
      alt: 'img10',
      title: 'img10',
    },
  ];

  return (
    <div className="logo-carousel-container">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="logo-item">
            <a href={logo.link} target="_blank" rel="noopener noreferrer">
              <img
                src={logo.imgSrc}
                alt={logo.alt}
                title={logo.title}
                className="logo-image"
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoCarousel;
