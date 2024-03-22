import React from "react";
import particlesConfig from "./particle-config";
import Particles from "react-tsparticles";

const ParticlesBg = () => {
  return (
    <div>
      {" "}
      <Particles id="particles-js" options={particlesConfig} />
    </div>
  );
};

export default ParticlesBg;
