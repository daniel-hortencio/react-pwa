import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleInstallClick = () => {
    // Verificar se o navegador suporta a instalação de PWA
    if ("serviceWorker" in navigator && "InstallEvent" in window) {
      // Verificar se já não está instalado
      if (!window.matchMedia("(display-mode: standalone)").matches) {
        // Exibir a opção de instalar o PWA
        window.prompt(
          'Para instalar o aplicativo no seu celular, toque em "Adicionar à tela inicial".'
        );
      }
    } else {
      alert("Seu navegador não suporta a instalação de Progressive Web Apps.");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button
          style={{
            background: "white",
            color: "#252525",
            fontWeight: 500,
            fontSize: "1.25rem",
            padding: "1rem",
            borderRadius: ".5rem",
          }}
          onClick={handleInstallClick}
        >
          Instale no seu celular
        </button>
      </header>
    </div>
  );
}

export default App;
