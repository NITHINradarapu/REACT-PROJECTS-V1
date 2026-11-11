import styles from "./Button.module.css";

const Button = ({ isOutline, icon, text, children, className = "", ...rest }) => {
  const buttonClass = isOutline ? styles.outline_btn : styles.primary_btn;

  return (
    <button
      {...rest}
      className={`${buttonClass} ${className}`}
    >
      {icon && <span className={styles.icon_wrapper}>{icon}</span>}
      <span>{text || children}</span>
    </button>
  );
};

export default Button;
