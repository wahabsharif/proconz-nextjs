import React from "react";
import Link from "next/link";
import cardMouseEffect from "../../common/cardMouseEffect";

const HomeMatrix = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
  }, []);
  return (
    <section className="feat sub-bg section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="sec-head">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                ProConz
              </h6>
              <h3 className="wow color-font">Matrix</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 items md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-search"></i>
              </span>
              <h5>Investment</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              {/* <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-speedometer"></i>
              </span>
              <h5>Construction</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              {/* <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items sm-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-cube"></i>
              </span>
              <h5>Trading</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              {/* <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMatrix;
