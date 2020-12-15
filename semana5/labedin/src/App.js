import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from "./components/CardPequeno/CardPequeno"

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://www.flaticon.com/svg/static/icons/svg/3231/3231618.svg" 
          nome="Daniel Pinheiro Ratti" 
          descricao="Oi, eu sou o Daniel. Sou formado e Administração de empresas e atualmente aluno da turma Epps da Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="dados-container">
        <div className="page-section-container">
          <CardPequeno
            imagem="https://www.flaticon.com/svg/static/icons/svg/732/732200.svg"
            titulo="Email:"
            email="danielpr55rr@gmail.com"
          />

          <CardPequeno
            imagem="https://www.flaticon.com/svg/static/icons/svg/609/609803.svg"
            titulo="Endereço:"
            endereco="Rua Mont Royal"
          />

        </div>
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://www.flaticon.com/svg/static/icons/svg/2228/2228548.svg" 
          nome="Prefeitura de Indaiatuba" 
          descricao="Atuei como estágiario no departamento de rendas imobiliárias." 
        />
        
        <CardGrande 
          imagem="https://www.flaticon.com/svg/static/icons/svg/2916/2916315.svg" 
          nome="ENEM" 
          descricao="Atuei como monitor no ENEM de 2019." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
