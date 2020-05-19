import React from "react";
import { FaTwitter, FaGithub, FaDiscord, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const SocialShare = [
    { Social: <FaGithub />, link: "https://github.com/XMPrime/" },
    { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/jasonchen-webdev" },
    {
      Social: <FaDiscord />,
      link: "https://www.discordapp.com/users/98645598999154688",
    },
    { Social: <FaTwitter />, link: "https://twitter.com/" },
  ];

  const date = new Date();
  const curYear = date.getFullYear();

  return (
    <div
      className='footer-style-2 ptb--30 bg_image bg_image--1'
      data-black-overlay='6'
    >
      <div className='wrapper plr--50 plr_sm--20'>
        <div className='row align-items-center justify-content-between'>
          <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
            <div className='inner text-center'>
              <ul className='social-share rn-lg-size d-flex justify-content-flex-start liststyle'>
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
          <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
            <div className='inner text-center'>
              <ul className='social-share rn-lg-size d-flex justify-content-center liststyle'>
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
          <div className='col-lg-4 col-md-12 col-sm-12 col-12'>
            <div className='inner text-lg-right text-center mt_md--20 mt_sm--20'>
              <div className='text'>
                <p>
                  Copyright © {curYear} Rainbow-Themes. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
