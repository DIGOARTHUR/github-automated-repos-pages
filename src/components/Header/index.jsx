import { useState } from "react";
import logoLib from "../../assets/imgs/logoLib.svg";
import { IoLogoGithub } from "react-icons/io5";
import { FaNpm } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Sidebar";


export default function Header() {
  const viewportWidth = window.innerWidth;
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  function _handleNavbar() {
    setIsOpenNavbar(!isOpenNavbar);
  }

  return (
    <nav className=" flex w-full  h-16 fixed top-0 left-0 bg-[#3d3d4dab] z-40 justify-center">
      <div className="flex  w-full max-w-[1200px]  items-center justify-between m-6">
        <div className=" flex items-center gap-2">
          <a href="/">
            <img className="h-14 w-14 " src={logoLib} alt="logoLib" />
          </a>
        </div>

        <div className="flex gap-3">
          <a className="max-sm:hidden" href="https://www.npmjs.com/package/github-automated-repos">
            <FaNpm size={40} className="hover:fill-[#cc3c34]" />
          </a>
          <a className="max-sm:hidden" href="https://github.com/DIGOARTHUR/github-automated-repos/">
            <IoLogoGithub size={35} className="hover:fill-[#000000] " />
          </a>
          <a className="md:hidden " onClick={_handleNavbar}>
            {isOpenNavbar ? "" : <FaBars size={45} />}
          </a>
        </div>
      </div>

      {viewportWidth < 1024 ? (
        <Sidebar isOpen={isOpenNavbar} setIsOpen={_handleNavbar} />
      ) : (
        ""
      )}
    </nav>
  );
}
