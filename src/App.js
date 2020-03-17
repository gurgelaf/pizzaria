import React from 'react';
import './App.css';
import Pizza from './img/pizza.jpg';
import Whatsapp from './img/zapzapzap.png';
import Casa from './img/casa.jpg';
import Peru from './img/peru.png';
import './css/bootstrap.css';

function Nav() {
  return (
    <div id="nav">
        <a href="#jumbotron">Menu</a>
        <a href="#serviços">Serviços</a>
        <a href="#contato">Contato</a>
        <a href="#emprego">Emprego</a>
    </div>
  );
}
function Jumbotron () {
  return ( 
    <div id="jumbotron">
      <img alt="desenho de um peru" src={Peru}/>
      <h1>Pizzaria ChicoTripa</h1>
      <p>A pizzaria raiz!</p>
    </div>
  );
}

function Serviços () {
  return (
    <div id="serviços">
      <div id="serviçosHeader">
        <div className="backgroundcolor">
          <h1>Serviços</h1>
          <p>Ofereçemos os mais diversos sabores de pizza para as mais dietas. Confira: </p>
        </div>
      </div>

      <div id="serviçosConteúdo">
        <div className="serviçosContainer">
          <img className="spizza1" alt="Pizza de Calabresa" src={Pizza}/>
          <h1>Calabresa</h1> 
          <a href="#jumbotron">adicionar ao carrinho</a>
        </div>
        <div className="serviçosContainer">
          <img className="spizza1" alt="Pizza de Camarão" src={Pizza}/>
          <h1>Camarão</h1>
          <a href="#jumbotron">adicionar ao carrinho</a>
        </div>
        <div className="serviçosContainer">
          <img className="spizza1" alt="Pizza Vegetariana" src={Pizza}/>
          <h1>Vegetariana</h1>
          <a href="#jumbotron">adicionar ao carrinho</a>
        </div>
      </div>
    </div>
  )
}

function Emprego () {
  return (
    <div id="emprego">
      <div className="backgroundcolor">
        <h1>Emprego</h1>
        <p>Vagas para emprego disponíveis. Acesse os contatos para mais informações</p>
      </div>
    </div>
  );
}

function Contato() {
  return (
    <div id="contato">
      <div id="contato1">
      <p><img src={Whatsapp} alt="zapzap"/>Whatsap: +55 (12) 12345-1234 (número ilustrativo)</p>
      <p><img src={Casa} alt="casa"/>Endereço: Rua da Casa da Mãe Joana 69</p>
      <p></p>
      </div>
      <div id="contato2">
        <p>Site feito em React para treinamento. Feito por:</p>
        <p>GurgelAF: Desenvolvedor Web, Programador.</p>
        <p>GurgelFF: Auxiliar do projeto.</p>
      </div>
    </div>
  );
}
function App() {
  return <div id="app">
    <Nav/>
    <Jumbotron/>
    <Serviços/>
    <Emprego/>
    <Contato/>
  </div>;
}

export default App;