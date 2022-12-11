import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.container}>
      <Link to="/contact" className={styles.contactLink}>
        Contact
      </Link>
      <Link to="/tcs" className={styles.tcsLink}>
        Terms & Conditions
      </Link>
      <Link to="/privacy" className={styles.privacyLink}>
        Privacy Policy
      </Link>
      <WaydusYear />
    </footer>
  );
}

function WaydusYear() {
  const [year] = useState(new Date().getFullYear());
  return <p className={styles.company}>Waydus Ltd @ {year}</p>;
}
