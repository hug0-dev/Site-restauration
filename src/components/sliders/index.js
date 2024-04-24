import React, { useState } from "react";
import './index.css';

const images = [
  "https://s.yimg.com/ny/api/res/1.2/K6tjpoa0mcfDVzf89Ot8gw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTEyNTc7Y2Y9d2VicA--/https://media.zenfs.com/fr/elle-fr.fr/413de65ecba331d2cda84aaea745040e",
  "https://s.yimg.com/ny/api/res/1.2/b5gqRY5.I20jaJ5q75BWEw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTEyMzc7Y2Y9d2VicA--/https://media.zenfs.com/fr/elle-fr.fr/89a4a36e1d3dae7be4b7054015bf2a8b",
  "https://s.yimg.com/ny/api/res/1.2/EcDvPErC33H9E6D1bhu3vw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTEyMzU7Y2Y9d2VicA--/https://media.zenfs.com/fr/elle-fr.fr/a563aada91dff6e4175a8c9cbe786a04",
];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  return (
    <div className="container-sliders">
      <div className="slider">
      <p className="description">
    Sous la direction de notre Chef M. Eric GOURMET, vous allez déguster des plats préparés avec passion et délicatesse.<br/>
     Nous vous proposons des plats comme l'Evasion Marine au Risotto , le Délice de Boef Raffiné, ou encore l'Arc-en-ciel Végétal Grillé.<br/>
     Venez et savourez nos plats de saison, vous aurez énormement de choix.
     Aussi, vous pouvez réserver vos tables à l'avance ou venir directement sur place . 
         </p>
      <button onClick={prevImage}>Previous</button>
        <img className="img" src={images[currentImage]} alt={`${currentImage}`} />
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
};

export default ImageSlider;