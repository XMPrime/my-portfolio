import React, { Component, Fragment } from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import Header from "../component/Header";
import Home from "../component/Home";
import Projects from "../component/Projects";
import About from "../component/About";
import Contact from "../component/Contact";
// import Footer from "../component/Footer";

class HomeParticles extends Component {
  constructor(props) {
    super(props);
    this.stickyHeader = this.stickyHeader.bind(this);

    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }
  stickyHeader() {}
  render() {
    window.addEventListener("scroll", function () {
      var value = window.scrollY;
      if (value > 100) {
        document.querySelector(".header--fixed").classList.add("sticky");
      } else {
        document.querySelector(".header--fixed").classList.remove("sticky");
      }
    });

    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }

    return (
      <Fragment>
        <Helmet pageTitle="Jason's Portfolio" />
        <Header />
        <Home />
        <Projects />
        <About />
        <Contact />
        {/* <Footer /> */}

        {/* Start Back To Top */}
        <div className='backto-top'>
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}
      </Fragment>
    );
  }
}
export default HomeParticles;
