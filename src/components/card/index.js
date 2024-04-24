import React, { useState } from 'react';
import "./index.css";

export const Card = ({ title, cardImage, content, variant, prix }) => {
  const [showDescription, setShowDescription] = useState(false);
  const cardClassName = `card ${variant}`;

  // Fonction pour basculer l'état de visibilité
  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className={cardClassName}>
      <img src={cardImage} alt={title} />
      <h2>{title}</h2>
      <button onClick={toggleDescription}>
        {showDescription ? 'Masquer la description' : 'Afficher la description'}
      </button>
      <h5>{prix}</h5>
      {showDescription && <p>{content}</p>}
    </div>
  );
};
