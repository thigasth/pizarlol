import react from "react";
import './style.css';
import Cardapio from "./Pizaroocardapio.png";

const BackgroundComponent = () => {
    return (
      <div className="background">
        {}
      </div>
    );
  };
  
  function Pagina3() {
    return (
        <div className="background">
        <div className="overlay-text">
           <img src={Cardapio} alt="" style={{ width: 50000, height: 500 }} />
        </div>
        <div className="content">
            {/* Outros conteúdos podem ser adicionados aqui */}
        </div>
    </div>
    );
  }

export default Pagina3;