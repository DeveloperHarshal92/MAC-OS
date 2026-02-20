import React from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

const baseCommands = {
  echo: {
    description: "Echo a passed string.",
    usage: "echo <string>",
    fn: (...args) => args.join(" "),
  },
};

const portfolioCommands = {
  about: {
    description: "About me",
    fn: () =>
      "Final year Electronics & Telecommunication student. Frontend and full-stack developer.",
  },

  whoami: {
    description: "Who am I",
    fn: () => "harshalvarade",
  },

  skills: {
    description: "My skills",
    fn: () => `
        JavaScript, React, SCSS
        Node.js, Express, MongoDB
        Git, GitHub, Postman
    `,
  },

  projects: {
    description: "List projects",
    fn: () => `
    - Notes App
    - Portfolio Website
    - Auth System
    - Art Gallery
   `,
  },

  project: {
    description: "Project details",
    usage: "project <name>",
    fn: (name) => {
      if (!name) return "Usage: project <name>";

      const map = {
        notes: "Notes App → Markdown-based React app.",
        portfolio: "Portfolio → macOS-inspired UI.",
        auth: "Auth App → JWT authentication system.",
        gallery: "Art Gallery → Image-focused frontend.",
      };

      return map[name.toLowerCase()] || "Project not found.";
    },
  },

  contact: {
    description: "Contact info",
    fn: () => `
GitHub: https://github.com/DeveloperHarshal92
LinkedIn: https://linkedin.com/in/harshal-varade
`,
  },

  //   clear: {
  //     description: "Clear terminal",
  //     fn: function () {
  //       this.clearTerminal();
  //       return "";
  //     },
  //   },
};

const Cli = ({ windowName, setWindowState }) => {
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
      <div className="cli-window">
        <Terminal
          commands={{
            ...baseCommands,
            ...portfolioCommands,
          }}
          welcomeMessage={`Welcome to Harshal's Portfolio Terminal
Type 'help' to see available commands.`}
          promptLabel={"harshalvarade:~$"}
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
