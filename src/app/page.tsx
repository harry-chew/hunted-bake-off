import Navbar from "./components/navbar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar></Navbar>
      <h1>Bake Off</h1>
    </main>
  );
}
