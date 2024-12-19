import React from "react";

// LinkedIn Link Component
export const LinkedInLink = () => (
  <a
    className="link"
    href="https://www.linkedin.com/in/noahiarrobino/"
    target="_blank"
    rel="noopener noreferrer"
    style={{ display: "flex", alignItems: "center", gap: "8px" }}
  >
    LinkedIn
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
      alt="LinkedIn Logo"
      style={{ width: "60px", height: "60px" }}
    />
  </a>
);

// GitHub Link Component
export const GitHubLink = () => (
  <a
    className="link"
    href="https://github.com/noahbino"
    target="_blank"
    rel="noopener noreferrer"
    style={{ display: "flex", alignItems: "center", gap: "8px" }}
  >
    GitHub
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/640px-Octicons-mark-github.svg.png"
      alt="GitHub Logo"
      style={{ width: "60px", height: "60px" }}
    />
  </a>
);