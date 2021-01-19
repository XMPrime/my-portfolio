import React, { useState, useEffect } from 'react';
import Particles from 'react-particles-js';

export default function Home() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1200);
  const displayParticles = () => {
    setDesktop(window.innerWidth > 1200);
  };
  const homeParams = [
    {
      textPosition: 'text-center',
      category: '',
      title: "Hi, I'm Jason Chen",
      description: "I'm a software engineer that always has a growth mindset!",
      buttonText: 'Check out my work',
      buttonLink: '#projects',
    },
  ];

  const particleParams = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 1000,
        },
      },
      line_linked: {
        enable: true,
        opacity: 0.2,
        color: '#ffffff',
      },
      move: {
        direction: 'right',
        speed: 0.15,
      },
      size: {
        value: 3,
      },
      opacity: {
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.05,
        },
      },
    },
    interactivity: {
      events: {
        onclick: {
          enable: true,
          mode: 'push',
        },
        onhover: {
          enable: true,
          mode: 'repulse',
        },
      },
      modes: {
        push: {
          particles_nb: 1,
        },
      },
    },
    retina_detect: true,
  };

  useEffect(() => {
    window.addEventListener('resize', displayParticles);
  });

  return (
    <div
      className='slider-activation slider-creative-agency with-particles'
      id='home'
    >
      <div className='frame-layout__particles'>
        {isDesktop && <Particles params={particleParams} />}
      </div>
      <div className='bg_image bg_image--27'>
        {homeParams.map((value, index) => (
          <div
            className='slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center flex-column'
            key={index}
          >
            <div className='container back'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className={`inner ${value.textPosition}`}>
                    {value.category ? <span>{value.category}</span> : ''}
                    {value.title ? (
                      <h1 className='title theme-gradient'>{value.title}</h1>
                    ) : (
                      ''
                    )}
                    {value.description ? (
                      <p className='description'>{value.description}</p>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
            </div>
            {value.buttonText ? (
              <div className='slide-btn front'>
                <a
                  className='rn-button-style--2 btn-primary-color'
                  href={`${value.buttonLink}`}
                >
                  {value.buttonText}
                </a>
              </div>
            ) : (
              ''
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
