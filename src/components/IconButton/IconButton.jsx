import styles from "./IconButton.module.css";

export function IconButton({ children, onClick }) {
  return (
    <button className={styles["icon-button"]} onClick={onClick}>
      {children}
    </button>
  );
}
