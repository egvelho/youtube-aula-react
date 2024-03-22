import styles from "./IconButton.module.css";

export function IconButton({ children, onClick, bgColor }) {
  return (
    <button
      style={{
        "--bg-color": bgColor,
      }}
      className={styles["icon-button"]}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
