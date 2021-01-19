import React from 'react';
import ProjectThumbnails from '../elements/ProjectThumbnails';

export default function Projects() {
  return (
    <div className='rn-team-area ptb--120 bg_color--1' id='projects'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='section-title service-style--3 text-left mb--25 mb_sm--0'>
              <h2 className='title'>Projects</h2>
              <p>Below are some projects that I am quite proud of!</p>
            </div>
          </div>
        </div>
        <div className='row'>
          <ProjectThumbnails column='col-lg-6 col-md-6 col-sm-6 col-12' />
        </div>
      </div>
    </div>
  );
}
