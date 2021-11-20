import React from 'react';
import { Col, Row } from 'react-materialize';
import './AboutCards.css';

const AboutCard = (children) => {
  const { name, title, email, img } = children;
  return (
    <Col s={12} m={6} className="about-card">
      <Col s={4} className="conhecaasmet-card__imagem">
        <img
          className="z-depth-2"
          src={img}
          alt={name}
        />
      </Col>
      <Col s={8} className="about-card__details">
        <Col className="about-card__title">{title}</Col>
        <Col className="about-card__name">{name} </Col>
        <Col className="about-card__email">{email}</Col>
      </Col>
    </Col>
  );
};

export default AboutCard;
