import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./BackHome.module.css";

const SIZE = 32;

export function BackHome() {
  const [hover, setHover] = useState(false);

  return (
    <Link
      className={styles.container}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      to="/"
    >
      <ChevronLeft
        size={SIZE}
        color={hover ? "var(--color-blue)" : "var(--color-white)"}
      />
      <p>Home</p>
    </Link>
  );
}

interface Props {
  size: number;
  color: string;
}

function ChevronLeft({ size, color }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z"
        fill={color}
      />
    </svg>
  );
}
