import react from "react";
import './style.css';

const BackgroundComponent = () => {
    return (
      <div className="background">
        {}
      </div>
    );
  };
  
  function Pagina4() {
    return (
        <div className="background">
        <div className="overlay-text">
            <h1>Endereço e Telefone</h1>
            <p>Visite-nos em:</p>
            <p>Rua das Oliveiras, 123</p>
            <p>Bairro Jardim Florido</p>
            <p>Curitiba - PR, CEP: 01234-567</p>
            <br />
            <h2>Para reservas e pedidos, ligue</h2>
            <p>(41) 3456-7890</p>

        </div>
        <div className="content">
            {/* Outros conteúdos podem ser adicionados aqui */}
        </div>
    </div>
    );
  }

export default Pagina4;