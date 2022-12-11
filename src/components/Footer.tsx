import { useState } from "react";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.container}>
      <a href="/contact" className={styles.contactLink}>
        Contact
      </a>
      <a href="/tcs" className={styles.tcsLink}>
        Terms & Conditions
      </a>
      <a href="/privacy" className={styles.privacyLink}>
        Privacy Policy
      </a>
      <WaydusYear />
    </footer>
  );
}

function WaydusYear() {
  const [year] = useState(new Date().getFullYear());
  return <p className={styles.company}>Waydus Ltd @ {year}</p>;
}
