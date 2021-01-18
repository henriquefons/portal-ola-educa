import React from 'react';
import './style.css';
import Parallax from 'react-materialize/lib/Parallax';

const ComponentParallax = () => (
  <div className="hide-on-med-and-down">
    <Parallax
      className="component-parallax"
      image={<img alt="" src="https://i.postimg.cc/K8tZgk3W/download.jpg" />}
      options={{
        responsiveThreshold: 0,
      }}
    />
  </div>
);

export default ComponentParallax;
