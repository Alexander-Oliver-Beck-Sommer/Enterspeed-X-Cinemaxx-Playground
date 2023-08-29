import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import CinemaxxMonochrome from "@/public/images/logo/cinemaxx-logo-black-and-white.png";
import Cinemaxx from "@/public/images/logo/cinemaxx-logo.png";

const Header = () => {
  return (
    <header className={styles.header_container}>
      <section className={styles.header_container__positioner}>
        <Link
          href="/"
          aria-label="Navigate to frontpage"
          className={styles.header_container__positioner__logo}
        >
          <Image src={CinemaxxMonochrome} alt="Cinemaxx" />
        </Link>

        <nav className={styles.header_container__positioner__nav}>
          <ul>
            <li>
              <Link href="/" aria-label="Navigate to frontpage">
                <h4>Home</h4>
              </Link>
            </li>
            <li>
              <Link href="/movies" aria-label="Navigate to movies">
                <h4>Movies</h4>
              </Link>
            </li>
            <li>
              <Link href="/testing-playground" aria-label="Navigate to Testing Playground">
                <h4>Testing Playground</h4>
              </Link>
            </li>
          </ul>
        </nav>
        <button className={styles.header_container__positioner__hamburger}>
          Hamburger
        </button>
      </section>
    </header>
  );
};

export default Header;
