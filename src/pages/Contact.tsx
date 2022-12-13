import { BackHome } from "../components/BackHome";
import { CookieNotice } from "../components/CookieNotice";
import { Footer } from "../components/Footer";

import styles from "./Contact.module.css";

export default function TermsAndConditions() {
  return (
    <div>
      <BackHome />
      <div className={styles.container}>
        <div className={styles.content}>
          <h3>Contact Waydus</h3>
          <p>
            Have any app-related issues, or perhaps just a general enquiry?
            Please get in touch!
          </p>
          <br />

          <h4>Mobile App Support</h4>
          <p>{`Contact us from your phone by opening Waydus > Journal > Settings > Contact Us.`}</p>

          <br />
          <h4>General Enquiry Via Email</h4>
          <p>{`You can email us directly at support@waydus.com.`}</p>
        </div>
      </div>
      <CookieNotice />
      <Footer />
    </div>
  );
}
