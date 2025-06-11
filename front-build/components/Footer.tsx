import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row items-center justify-between gap-4 p-4 text-white z-10">
      <div className="basis-0 grow w-full flex lg:gap-5 items-center justify-evenly lg:justify-start">
        <img src="/images/insa-hdf.png" className="max-w-[50%] h-auto" alt="" />
        <img
          className="lg:hidden block max-w-[50%] h-auto"
          src="/images/uphf.png"
          alt=""
        />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-evenly gap-4 ">
        <a href="/conditions-utilisation" className="text-center">
          Conditions d'utilisation
        </a>
        <a href="/confidentialite" className="text-center">
          Politique de confidentialité
        </a>
      </div>
      <div className="flex flex-row items-center gap-12 basis-0 grow justify-end">
        <div className="flex flex-row items-center gap-3">
          <a
            href="https://discord.gg/rtYZMdJW7r"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/discord.ico" alt="" className="w-[40px]" />
          </a>
          <a href="mailto:contact@insash.org">
            <img src="/images/mail.ico" alt="" className="w-[40px]" />
          </a>
        </div>
        <img className="lg:block hidden" src="/images/uphf.png" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
