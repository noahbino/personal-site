import React from 'react';  // Import React here
import './App.css';
import { LinkedInLink, GitHubLink } from "./Components/Links";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="link-container">
          <LinkedInLink />
          <GitHubLink />
        </div>
      </header>
    </div>
  );
}

export default App;
