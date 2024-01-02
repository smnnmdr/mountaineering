import React from "react";
import Link from "next/link";
import UserIcon from "../../public/UserIcon";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">کوهنوردان</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Camp & Hike</Link>
          </li>
          <li>
            <Link href="/">Climb</Link>
          </li>
          <li>
            <Link href="/">Cycle</Link>
          </li>
          <li>
            <Link href="/">Water</Link>
          </li>
          <li>
            <Link href="/">Run</Link>
          </li>
          <li>
            <Link href="/">Fitness</Link>
          </li>
          <li>
            <Link href="/">Snow</Link>
          </li>
          <li>
            <Link href="/">Travel</Link>
          </li>
          <li>
            <Link href="/">Men</Link>
          </li>
          <li>
            <Link href="/">Women</Link>
          </li>
          <li>
            <Link href="/">Kids</Link>
          </li>
          <li>
            <details>
              <summary>Parentddddsss</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn mr-4">
          Sign in
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 14 18"
          >
            <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
          </svg>
        </button>
        <button className="btn">
          Cart
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 21"
          >
            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
