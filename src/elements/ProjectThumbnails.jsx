import React, { Component } from "react";
// import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import dnd from "../assets/images/D&D.jpg";
import dance from "../assets/images/dance.jpg";

let ProjectsContent = [
  {
    image: dance,
    title: "Dance Judge App",
    url: "https://dance-judge.netlify.app/",
    imgText: "Show me your moves!",
    technologies: "React, Redux, JS, Axios",
    description: `A replication of a real-world application called 
    <a 
      href='https://coda.breakthefloor.com/' 
      target='_blank'
      rel='noopener noreferrer'
    >CODA</a>
     by Break The Floor Productions. The app is designed to assist judges in giving 
    critiques for dance performances. To accomplish this, the app makes GET and POST 
    requests to 
    <a 
      href='https://dance360.com/' 
      target='_blank'
      rel='noopener noreferrer'>Dance360</a>'s 
    API to retreive dance event data, populate the user interface, 
    and submit scoring breakdowns to Dance360's database.`,
  },
  {
    image: dnd,
    title: "Responsive D&D Character Sheet",
    url: "https://responsive-5e-character-sheet.netlify.app/",
    imgText: "Roll for initiative!",
    technologies: "React, Redux, JS, Axios",
    description: `This app started as an exercise in mobile-first design and responsive 
    layouts by rearranging the official 
    <a 
      href='https://media.wizards.com/2015/downloads/dnd/DDALRoD_CharacterSheet.pdf' 
      target='_blank'
      rel='noopener noreferrer'
    >character sheet</a> for Dungeons & Dragons 5<sup>th</sup> Edition. As of now, I am 
    expanding its functionality to be able to replace a pen & paper character sheet. The 
    end goal is to implement a backend with a RESTful API that contains user data and rule 
    references.`,
  },
];

class ProjectThumbnails extends Component {
  render() {
    const { column } = this.props;
    return (
      <React.Fragment>
        {ProjectsContent.map((project, i) => (
          <div className={`${column}`} key={i}>
            <div className='content'>
              <h4 className='title'>{project.title}</h4>
              <p className='technologies'>{project.technologies}</p>
            </div>
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
                  alt={project.imgText}
                />
              </a>
              <div className='content'>
                <h4 className='title img-text'>{project.imgText}</h4>
              </div>
            </div>
            <br />
            <div className='content'>
              <p
                className='description'
                dangerouslySetInnerHTML={{ __html: project.description }}
              ></p>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default ProjectThumbnails;
