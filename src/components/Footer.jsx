import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>
        Nicolas Bugdaci -{" "}
        <a href={"https://github.com/NicolasBugdaci"} target="_blank">
          GitHub
        </a>{" "}
        /{" "}
        <a
          href={"https://www.linkedin.com/in/nicolas-b-b4586416b/"}
          target="_blank"
        >
          LinkedIn
        </a>{" "}
        - {year}
      </p>
    </footer>
  );
}

export default Footer;
