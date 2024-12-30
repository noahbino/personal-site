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

export const LinkType = {
  linkedin: {
    image: LINKEDIN_IMG,
    link: LINKEDIN_URL,
    name: "LinkedIn"
  },
  github: {
    image: GITHUB_IMG,
    link: GITHUB_URL,
    name: "GitHub"
  },
  appStore: {
    image: APPSTORE_IMG,
    link: APPSTORE_URL,
    name: "AppStore"
  }
}

export const LinkButton = ({ linkType }) => {
  const handleClick = () => {
    logEvent(analytics, "home_link_click", {
      link_name: linkType.name,
      link_url: linkType.link
    });
  };

  return (
    <a
      className="link"
      href={linkType.link} 
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick} 
      style={{ display: "flex", alignItems: "center", gap: "8px" }}
    >
      {linkType.name} {}
      <img
        src={linkType.image} 
        alt={linkType.name + " Logo"} 
        style={{ width: "60px", height: "60px" }}
      />
    </a>
  )
}
