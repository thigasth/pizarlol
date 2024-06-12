import react from "react";
import './style.css';

function Pagina2() {
    return (
        <div className="background">
            <div className="overlay-text">
                <h1>Sobre Nós?</h1>
                <p>Bem-vindos à Pizzaria Pizzaroo, onde tradição e paixão se encontram para criar as melhores pizzas artesanais! Fundada em 1994 por João Rossi,
                     um entusiasta da gastronomia italiana, a Pizzaroo surgiu após uma inspiradora viagem à Itália. Com receitas familiares e ingredientes selecionados,
                      nossa missão é proporcionar uma experiência única e saborosa a cada mordida.</p>
                      <br />
                <h1>Nossa Historia</h1>
                <p>João Rossi, ao retornar da Itália, decidiu trazer para nossa cidade o verdadeiro sabor das pizzas artesanais italianas. Desde então,
                     a Pizzaroo se tornou um ponto de encontro para famílias e amigos, crescendo sem perder o compromisso com a qualidade. Utilizamos os melhores tomates,
                      queijos e farinhas, e nossas massas são fermentadas por 48 horas para garantir leveza e crocância.</p>
            </div>
            <div className="content">
                {}
            </div>
        </div>
    );
}

export default Pagina2;
