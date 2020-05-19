import React, { Component } from "react";
// import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import d_and_d from "../assets/images/D&D.jpg";
import dance from "../assets/images/dance.jpg";

let ProjectsContent = [
  {
    image: d_and_d,
    title: "Responsive D&D Character Sheet",
    url: "https://responsive-5e-character-sheet.herokuapp.com/",
    technologies: "React, Redux, JS, Axios",
    description: `Still a work in progress, but I am planning to expand it into
       a useable website where users can create accounts and save their 
       characters for easy reference.`,
  },
  {
    image: dance,
    title: "Dance Judge App",
    url: "https://dance-judge-app.herokuapp.com/",
    technologies: "React, Redux, JS, Axios",
    description: `A replication of a real world application by CoDa Dance Company designed for judges 
      critiquing dance performances.`,
  },
];

class ProjectThumbnails extends Component {
  render() {
    const { column } = this.props;
    return (
      <React.Fragment>
        {ProjectsContent.map((project, i) => (
          <div className={`${column}`} key={i}>
            <div className='team'>
              <a
                href={project.url}
                target='_blank'
                rel='noopener noreferrer'
                className='thumbnail'
              >
                <img
                  className='project-image'
                  src={project.image}
                  alt='Stock Images'
                />
              </a>
              <div className='content'>
                <h4 className='title'>{project.title}</h4>
                <p className='description'>{project.technologies}</p>
                <p className='description'>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default ProjectThumbnails;
