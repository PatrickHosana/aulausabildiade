import React from "react";
import Principal from "./components/Principal";
import Logo from "./components/Logo";
import Navegacao from "./components/Navegacao";
import './App.css'; // Importando o arquivo de estilos
import styles from './App.module.css'; // Corrigindo para .module.css

function App() {
  const containerStyle: React.CSSProperties= {
    backgroundColor: 'lightcoral',
    textAlign: 'center',
    padding: '20px',
  };
  const titleStyle: React.CSSProperties = {
  fontSize: '2em',
  color: 'darkred',
  };
  return (
    <div style={containerStyle}>
  <h1 style={titleStyle}>Hello, World!</h1>
  </div>
  );
  }
  export default App;