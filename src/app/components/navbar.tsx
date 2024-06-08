import styles from "../page.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <a href="/">Home</a>
        <a href="/cake">Add Cake</a>
    </nav>
  );
}
