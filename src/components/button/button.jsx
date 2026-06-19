import styles from "./Button.module.css";

export default function Button({children, onClick, variant = "primary", type = "button"}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles[variant]}`}
    >
      {children}
    </button>
  );
}