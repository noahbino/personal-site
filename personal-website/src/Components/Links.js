import React from "react";
import { analytics } from "../firebaseConfig";
import { logEvent } from "firebase/analytics";

export const LINKEDIN_URL = "https://www.linkedin.com/in/noahiarrobino/"
export const GITHUB_URL = "https://github.com/noahbino"
export const APPSTORE_URL = "https://apps.apple.com/vn/developer/noah-iarrobino/id1262164232"

export const LINKEDIN_IMG = "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
export const GITHUB_IMG = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/640px-Octicons-mark-github.svg.png"
export const APPSTORE_IMG = "https://static-00.iconduck.com/assets.00/apple-app-store-icon-2048x1893-tpno4vrd.png"

export const homeLinkClick = "Home | Link Click"

// LinkedIn Link Component
export const LinkedInLink = () => {
  const handleClick = () => {
    logEvent(analytics, homeLinkClick, {
      link_name: "LinkedIn",
      link_url: LINKEDIN_URL
    });
  };

  return (
  <a
    className="link"
    href={LINKEDIN_URL}
    target="_blank"
    rel="noopener noreferrer"
    onClick={handleClick}
    style={{ display: "flex", alignItems: "center", gap: "8px" }}
  >
    LinkedIn
    <img
      src={LINKEDIN_IMG}
      alt="LinkedIn Logo"
      style={{ width: "60px", height: "60px" }}
    />
  </a>
)}

// Github component
export const GitHubLink = () => {
  const handleClick = () => {
    logEvent(analytics, homeLinkClick, {
      link_name: "GitHub",
      link_url: GITHUB_URL
    })
  }

  return (
    <a
      className="link"
      href={GITHUB_URL} 
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      style={{ display: "flex", alignItems: "center", gap: "8px" }}
    >
      GitHub
      <img
        src={GITHUB_IMG}
        alt="GitHub Logo"
        style={{ width: "60px", height: "60px" }}
      />
    </a>
  )
}

export const AppStore = () => {
  const handleClick = () => {
    logEvent(analytics, homeLinkClick, {
      link_name: "GitHub",
      link_url: APPSTORE_URL
    })
  }

  return (
    <a
      className="link"
      href={APPSTORE_URL} 
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      style={{ display: "flex", alignItems: "center", gap: "8px" }}
    >
      App Store
      <img
        src={APPSTORE_IMG}
        alt="GitHub Logo"
        style={{ width: "60px", height: "60px" }}
      />
    </a>
  )
}
