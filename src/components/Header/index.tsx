import { Logo } from "../Logo";
import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Logo />
        <nav>
          <a href="" className={styles.active}>
            Home
          </a>
          <a href="">Posts</a>
        </nav>
      </div>
      <SignInButton />
    </header>
  );
};
