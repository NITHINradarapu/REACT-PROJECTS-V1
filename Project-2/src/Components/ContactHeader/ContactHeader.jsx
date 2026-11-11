import styles from "./ContactHeader.module.css";
import { HiLightningBolt, HiShieldCheck, HiSparkles } from "react-icons/hi";

const ContactHeader = () => {
  return (
    <header className={styles.contact_section}>
      <div className={styles.badge}>
        <HiSparkles className={styles.badge_icon} />
        <span>LET'S CONNECT</span>
      </div>

      <h1 className={styles.title}>
        We’re Here to Help, <span>Let’s Talk.</span>
      </h1>

      <p className={styles.description}>
        Whether you have a question about features, pricing, need a demo, or just
        want to say hello — our team is ready to answer all your questions.
        Reach out to us through the form below, by direct phone, or email.
      </p>

      <div className={styles.feature_pills}>
        <div className={styles.pill}>
          <HiLightningBolt className={styles.pill_icon} />
          <span>Average response time: &lt; 2 hrs</span>
        </div>
        <div className={styles.pill}>
          <HiShieldCheck className={styles.pill_icon} />
          <span>Dedicated support team</span>
        </div>
      </div>
    </header>
  );
};

export default ContactHeader;
