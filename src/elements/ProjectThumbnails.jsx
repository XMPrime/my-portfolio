import React, { Component } from "react";
// import dnd from "../assets/images/D&D.jpg";
import dance from "../assets/images/dance.jpg";
import creditCard from "../assets/images/creditCard.jpg";
import jeopardy from "../assets/images/jeopardy.jpg";
import { FaGithub } from "react-icons/fa";

let ProjectsContent = [
  {
    image: jeopardy,
    title: "JavaScript Quiz",
    url: "https://quiz-scraper.netlify.app/",
    imgText: "I'll take JavaScript for $1000, Alex!",
    github: "https://github.com/XMPrime/javascript-quiz/",
    description: [
      `<b>What I learned:</b> TypeScript, Puppeteer, Netlify Functions, Styled-Components, PrismJS,
      how to get around CORS...`,
      `I used 
        <a
          href='https://github.com/puppeteer/puppeteer'
          target='_blank'
          rel='noopener noreferrer'
        >Puppeteer</a>
      to scrape 
        <a
          href='https://www.instagram.com/theavocoder/'
          target='_blank'
          rel='noopener noreferrer'
        >Lydia Hallie's</a>
      awesome list of JavaScript questions from her 
        <a
          href='https://github.com/lydiahallie/javascript-questions'
          target='_blank'
          rel='noopener noreferrer'
        >Github repo</a> 
      and transformed that data into a simple fullstack quiz application. Thanks to Netlify 
      Functions, I was able to run Puppeteer as a serverless backend and React from the front. 
      I also decided to learn TypeScript and code the entire project with it as an extra challenge.`,
    ],
  },
  {
    image: creditCard,
    title: "Animated Credit Card Form",
    url: "https://animated-credit-card.netlify.app/",
    imgText: "Shut up and take my money!",
    github: "https://github.com/XMPrime/credit-card-form/",
    description: [
      `<b>What I learned:</b> Framer-Motion, CSS animation, Reactstrap`,
      `Saw this challenge on a
        <a
          href='https://medium.com/better-programming/here-are-6-frontend-challenges-to-code-9952190c97cc'
          target='_blank'
          rel='noopener noreferrer'
        >Medium article</a>
      and wanted to try making it from scratch. The app is a fun credit card form that has
      micro-interactions with the user in the form of card-type detection, animations, and dynamic
      number formatting. I also gave Reactstrap a try for the styling, but didn't find it particular 
      interesting or useful.`,
    ],
  },
  {
    image: dance,
    title: "Dance Judge App",
    url: "https://dance-judge.netlify.app/",
    imgText: "Show me your moves!",
    github: "https://github.com/XMPrime/dance-360/",
    description: [
      `<b>What I learned:</b> React, React Hook Form, Redux, ES6, ESLint, Axios, Moment.js`,
      `A replication of a real-world application called
        <a
          href='https://coda.breakthefloor.com/'
          target='_blank'
          rel='noopener noreferrer'
        >CODA</a>
      by Break The Floor Productions. The app is designed to assist judges in giving
      critiques for dance performances. To accomplish this, the app makes requests to
        <a
          href='https://dance360.com/'
          target='_blank'
          rel='noopener noreferrer'
        >Dance360's</a>
      API to populate the user interface and submit scoring breakdowns to its database.`,
      `With the help of my mentor, who works for Break The Floor Productions, I was able to
      complete my first major coding project. Making this app solidified my understanding of the
      core features of React, Redux, JavaScript, HTML, and CSS.`,
    ],
  },
  // {
  //   image: dnd,
  //   title: "Responsive D&D Character Sheet",
  //   url: "https://responsive-5e-character-sheet.netlify.app/",
  //   imgText: "Roll for initiative!",
  //   technologies: "React, Redux, JavaScript",
  //   description: `This app started as an exercise in mobile-first design and responsive
  //   layouts by rearranging the official
  //   <a
  //     href='https://media.wizards.com/2015/downloads/dnd/DDALRoD_CharacterSheet.pdf'
  //     target='_blank'
  //     rel='noopener noreferrer'
  //   >character sheet</a> for Dungeons & Dragons 5<sup>th</sup> Edition. As of now, I am
  //   expanding its functionality to be able to replace a pen & paper character sheet. The
  //   end goal is to implement a backend with a RESTful API that contains user data and rule
  //   references.`,
  // },
];

class ProjectThumbnails extends Component {
  render() {
    const { column } = this.props;
    return (
      <React.Fragment>
        {ProjectsContent.map((project, i) => (
          <div className={`${column}`} key={i}>
            <div className='content'>
              <h4 className='project-header'>
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {project.title}
                  <FaGithub className='github' />
                </a>
              </h4>
              {/* <a className='project-header' href={project.github}>
                <h4 className='title'>{project.title}</h4>
                <FaGithub className='github' />
              </a> */}
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

                <div className='content'>
                  <h4 className='title img-text'>{project.imgText}</h4>
                </div>
              </a>
            </div>
            <br />
            <div className='content'>
              {project.description.map((text) => (
                <p
                  key={text}
                  className='description'
                  dangerouslySetInnerHTML={{ __html: text }}
                ></p>
              ))}
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default ProjectThumbnails;
