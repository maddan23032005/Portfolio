import { useEffect, useRef, useState } from "react";
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import ContactOrb from "./ContactOrb";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`contact-section section-container${inView ? " contact-in-view" : ""}`}
      id="contact"
      ref={sectionRef}
    >
      {/* Aurora wave layers */}
      <div className="contact-aurora contact-aurora-1" aria-hidden="true" />
      <div className="contact-aurora contact-aurora-2" aria-hidden="true" />
      <div className="contact-aurora contact-aurora-3" aria-hidden="true" />

      <div className="contact-container">
        <h3 className="contact-title">Contact</h3>
        <div className="contact-flex">
          <div className="contact-box contact-box-1">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:maddan23032005@gmail.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                className="contact-link"
              >
                Gmail
              </a>
            </p>
            <p>
              <a
                href="https://wa.me/919361627674"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                className="contact-link"
              >
                +91 9361627674
              </a>
            </p>
          </div>

          <div className="contact-box contact-box-2">
            <h4>Social</h4>
            <a
              href="https://github.com/maddan23032005"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/maddan-m"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>

          <div className="contact-box education-box contact-box-3">
            <h4>Education</h4>
            <div className="education-item">
              <p className="education-degree">B.Tech in Computer and Communication Engineering</p>
              <p className="education-school">Amrita School of Engineering, Chennai</p>
              <p className="education-year">2023–2027 • CGPA: 9.08/10.0</p>
            </div>
            <div className="education-item">
              <p className="education-degree">Higher Secondary Education</p>
              <p className="education-school">Jawahar CBSE School, Neyveli</p>
              <p className="education-year">2021–2023 • Score: 87.5%</p>
            </div>
          </div>

          <div className="contact-box contact-credit contact-box-4">
            <ContactOrb />
            <h2>
              Designed and Developed <br /> by <span>Maddan M</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
