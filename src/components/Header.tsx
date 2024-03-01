import styles from "./Header.module.css";

import instaLogo from "../assets/logo.svg";

export function Header() {
  return (
    <div>
      <header className={styles.header}>
        <img src={instaLogo} alt="Logotipo insta" />
      </header>
    </div>
  );
}
