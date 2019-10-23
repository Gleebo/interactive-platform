import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="row text-center">
        <div className="col-md-4">
          <h2>Contact</h2>
          <hr className="my-4"></hr>
          <p>Email: KisIslands@gmail.com</p>
          <p>Phone: 0404123321</p>
          <a
            className={
              sessionStorage.getItem("loginEmail") ||
                sessionStorage.getItem("adminLogin")
                ? "visible"
                : "invisible"
            }
            href="/askQuestion"
          >
            Ask Questions
          </a>
        </div>
        <div className="col-md-4">
          <h2>Social Media</h2>
          <hr className="my-4"></hr>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>Facebook</p>
        </div>
        <div className="col-md-4">
          <h3>KidIslands</h3>
        </div>
      </div>
      <hr className="my-3"></hr>
      <div className="container-fluid footer">
        <a
          href="/adminLogIn"
          className={
            sessionStorage.getItem("loginEmail") ||
              sessionStorage.getItem("adminLogin")
              ? "invisible"
              : "visible"
          }
        >
          <p>Admin Access</p>
        </a>
        <p>2019 KidIslands Limited. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
