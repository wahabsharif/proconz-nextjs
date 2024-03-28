import React from "react";
import CallToAction from "../components/Call-to-action/call-to-action";
import Footer from "../components/Footer/footer";
import HomeBanner from "../components/Home/home-banner";
import HomeMatrix from "../components/Home/home-matrix";
import OurProject from "../components/Home/our-projects";
import WhoWeAre from "../components/Home/who-we-are";
import Navbar from "../components/Navbar/navbar";
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
      <HomeBanner />
      <WhoWeAre />
      <HomeMatrix />
      <OurProject />
      <CallToAction />
      <Footer />
    </DarkTheme>
  );
};

export default Home;
