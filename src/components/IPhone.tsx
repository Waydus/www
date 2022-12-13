import iphone from "../assets/iphone.jpg";
import iphone2 from "../assets/iphone2.jpg";
import styles from "./IPhone.module.css";

export function IPhone() {
  return (
    <div className={styles.container}>
      <img
        style={{
          width: "inherit",
          height: "inherit",
        }}
        src={iphone}
        alt="iphone"
      />
    </div>
  );
}

export function IPhone2() {
  return (
    <div className={styles.container}>
      <img
        style={{
          width: "inherit",
          height: "inherit",
        }}
        src={iphone2}
        alt="iphone"
      />
    </div>
  );
}
