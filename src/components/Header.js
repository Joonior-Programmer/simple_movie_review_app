import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <header>
        <h1>Jooni Movie</h1>
      </header>
      <hr />
    </div>
  );
}

export default Header;
