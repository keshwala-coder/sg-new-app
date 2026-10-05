import Link from "next/link";
import styles from "./styles.module.css";

export default function LeftLogin() {
    return(
        <div
        id="innerContainer_LoggedInDiv2"
        className={`${styles.login} ${styles.firstLogin}`}
      >
        <div>
          <span className={styles.fauxLabel}>Acting for:</span>
          <span
            id="innerContainer_CurrentEmployer"
            className={styles.firstLoginFont}
          >
            Visa Verification Service
          </span>
        </div>
      </div>
    )
}