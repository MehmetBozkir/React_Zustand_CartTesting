import React from "react";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { FaMedium } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer footer-center p-10 text-base-content rounded bg-opacity-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.linkedin.com/in/mehmet-salih-bozk%C4%B1r/"
            target="blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              className="fill-current "
            >
              <CiLinkedin />
            </svg>
          </a>
          <a href="https://medium.com/@mehmetsalihbozkir" target="blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <FaMedium />
            </svg>
          </a>
          <a href="https://github.com/MehmetBozkir" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <FiGithub />
            </svg>
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2024 - All right reserved by Mehmet Salih Bozkir</p>
      </aside>
    </footer>
  );
}

export default Footer;
