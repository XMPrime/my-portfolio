import React, { Component } from 'react';
// import dnd from "../assets/images/D&D.jpg";
import dance from '../assets/images/dance.jpg';
import creditCard from '../assets/images/creditCard.jpg';
import jeopardy from '../assets/images/jeopardy.jpg';
import target from '../assets/images/target.webp';
import sdc from '../assets/images/sdc.jpg';
import SSSnip from '../assets/images/SSSnip.png';
import { FaGithub } from 'react-icons/fa';

let ProjectsContent = [
  {
    image: target,
    title: 'Targét',
    url: 'http://13.57.232.156:3001/12/',
    imgText: "It's pronounced Tar · zhay~.",
    github: 'https://github.com/CodingChefsFEC/hrsjo2-FEC-product-overview',
    description: [
      `<b>What I learned:</b> Coding in a team, Microservice Architecture, Amazon Web Services, Express, MongoDB, Webpack, Babel`,
      `My team and I recreated Target's product page by creating 3 different microservices and linking them together via a proxy server. This is my portion which includes the image zoom, image carousel modal, and star ratings modal React components. I utilized styled-components to meticulously replicate the CSS styling of Target’s product page (<a
        href='https://www.target.com/p/7-wonders-board-game/-/A-14203909'
        target='_blank'
        rel='noopener noreferrer'
      >for comparison</a>)· I then created a script to generate and seed 100 randomly generated products on MongoDB. Each of these products can be viewed thanks to dynamically configured API endpoints which query the database by their respective ID numbers.
      .`,
    ],
  },
  {
    image: dance,
    title: 'Dance Judge App',
    url: 'https://dance-judge.netlify.app/',
    imgText: 'Show me your moves!',
    github: 'https://github.com/XMPrime/dance-360/',
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
    ],
  },
  {
    image: SSSnip,
    title: 'SSSnip',
    url:
      'https://drive.google.com/file/d/1KVNjiXTRgUsppdgTpooH5E7cVsScFWca/view?usp=sharing',
    imgText: 'Simply point and click =)',
    github: 'https://github.com/XMPrime/targeted-screen-capture',
    description: [
      `<b>What I learned:</b> Electron, JSZip`,
      `Started with me wanting to use TensorFlow to create a machine that can identify viewable elements in a game called Team Fight Tactics. However, getting enough images to train and teach a model is an inconvenient process. This desktop app solves the problem of manually pausing a video, taking a screenshot, cropping the image, and repeating enough times for each and every relevant game element.`,
    ],
  },
  {
    image: sdc,
    title: 'Adidas Product & Inventory',
    url: 'https://github.com/Albert-Friends-The-SQL/Side-Bar',
    imgText: 'Gotta go fast!',
    github: 'https://github.com/Albert-Friends-The-SQL/Side-Bar',
    description: [
      `<b>What I learned:</b> System Design, PostgreSQL, NGINX, Loader, k6, New Relic`,
      `With a database containing 10M unique shoe products and 150M inventory records based on shoe sizes, this baby can handle upwards of 1,200 requests per second with a 0% error rate and an average 18ms latency. To achieve this, I implemented indexing, caching, and load balancing to optimize GET request performance first and then horizontally scaled with multiple AWS EC2 instances.`,
    ],
  },
  {
    image: jeopardy,
    title: 'JavaScript Quiz',
    url: 'https://quiz-scraper.netlify.app/',
    imgText: "I'll take JavaScript for $1000, Alex!",
    github: 'https://github.com/XMPrime/javascript-quiz/',
    description: [
      `<b>What I learned:</b> TypeScript, Puppeteer, Netlify Functions, Styled-Components, PrismJS,
      how to get around CORS...`,
      `I used
        <a
          href='https://www.target.com/p/7-wonders-board-game/-/A-14203909'
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
    title: 'Animated Credit Card Form',
    url: 'https://animated-credit-card.netlify.app/',
    imgText: 'Shut up and take my money!',
    github: 'https://github.com/XMPrime/credit-card-form/',
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
