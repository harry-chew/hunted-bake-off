import Navbar from "../components/navbar";
import styles from "../page.module.css";

export default function Cake() {
  return (
    <main className={styles.main}>
      <Navbar></Navbar>
      <h1>Add Cake</h1>
      <form className={styles.form}action="/cake" method="POST">
        <input type="text" name="baker" placeholder="Baker"/>
        <input type="text" name="cake" placeholder="cake"/>
        <input type="submit" value="Add"/>
      </form>
    </main>
  );
}
