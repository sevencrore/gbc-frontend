import React from "react";

function Footer() {
  return (
    <div className="nk-footer" style={{backgroundColor: "#0f6cbe",color: "#fff"}}>
      <div className="container-fluid">
        <div className="nk-footer-wrap d-flex justify-content-center">
          <div className="nk-footer-copyright">
            &copy; 2024 - All rights Reserved <span className="mx-1"></span> {" "}
            <a href="https://7crore.com/" target="_blank" rel="noreferrer" className="text-reset">
              7Crore Technologies
            </a>
          </div>
          <div className="nk-footer-links">
            {/* <Nav as="ul" className="nav-sm">
              <Nav.Item as="li">
                <Nav.Link href="#link">About</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="#link">Support</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="#link">Blog</Nav.Link>
              </Nav.Item>
            </Nav> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
