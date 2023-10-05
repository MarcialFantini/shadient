import Image from "next/image";
import React from "react";
import srcIconNav from "../../../public/navbar/Frame.svg";

import style from "./style.module.css";

function Navbar() {
  return (
    <nav className={style.containerNav}>
      <div className={style.containerAll}>
        <div className={style.containerIconTitle}>
          <picture className={style.picture}>
            <Image
              className={style.img}
              src={srcIconNav}
              alt="icon nav"
            ></Image>
          </picture>
          <h2 className={style.title}>Shadient.co</h2>
        </div>

        <ul className={style.list}>
          <li>Company</li>
          <li>Services</li>
          <li>Resources</li>
          <li>
            <button className={style.button}>Contact</button>
          </li>
        </ul>
        {/* <button>|||</button> */}
      </div>
    </nav>
  );
}

export default Navbar;
