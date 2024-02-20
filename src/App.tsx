import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [isAppInstalled, setIsAppInstalled] = useState(false);

  function disableInAppInstallPrompt() {
    setInstallPrompt(null);
    setIsAppInstalled(true);
  }

  async function onInstall() {
    if (!installPrompt) {
      return;
    }
    const result = await installPrompt.prompt();
    console.log(`Install prompt was: ${result.outcome}`);
    disableInAppInstallPrompt();
  }

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      setInstallPrompt(event);
    });

    window.addEventListener("appinstalled", () => {
      disableInAppInstallPrompt();
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {isAppInstalled && (
          <button
            onClick={onInstall}
            id="#install"
            style={{
              background: "white",
              color: "#252525",
              fontWeight: 500,
              fontSize: "1.25rem",
              padding: "1rem",
              borderRadius: ".25rem",
            }}
          >
            Instale no seu celular
          </button>
        )}
      </header>
    </div>
  );
}

export default App;
