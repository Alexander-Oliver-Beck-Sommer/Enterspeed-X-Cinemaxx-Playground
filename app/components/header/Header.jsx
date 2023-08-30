"use client";
import React, { useState } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import Cinemaxx from "@/public/images/logo/cinemaxx-logo.png";
import CinemaxxShort from "@/public/images/logo/cinemaxx-logo-short.png";
import Hamburger from "hamburger-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);  // state to track if the menu is open

  return (
    <>
      <header className={styles.header}>
        <section className={styles.header__container}>
          <Link
            href="/"
            aria-label="Go back home"
            className={styles.header__container__logo}
          >
            <Image priority src={Cinemaxx} alt="Cinemaxx" />
          </Link>
          <nav className={styles.header__container__nav}></nav>
          <div className={styles.header__container__hamburger}>
            <Hamburger
              onToggle={(toggled) => {
                setIsOpen(toggled);  // update the state based on the menu toggle status
                if (toggled) {
                  console.log("Menu open!");
                } else {
                  console.log("Menu closed!");
                }
              }}
              direction="left"
              label="Open and close menu"
            />
          </div>
        </section>
      </header>
      {isOpen && (  // conditionally render the nav based on the isOpen state
        <nav className={styles.hamburger_menu}>
          <ul className={styles.hamburger_menu__container}>
            <li>
              <Link href="/" aria-label="Go to Home">
                <h3>Home</h3>
              </Link>
            </li>
            <li>
              <Link href="/movies" aria-label="Go to Movies">
                <h3>Movies</h3>
              </Link>
            </li>
            <li>
              <Link href="/testing-playground" aria-label="Go to Testing Playground">
                <h3>Testing Playground</h3>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Header;
