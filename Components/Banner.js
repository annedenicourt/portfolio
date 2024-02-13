import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { PiHouseSimpleLight } from "react-icons/pi";

export default function Banner() {
  const router = useRouter();
  const [showMobileMenu, setShowMobileMenu] = useState();

  const navBar = () => {
    return (
      <ul className="p-4 md:p-0 mt-4 md:mt-0 flex flex-col md:flex-row items-center md:bg-white text-base md:text-lg lg:text-xl font-medium border md:border-0 border-gray-100 bg-gray-50 rounded-lg md:space-x-8">
        <li className="mb-1">
          <Link href="/">
            <PiHouseSimpleLight size={25} className="cursor-pointer" />
          </Link>
        </li>
        <li className="mb-1">
          <Link href="/prestations">
            <a
              className={`py-2 px-3 text-gray-900 rounded md:bg-transparent md:p-0 ${
                router.asPath == "/prestations" &&
                "underline underline-offset-4 md:underline-offset-8"
              }`}
            >
              Prestations-Tarifs
            </a>
          </Link>
        </li>
        <li className="mb-1">
          <Link href="/#steps">
            <a
              className={`py-2 px-3 text-gray-900 rounded md:bg-transparent md:p-0 ${
                router.asPath == "/#steps" &&
                "underline underline-offset-4 md:underline-offset-8"
              }`}
            >
              Étapes
            </a>
          </Link>
        </li>

        <li className="mb-1">
          <Link href="/#projets">
            <a
              className={`py-2 px-3 text-gray-900 rounded md:bg-transparent md:p-0 ${
                router.asPath == "/#projets" &&
                "underline underline-offset-4 md:underline-offset-8"
              }`}
            >
              Réalisations
            </a>
          </Link>
        </li>
        <li className="mb-1">
          <Link href="/mon-cv">
            <a
              className={`py-2 px-3 text-gray-900 rounded md:bg-transparent md:p-0 ${
                router.asPath == "/mon-cv" &&
                "underline underline-offset-4 md:underline-offset-8"
              }`}
            >
              Qui suis-je ?
            </a>
          </Link>
        </li>
        <li className="mb-1">
          <Link href="/#contact">
            <a
              className={`py-2 px-3 text-gray-900 rounded md:bg-transparent md:p-0 ${
                router.asPath == "/#contact" &&
                "underline underline-offset-4 md:underline-offset-8"
              }`}
            >
              Contact
            </a>
          </Link>
        </li>
      </ul>
    );
  };

  return (
    <div className="w-full bg-white">
      <nav className="">
        <div className="w-full mx-auto p-4">
          <div
            className="hidden w-full md:flex justify-center md:w-auto"
            id="navbar-default"
          >
            {navBar()}
          </div>
          <div className="relative w-full flex flex-col items-center justify-center md:hidden">
            <button
              data-collapse-toggle="navbar-default-mobile"
              type="button"
              className="w-10 h-10 p-2 flex items-center justify-center md:hidden hover:bg-gray-100 text-sm text-gray-500 rounded-lg "
              aria-controls="navbar-default-mobile"
              aria-expanded="false"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            {showMobileMenu && (
              <div className="absolute top-10 w-52" id="navbar-default-mobile">
                {navBar()}
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
