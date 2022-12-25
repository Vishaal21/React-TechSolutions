import React from "react";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>Vishal</h1>
        <p>@all right reserved</p>
      </div>

      <div>
        <h5>Follow Us</h5>
        <div>
          {/* <a href="mailto : singhvishal@gmail.com?subject= subject text" target={"blank"}>
            Email
          </a> */}
          <a href="https://www.linkedin.com/in/vishal-singh-3b05aa192/" target={"blank"}>
            LinkedIn
          </a>
          <a href="https://github.com/Vishaal21" target={"blank"}>
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
