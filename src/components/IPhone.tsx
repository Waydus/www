import iphone from "../assets/iphone.jpg";
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
