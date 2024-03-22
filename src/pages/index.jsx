import React from "react";
import AboutUs3 from "../components/About-us3/about-us3";
import Blogs4 from "../components/blogs/Blogs4/blogs4";
import CallToAction from "../components/Call-to-action/call-to-action";
import Footer from "../components/Footer/footer";
import FullTestimonials from "../components/Full-testimonials/full-testimonials";
// import Intro4 from "../components/Intro4/intro4";
import MinimalArea2 from "../components/Minimal-Area2/minimal-area2";
import Navbar from "../components/Navbar/navbar";
import Services3 from "../components/Services3/services3";
import Team from "../components/Team/team";
import Works3 from "../components/Works3/works3";
import DarkTheme from "../layouts/Dark";

const Home = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      {/* <Intro4 /> */}
      <AboutUs3 />
      <Works3 />
      <Services3 />
      <MinimalArea2 />
      <FullTestimonials classText="pb-0" />
      <Team />
      <Blogs4 />
      <CallToAction />
      <Footer />
    </DarkTheme>
  );
};

export default Home;
