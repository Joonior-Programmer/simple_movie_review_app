import styles from "./Footer.module.css";

function Header() {
  return (
    <div className={styles.footer}>
      <hr />
      <footer>
        <span>@copyright - Joonior Programmer, 2022</span>
      </footer>
    </div>
  );
}

export default Header;
