import { useState } from "react";

import { Link } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io5";
import { FaNpm } from "react-icons/fa";

import dataVersion from '../../../package.json'

export default function Sidebar({ isOpen, setIsOpen }) {
  let url = window.location.pathname;
  let parts = url.split("/");
  let lastPartUrl = parts.pop() || parts.pop();

  const [scroll, setScroll] = useState(0);
  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setScroll(ScrollPercent);
    console.log(ScrollPercent);
  };

  window.addEventListener("scroll", onScroll);

  return (
    <aside
      className={`fixed min-w-[340px] h-full  ${
        isOpen ? " max-lg:absolute w-screen  " : " max-lg:static max-lg:hidden"
      }`}
    >
      <nav className="pt-4 pr-5 p-10 h-full max-lg:hidden">
        <ul>
          <h3 className="mb-3">github-automated-repos@{dataVersion.dependencies["github-automated-repos"]}</h3>
          <li>
            <Link
              to="/gettingstart"
              style={
                scroll < 8 &&
                lastPartUrl != "stackicons" &&
                lastPartUrl != "projecticons"
                  ? { color: "#149ECA", backgroundColor: "#00979c1a" }
                  : {}
              }
              className="flex justify-between py-2 pr-2 pl-5 rounded-l-2xl items-center   h-[46px]"
            >
              Getting Start
              <MdOutlineNavigateNext className="h-5 w-5" />
            </Link>
            <ul
              className={` ${
                lastPartUrl == "gettingstart" ? "visible" : "hidden"
              } transition-transform ease-in delay-300 duration-300`}
            >
              <li>
                <a
                  href="#installPackage"
                  style={
                    scroll >= 8 &&
                    scroll < 13 &&
                    lastPartUrl != "iconstack" &&
                    lastPartUrl != "iconsproject"
                      ? { color: "#149ECA", backgroundColor: "#00979c1a" }
                      : {}
                  }
                  className=" flex text-xs justify-between py-2 pr-2 pl-8 rounded-l-2xl items-center   h-[46px] hover:bg-[#00979c1a]"
                >
                  Install Package
                </a>
              </li>
              <li>
                <a
                  href="#importPackage"
                  style={
                    scroll >= 13 &&
                    scroll < 25 &&
                    lastPartUrl != "iconstack" &&
                    lastPartUrl != "iconsproject"
                      ? { color: "#149ECA", backgroundColor: "#00979c1a" }
                      : {}
                  }
                  className="flex text-xs justify-between py-2 pr-2 pl-8 rounded-l-2xl items-center   h-[46px] hover:bg-[#00979c1a]"
                >
                  Import package
                </a>
              </li>

              <li>
                <a
                  href="#fillInTheFields"
                  style={
                    scroll >= 25 &&
                    scroll < 77 &&
                    lastPartUrl != "iconstack" &&
                    lastPartUrl != "iconsproject"
                      ? { color: "#149ECA", backgroundColor: "#00979c1a" }
                      : {}
                  }
                  className="flex text-xs justify-between py-2 pr-2 pl-8 rounded-l-2xl items-center   h-[46px] hover:bg-[#00979c1a]"
                >
                  Fill in the fields
                </a>
              </li>
              <li>
                <a
                  href="#codeExample"
                  style={
                    scroll >= 77 &&
                    lastPartUrl != "iconstack" &&
                    lastPartUrl != "iconsproject"
                      ? { color: "#149ECA", backgroundColor: "#00979c1a" }
                      : {}
                  }
                  className="flex text-xs justify-between py-2 pr-2 pl-8 rounded-l-2xl items-center   h-[46px] hover:bg-[#00979c1a]"
                >
                  Code Example
                </a>
              </li>
            </ul>
          </li>
          <li className="mt-4 mb-2 ms-5 border-b border-border"></li>
          <li>
            <Link
              style={
                lastPartUrl == "stackicons"
                  ? { color: "#149ECA", backgroundColor: "#00979c1a" }
                  : {}
              }
              to="/stackicons"
              className="flex justify-between py-2 pr-2 pl-5 rounded-l-2xl items-center   h-[46px] hover:bg-[#00979c1a]"
            >
              Stack Icons
              <MdOutlineNavigateNext className="h-5 w-5" />
            </Link>
          </li>
          <li>
            <Link
              style={
                lastPartUrl == "projecticons"
                  ? { color: "#149ECA", backgroundColor: "#00979c1a" }
                  : {}
              }
              to="/projecticons"
              className="flex justify-between py-2 pr-2 pl-5 rounded-l-2xl items-center   h-[46px] hover:bg-[#00979c1a]"
            >
              Project Icons
              <MdOutlineNavigateNext className="h-5 w-5" />
            </Link>
          </li>
        </ul>
      </nav>

      <nav
        className={`absolute z-20 flex flex-col h-screen w-full bg-[#3D3D4D] gap-24 right-[-100%] transition-all ease-in-out delay-[1s] ${
          isOpen ? "right-[0]" : "lg:hidden"
        }`}
      >
        <div className=" flex  justify-end min-h-[96px] px-5 items-center ">
          <a onClick={setIsOpen}>
            <AiOutlineClose className={isOpen ? "" : ""} size={50} />
          </a>
        </div>
        <ul>
          <li>
            <Link
              to="/gettingstart"
              style={
                scroll < 8 &&
                lastPartUrl != "stackicons" &&
                lastPartUrl != "projecticons"
                  ? { color: "#149ECA", backgroundColor: "#00979c1a" }
                  : {}
              }
              className="flex justify-between py-2 pr-2 pl-5 rounded-l-2xl items-center   h-[46px] max-lg:text-2xl"
            >
              Getting Start
              <MdOutlineNavigateNext className="h-5 w-6 max-lg:h-10" />
            </Link>
          </li>
          <li className="mt-4 mb-2 ms-5 border-b border-border"></li>
          <li>
            <Link
              style={
                lastPartUrl == "stackicons"
                  ? { color: "#149ECA", backgroundColor: "#00979c1a" }
                  : {}
              }
              to="/stackicons"
              className="flex justify-between py-2 pr-2 pl-5 rounded-l-2xl items-center   h-[46px] max-lg:text-2xl"
            >
              Stack Icons
              <MdOutlineNavigateNext className="h-5 w-6 max-lg:h-10 " />
            </Link>
          </li>
          <li>
            <Link
              style={
                lastPartUrl == "projecticons"
                  ? { color: "#149ECA", backgroundColor: "#00979c1a" }
                  : {}
              }
              to="/projecticons"
              className="flex justify-between py-2 pr-2 pl-5 rounded-l-2xl items-center   h-[46px] max-lg:text-2xl"
            >
              Project Icons
              <MdOutlineNavigateNext className="h-5 w-6 max-lg:h-10 " />
            </Link>
          </li>
        </ul>
        <div className="flex gap-8 justify-center">
          <a className="" href="https://www.npmjs.com/package/github-automated-repos">
            <FaNpm size={50} className="hover:fill-[#cc3c34]" />
          </a>
          <a href="https://github.com/DIGOARTHUR/github-automated-repos/">
            <IoLogoGithub size={45} className="hover:fill-[#000000] " />
          </a>
        </div>
      </nav>
    </aside>
  );
}
