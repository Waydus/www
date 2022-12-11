import { useEffect, useState } from "react";
// import { setCookie, getCookie } from "cookies-next";
import styles from "./CookieNotice.module.css";

export function CookieNotice() {
  const [show, onShow] = useState(false);

  useEffect(() => {
    // const missing = getCookie("test") == null;
    // onShow(missing);
  }, []);

  const onAcceptCookie = () => {
    onShow(false);
    // setCookie("test", true);
  };

  if (!show) return null;
  return (
    <div className={styles.container}>
      <div className={styles.exitContainer}>
        <button className={styles.exit} onClick={() => onShow(false)}>
          <ExitIcon size={18} color={"var(--color-white)"} />
        </button>
      </div>
      <p
        className={styles.text}
      >{`We won't track your information when you visit our site. But in order to
      comply with your preferences, we'll have to use just one tiny cookie so
      that you're not asked to make this choice again.`}</p>

      <div className={styles.actionContainer}>
        <button className={styles.button} onClick={() => onAcceptCookie()}>
          Accept
        </button>
        <button className={styles.button} onClick={() => onShow(false)}>
          Decline
        </button>
      </div>
    </div>
  );
}

interface Props {
  color: string;
  size: number;
}

function ExitIcon({ size, color }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
