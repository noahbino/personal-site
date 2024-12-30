import React, { useEffect } from 'react';  // Import React here
import './App.css';
import { LinkedInLink, GitHubLink, AppStore } from "./Components/Links";
import { analytics } from "./firebaseConfig"
import { logEvent } from "firebase/analytics"

function App() {
useEffect(() => {
  logEvent(analytics, "page_view", { page: "home"})
}, [])

  return (
    <div className="App">
      <header className="App-header">
        <div className="link-container">
          <LinkedInLink />
          <GitHubLink />
          <AppStore />
        </div>
      </header>
    </div>
  );
}

export default App;
