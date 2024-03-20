import React from "react";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { FaMedium } from "react-icons/fa6";
import { useTranslations } from "next-intl";

function Footer() {
  const t = useTranslations("Index");
  return (
    <footer className="footer footer-center p-10 text-base-content rounded bg-opacity-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">{t("About")}</a>
        <a className="link link-hover">{t("Contact")}</a>
        <a className="link link-hover">{t("Jobs")}</a>
        <a className="link link-hover">{t("Press")}</a>
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
        <p>{t("Last")}</p>
      </aside>
    </footer>
  );
}

export default Footer;
