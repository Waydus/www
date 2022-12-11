import { CookieNotice } from "./components/CookieNotice";
import { Footer } from "./components/Footer";
import { IPhone } from "./components/IPhone";
import { Logo } from "./components/Logo";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.containerLeft}>
          <IPhone />
        </div>
        <div className={styles.containerRight}>
          <Logo />
          <h4 className={styles.subtitle}>Share your wandering moments</h4>
          <p>Currently in Closed Beta</p>
        </div>
      </div>

      <CookieNotice />
      <Footer />
    </div>
  );
}
