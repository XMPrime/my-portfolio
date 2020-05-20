import React, { Component } from "react";
import { FaTwitter, FaGithub, FaDiscord, FaLinkedinIn } from "react-icons/fa";

const axios = require("axios");
const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      sent: false,
      buttonText: "Submit",
    };
  }

  // formSubmit = (e) => {
  //   e.preventDefault();

  //   this.setState({
  //     buttonText: "...sending",
  //   });

  //   let data = {
  //     name: this.state.name,
  //     email: this.state.email,
  //     subject: this.state.subject,
  //     message: this.state.message,
  //   };

  //   axios
  //     .post("/contact", data)
  //     .then((res) => {
  //       console.log("post request sent");
  //       if (res.data.status === "success") {
  //         console.log("Message Sent.");
  //         // this.setState({ sent: true }, this.resetForm());
  //       } else if (res.data.status === "fail") {
  //         console.log("Message failed to send.");
  //       }
  //     })
  //     .catch(() => {
  //       console.log("Message not sent");
  //     });
  // };

  formSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      buttonText: "Message Sent",
    });
  };

  render() {
    const SocialShare = [
      { Social: <FaGithub />, link: "https://github.com/XMPrime/" },
      {
        Social: <FaLinkedinIn />,
        link: "https://www.linkedin.com/in/jasonchen-webdev",
      },
      {
        Social: <FaDiscord />,
        link: "https://www.discordapp.com/users/98645598999154688",
      },
      { Social: <FaTwitter />, link: "https://twitter.com/" },
    ];

    return (
      <div className='rn-contact-us ptb--120 bg_color--1' id='contact'>
        <div className='contact-form--1'>
          <div className='container'>
            <div className='row row--35 align-items-start'>
              <div className='col-lg-6 order-2 order-lg-1'>
                <div className='section-title text-left mb--50'>
                  <h2 className='title'>Contact Me</h2>
                  <p className='description'>
                    I am available for hire and freelance work. Connect with me
                    via phone: <a href='tel:+01-858-353-2482'>858-353-2482</a> ,
                    email:
                    <a href='mailto:jason.l.chen@gmail.com'>
                      {" "}
                      jason.l.chen@gmail.com
                    </a>
                    , or any of the other methods below.
                  </p>
                  <div className='thumbnail mb_md--30 mb_sm--30'>
                    <ul className='social-share rn-lg-size d-flex justify-content-lg-start justify-content-between liststyle'>
                      {SocialShare.map((val, i) => (
                        <li key={i}>
                          <a
                            href={`${val.link}`}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            {val.Social}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className='form-wrapper'>
                  <form
                    // action='/'
                    id='contact-form'
                    // method='post'
                    onSubmit={(e) => this.formSubmit(e)}
                  >
                    <label htmlFor='name'>
                      <input
                        type='text'
                        name='name'
                        id='name'
                        value={this.state.name}
                        onChange={(e) => {
                          this.setState({ name: e.target.value });
                        }}
                        placeholder='Your Name *'
                      />
                    </label>

                    <label htmlFor='email'>
                      <input
                        type='email'
                        name='email'
                        id='email'
                        value={this.state.email}
                        onChange={(e) => {
                          this.setState({ email: e.target.value });
                        }}
                        placeholder='Your email *'
                      />
                    </label>

                    <label htmlFor='subject'>
                      <input
                        type='text'
                        name='subject'
                        id='subject'
                        value={this.state.subject}
                        onChange={(e) => {
                          this.setState({ subject: e.target.value });
                        }}
                        placeholder='Write a Subject'
                      />
                    </label>
                    <label htmlFor='message'>
                      <textarea
                        type='text'
                        id='message'
                        name='message'
                        value={this.state.message}
                        onChange={(e) => {
                          this.setState({ message: e.target.value });
                        }}
                        placeholder='Your Message'
                      />
                    </label>
                    <button
                      className='rn-button-style--2 btn-solid'
                      type='submit'
                      value='submit'
                      name='submit'
                      id='mc-embedded-subscribe'
                    >
                      {this.state.buttonText}
                    </button>
                  </form>
                </div>
              </div>
              {/* <div className='col-lg-6 order-1 order-lg-2'>
                <div className='thumbnail mb_md--30 mb_sm--30'>
                  <ul className='social-share rn-x-lg-size d-flex justify-content-center liststyle'>
                    {SocialShare.map((val, i) => (
                      <li key={i}>
                        <a
                          href={`${val.link}`}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          {val.Social}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
