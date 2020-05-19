import React from "react";
import aboutImage from "../assets/images/giant_naan.jpeg";

export default function About() {
  return (
    <div className='about-area ptb--120 bg_color--5' id='about'>
      <div className='about-wrapper'>
        <div className='container'>
          <div className='row row--35 align-items-center'>
            <div className='col-lg-5'>
              <div className='thumbnail'>
                <img className='w-100' src={aboutImage} alt='Giant naan!' />
              </div>
            </div>
            <div className='col-lg-7'>
              <div className='about-inner inner'>
                <div className='section-title'>
                  <h2 className='title'>
                    About Me
                    <span role='img' aria-label='happy-face'>
                      😃
                    </span>
                  </h2>
                  <p className='description'>
                    I highly value teamwork and cooperation. That said, I want
                    to be a good fit within the company culture. Below are some
                    of my favorite interests and hobbies. Hopefully there's some
                    overlap!
                  </p>
                </div>
                <div className='row mt--30'>
                  <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                    <div className='about-us-list'>
                      <h3 className='title'>Coding</h3>
                      <p>
                        Learning to code has really changed the way I see
                        self-fulfillment. Having the ability to build stuff for
                        myself and others to use is both fun and challenging!
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                    <div className='about-us-list'>
                      <h3 className='title'>Boardgames</h3>
                      <p>
                        Terraforming Mars, Castles of Mad King Ludwig, and The
                        Resistance: Avalon are among some of my favorites, but
                        I'm always down to play anything!
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                    <div className='about-us-list'>
                      <h3 className='title'>Table Top RPGs</h3>
                      <p>
                        I mostly play D&D 5<sup>th</sup> edition and currently
                        DM for a Ghosts of Saltmarsh campaign. I've also dabbled
                        in Pathfinder and FFG's Star Wars RPG. I would love to
                        try and learn other systems!
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                    <div className='about-us-list'>
                      <h3 className='title'>Climbing</h3>
                      <p>
                        Or as I like to call it, solving puzzles with your body!
                        The exercise just happens to be a nice bonus. Climbing
                        is great because your progression is always clearly in
                        view (literally and figuratively).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
