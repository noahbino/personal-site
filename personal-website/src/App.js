import React, { useEffect } from 'react';  // Import React here
import './App.css';
import { LinkedInLink, GitHubLink, AppStore, LinkButton } from "./Components/Links";
import { analytics } from "./firebaseConfig"
import { logEvent } from "firebase/analytics"
import { LinkType } from './Components/Links.js';

function App() {
useEffect(() => {
  logEvent(analytics, "page_view", { page: "home"})
}, [])

  return (
    <div className="App">
      <header className="App-header">
        <div className="link-container">
        <LinkButton linkType={ LinkType.linkedin } />
        <LinkButton linkType={ LinkType.github } />
        <LinkButton linkType={ LinkType.appStore } /> 
        </div>
      </header>
    </div>
  );
}

export default App;
