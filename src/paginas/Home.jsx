import React from "react";
import './style.css';
import Logo from "./Logo.png";

const BackgroundComponent = () => {
  return (
    <div className="background">
      {}
      <div className="background">
        <div className="overlay-text">
           <img src={Logo} alt="" style={{ width: 50000, height: 500 }} />
        </div>
        <div className="content">
            {/* Outros conteúdos podem ser adicionados aqui */}
        </div>
    </div>
    </div>
  );
};

function Home() {
  return (

    <div>
      <BackgroundComponent />
      {}
    </div>
    
  );
}

export default Home;
