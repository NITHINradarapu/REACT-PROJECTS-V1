import { useState, useRef } from "react";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage, MdOutlineChat } from "react-icons/md";
import { FaPhoneAlt, FaRegUser } from "react-icons/fa";
import {
  HiMail,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiCheckCircle,
} from "react-icons/hi";
import { IoSend } from "react-icons/io5";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    text: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [activeNotice, setActiveNotice] = useState(null);

  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSupportChat = () => {
    setActiveNotice({
      type: "chat",
      title: "Support Chat Online",
      message:
        "Our support team is online 24/7. Average wait time is currently under 1 minute.",
      actionText: "Start Live Chat",
      actionHref: "#live-chat",
    });
  };

  const handleCall = () => {
    setActiveNotice({
      type: "call",
      title: "Direct Support Hotline",
      message:
        "Toll-free hotline: +1 (800) 555-0199 (Mon - Fri: 9:00 AM - 6:00 PM EST).",
      actionText: "Call Now",
      actionHref: "tel:+18005550199",
    });
  };

  const handleEmailForm = () => {
    setActiveNotice(null);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      const firstInput = formRef.current.querySelector("input");
      if (firstInput) firstInput.focus();
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Simulate sending network request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        ...formData,
        submittedAt: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      });
      // Reset input fields
      setFormData({
        name: "",
        email: "",
        subject: "General Inquiry",
        text: "",
      });
    }, 600);
  };

  const handleReset = () => {
    setSubmittedData(null);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        {/* Quick action buttons */}
        <div className={styles.top_btn}>
          <Button
            type="button"
            onClick={handleSupportChat}
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="20px" />}
          />
          <Button
            type="button"
            onClick={handleCall}
            text="VIA CALL"
            icon={<FaPhoneAlt fontSize="18px" />}
          />
        </div>

        <Button
          type="button"
          onClick={handleEmailForm}
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="22px" />}
        />

        {/* Notice Banner for quick actions */}
        {activeNotice && (
          <div className={styles.notice_banner}>
            <div className={styles.notice_content}>
              <strong>{activeNotice.title}</strong>
              <p>{activeNotice.message}</p>
            </div>
            {activeNotice.actionHref && (
              <a
                href={activeNotice.actionHref}
                className={styles.notice_action}
                onClick={(e) => {
                  if (activeNotice.type === "chat") {
                    e.preventDefault();
                    alert("Connecting you to a live chat representative...");
                  }
                }}
              >
                {activeNotice.actionText}
              </a>
            )}
            <button
              className={styles.notice_close}
              onClick={() => setActiveNotice(null)}
              aria-label="Close notification"
            >
              &times;
            </button>
          </div>
        )}

        {/* Form or Submitted Confirmation Card */}
        {submittedData ? (
          <div className={styles.success_card}>
            <div className={styles.success_header}>
              <HiCheckCircle className={styles.success_icon} />
              <div>
                <h3>Thank You, {submittedData.name || "Friend"}!</h3>
                <p>
                  Your message has been sent successfully. We will get back to
                  you shortly.
                </p>
              </div>
            </div>

            <div className={styles.submitted_details}>
              <div className={styles.detail_row}>
                <span className={styles.detail_label}>Sender:</span>
                <span className={styles.detail_value}>{submittedData.name}</span>
              </div>
              <div className={styles.detail_row}>
                <span className={styles.detail_label}>Email:</span>
                <span className={styles.detail_value}>{submittedData.email}</span>
              </div>
              <div className={styles.detail_row}>
                <span className={styles.detail_label}>Subject:</span>
                <span className={styles.detail_value}>{submittedData.subject}</span>
              </div>
              <div className={styles.detail_row}>
                <span className={styles.detail_label}>Message:</span>
                <span className={styles.detail_message}>{submittedData.text}</span>
              </div>
              <div className={styles.detail_row}>
                <span className={styles.detail_label}>Time:</span>
                <span className={styles.detail_value}>{submittedData.submittedAt}</span>
              </div>
            </div>

            <Button
              type="button"
              isOutline={true}
              onClick={handleReset}
              text="Send Another Message"
            />
          </div>
        ) : (
          <form ref={formRef} onSubmit={onSubmit} className={styles.form}>
            <div className={styles.form_control}>
              <label htmlFor="name">
                <FaRegUser className={styles.field_icon} /> Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="e.g. Alex Johnson"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.form_control}>
              <label htmlFor="email">
                <HiOutlineMail className={styles.field_icon} /> Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="e.g. alex@company.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.form_control}>
              <label htmlFor="subject">
                <MdOutlineChat className={styles.field_icon} /> Topic
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={styles.select_input}
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Support & Troubleshooting">Support & Troubleshooting</option>
                <option value="Sales & Pricing">Sales & Pricing</option>
                <option value="Feedback & Suggestions">Feedback & Suggestions</option>
              </select>
            </div>

            <div className={styles.form_control}>
              <label htmlFor="text">Message</label>
              <textarea
                id="text"
                name="text"
                rows="6"
                placeholder="How can we help you today? Write your message here..."
                value={formData.text}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.form_footer}>
              <span className={styles.privacy_hint}>
                🔒 Your privacy is protected. No spam ever.
              </span>
              <Button
                type="submit"
                disabled={isSubmitting}
                text={isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                icon={<IoSend fontSize="18px" />}
              />
            </div>
          </form>
        )}
      </div>

      {/* Right Column: Illustration + Contact Information Cards */}
      <div className={styles.contact_side}>
        <div className={styles.illustration_wrapper}>
          <img
            src="/images/contact.svg"
            alt="Customer Support Illustration"
            className={styles.contact_img}
          />
        </div>

        <div className={styles.info_cards}>
          <div className={styles.info_card}>
            <div className={styles.info_icon_wrapper}>
              <HiOutlineMail />
            </div>
            <div className={styles.info_text}>
              <span className={styles.info_label}>Email Us</span>
              <a href="mailto:support@dosomecoding.com" className={styles.info_link}>
                support@dosomecoding.com
              </a>
            </div>
          </div>

          <div className={styles.info_card}>
            <div className={styles.info_icon_wrapper}>
              <HiOutlinePhone />
            </div>
            <div className={styles.info_text}>
              <span className={styles.info_label}>Call Directly</span>
              <a href="tel:+18005550199" className={styles.info_link}>
                +1 (800) 555-0199
              </a>
            </div>
          </div>

          <div className={styles.info_card}>
            <div className={styles.info_icon_wrapper}>
              <HiOutlineClock />
            </div>
            <div className={styles.info_text}>
              <span className={styles.info_label}>Working Hours</span>
              <span className={styles.info_value}>Mon – Fri: 9am – 6pm EST</span>
            </div>
          </div>

          <div className={styles.info_card}>
            <div className={styles.info_icon_wrapper}>
              <HiOutlineLocationMarker />
            </div>
            <div className={styles.info_text}>
              <span className={styles.info_label}>Headquarters</span>
              <span className={styles.info_value}>San Francisco, CA & Global</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
