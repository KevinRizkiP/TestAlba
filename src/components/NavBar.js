import React from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const stickyNav = "w-full bg-white sticky top-0 z-20 filter drop-shadow-xl";
const twNav =
  "hidden lg:flex lg:flex-row lg:max-w-7xl mx-auto items-center font-bold text-lg justify-between py-4";
const ulTwNav = "lg:w-full flex justify-between ml-20 items-center";
const twMobileNav = "flex mx-auto justify-between px-4 py-2";
const twUlNavMobile = "flex flex-col w-full";
const twLiNavMobile =
  "flex flex-col w-full mx-auto font-bold text-black text-2xl pt-6";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [effect, setEffect] = useState(false);
  return (
    <>
      <div className={stickyNav}>
        <div className={twNav}>
          <RouterLink to="/">
            <img src="/IMG/logo.png" alt="Logo" />
          </RouterLink>

          <ul className={ulTwNav}>
            <li className="cursor-pointer">
              <Link
                to=""
                className="active hover:border-b-2 hover:border-black"
              >
                About
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to=""
                className="active hover:border-b-2 hover:border-black"
              >
                Service
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to=""
                className="active hover:border-b-2 hover:border-black"
              >
                Portofolio
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to=""
                className="active hover:border-b-2 hover:border-black"
              >
                Blog
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to=""
                className="active hover:border-b-2 hover:border-black"
              >
                Career
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to=""
                className="active bg-yellow-300 px-12 py-5 rounded-full hover:shadow-md hover:shadow-yellow-300"
              >
                Contact Us
              </Link>
            </li>
            {localStorage.getItem("token") ? (
              <>
                <RouterLink
                  to="/profile"
                  className="w-10 h-10 bg-gray-300 rounded-full"
                ></RouterLink>
              </>
            ) : (
              <>
                <RouterLink
                  to="/logins"
                  className="bg-transparent border border-black px-12 py-4 rounded-full font-bold hover:bg-yellow-300 hover:border-yellow-300"
                >
                  Login
                </RouterLink>
              </>
            )}
          </ul>
        </div>
        <div className="lg:hidden">
          <div className={twMobileNav}>
            <RouterLink to="/">
              <img src="/IMG/logo.png" alt="Logo" />
            </RouterLink>

            {isOpen ? (
              <button
                onClick={() => {
                  setIsOpen(false);
                  setEffect(true);
                }}
                className={`${
                  effect &&
                  "rounded-full text-black bg-white transition-opacity ease-in-out duration-300"
                } rounded-full text-black bg-white`}
                onAnimationEnd={() => setEffect(false)}
              >
                <GrClose className="h-7 w-7 " aria-hidden="true"></GrClose>
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsOpen(true);
                  setEffect(true);
                }}
                className={`${
                  effect &&
                  "rounded-full text-black bg-white transition-opacity ease-in-out duration-300"
                } rounded-full text-black bg-white`}
                onAnimationEnd={() => setEffect(false)}
              >
                <GiHamburgerMenu
                  className="h-7 w-7 "
                  aria-hidden="true"
                ></GiHamburgerMenu>
              </button>
            )}
          </div>
        </div>
      </div>
      <div
        className={
          " fixed overflow-hidden z-30 inset-0 transform ease-in-out " +
          (isOpen
            ? " transition-opacity opacity-100 duration-500 translate-y-0  "
            : " transition-all delay-500 opacity-0 -translate-y-full  ")
        }
      >
        <section
          style={{ background: "#FFFFFF" }}
          className={
            " w-screen bottom-0 absolute h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
            (isOpen ? " opacity-100" : " opacity-0 ")
          }
        >
          <div className="flex mx-auto justify-between px-4 py-2">
            <RouterLink to="/">
              <img src="/IMG/logo.png" alt="Logo" />
            </RouterLink>

            {isOpen ? (
              <button
                onClick={() => {
                  setIsOpen(false);
                  setEffect(true);
                }}
                className={`${
                  effect &&
                  "rounded-full text-black bg-white transition-opacity ease-in-out duration-300"
                } rounded-full text-black bg-white`}
                onAnimationEnd={() => setEffect(false)}
              >
                <GrClose className="h-7 w-7 " aria-hidden="true"></GrClose>
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsOpen(true);
                  setEffect(true);
                }}
                className={`${
                  effect &&
                  "rounded-full text-black bg-white transition-opacity ease-in-out duration-300"
                } rounded-full text-black bg-white`}
                onAnimationEnd={() => setEffect(false)}
              >
                <GiHamburgerMenu
                  className="h-7 w-7 "
                  aria-hidden="true"
                ></GiHamburgerMenu>
              </button>
            )}
          </div>
          <article className="relative w-screen flex flex-col space-y-6 overflow-y-scroll h-full">
            <div className="px-4 w-full">
              <ul className={twUlNavMobile}>
                <li className={twLiNavMobile}>
                  <Link
                    className="active"
                    to="About"
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    About
                  </Link>
                  <hr
                    className="mt-2 w-full"
                    style={{
                      color: "#000000",
                      backgroundColor: "#000000",
                      borderColor: "#000000",
                    }}
                  />
                </li>
                <li className={twLiNavMobile}>
                  <Link
                    className="active"
                    to="Service"
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    Service
                  </Link>
                  <hr
                    className="mt-2"
                    width="100%"
                    style={{
                      color: "#000000",
                      backgroundColor: "#000000",
                      borderColor: "#000000",
                    }}
                  />
                </li>
                <li className={twLiNavMobile}>
                  <Link
                    className="active"
                    to="Portofolio"
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    Portofolio
                  </Link>
                  <hr
                    className="mt-2"
                    width="100%"
                    style={{
                      color: "#000000",
                      backgroundColor: "#000000",
                      borderColor: "#000000",
                    }}
                  />
                </li>
                <li className={twLiNavMobile}>
                  <Link
                    className="active"
                    to="Blog"
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    Blog
                  </Link>
                  <hr
                    className="mt-2"
                    width="100%"
                    style={{
                      color: "#000000",
                      backgroundColor: "#000000",
                      borderColor: "#000000",
                    }}
                  />
                </li>
                <li className={twLiNavMobile}>
                  <Link
                    className="active"
                    to="Career"
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    Career
                  </Link>
                  <hr
                    className="mt-2"
                    width="100%"
                    style={{
                      color: "#000000",
                      backgroundColor: "#000000",
                      borderColor: "#000000",
                    }}
                  />
                </li>
                <li className={twLiNavMobile}>
                  <Link
                    className="active bg-yellow-300 px-12 py-5 rounded-full"
                    to="inquiry"
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default NavBar;
