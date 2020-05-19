import React from 'react'
import { FiX, FiMenu } from "react-icons/fi";
import Scrollspy from "react-scrollspy";

export default function Header() {
    function menuTrigger() {
        document.querySelector(".header-wrapper").classList.toggle("menu-open");
      }
      function CLoseMenuTrigger() {
        document.querySelector(".header-wrapper").classList.remove("menu-open");
      }
    
    return (
        <header className="header-area formobile-menu header--fixed default-color">
          <div className="header-wrapper" id="header-wrapper">
            <div className="header-left">
              <div className="logo">
                <a href="/">
                  <h3 className="logo-1">JC</h3>
                  <h3 className="logo-2">JC</h3>
                </a>
              </div>
            </div>
            <div className="header-right">
              <nav className="mainmenunav d-lg-block">
                <Scrollspy
                  className="mainmenu"
                  items={["home", "projects", "about", "contact"]}
                  currentClassName="is-current"
                  offset={-200}
                >
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/#projects">Projects</a>
                  </li>
                  <li>
                    <a href="/#about">About</a>
                  </li>
                  <li>
                    <a href="/#contact">Contact</a>
                  </li>
                </Scrollspy>
              </nav>
              {/* Start Humberger Menu  */}
              <div className="humberger-menu d-block d-lg-none pl--20">
                <span
                  onClick={() => menuTrigger()}
                  className="menutrigger text-white"
                >
                  <FiMenu />
                </span>
              </div>
              {/* End Humberger Menu  */}
              <div className="close-menu d-block d-lg-none pt--15">
                <span onClick={() => CLoseMenuTrigger()} className="closeTrigger">
                  <FiX />
                </span>
              </div>
            </div>
          </div>
        </header>
    )
}
