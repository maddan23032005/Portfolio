import { useEffect, useRef, useState } from "react";
import "./styles/Career.css";
import CareerBackground from "./CareerBackground";

const Career = () => {
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
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`career-section section-container${inView ? " career-in-view" : ""}`}
      ref={sectionRef}
    >
      <CareerBackground />
      <div className="career-container">
        <h2 className="career-heading">
          Experience <span>&</span>
          <br /> More
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box career-item-left">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>Neyveli Lignite Corporation (NLC)</h5>
              </div>
              <h3>Nov 2024</h3>
            </div>
            <p>
              Built a real-time dashboard to monitor and track mining bench data, improving operational visibility for engineers. Designed interactive UI components for data visualization and reporting using front-end technologies (HTML, CSS, JavaScript).
            </p>
          </div>

          <div className="career-info-box career-item-right">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathon Winner</h4>
                <h5>Achievements</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              • <b>Ingenium 5.0 Hackathon (1st Place):</b> Won national-level hackathon (theme: Urban Traffic System), designing an AI-powered intelligent traffic management solution.<br /><br />
              • <b>Technical Treasure Hunt (1st Place):</b> Secured 1st in a multi-round challenge with 5 technical rounds (image decoding via OpenCV) and 4 non-technical clue-solving rounds.
            </p>
          </div>

          <div className="career-info-box career-item-left">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Club Coordinator</h4>
                <h5>Leadership &amp; Activities</h5>
              </div>
              <h3>2025-2027</h3>
            </div>
            <p>
              • <b>BIS Club:</b> Organizing awareness sessions on Indian standards, quality benchmarks, and standardization practices among students.<br /><br />
              • <b>CAMHI Club:</b> Leading initiatives and events focused on HCI research, AI-driven interfaces, and human-computer interaction projects.
            </p>
          </div>

          <div className="career-info-box career-item-right">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Skills</h4>
                <h5>Core Competencies</h5>
              </div>
              <h3>Skills</h3>
            </div>
            <p>
              <b>AI/ML:</b> Machine Learning, Deep Learning, Computer Vision, NLP, Generative AI (TensorFlow, PyTorch, OpenCV, YOLOv5/v8, Scikit-learn, Transformers)<br /><br />
              <b>Languages &amp; DB:</b> C, Python, JavaScript, SQL, MySQL, MongoDB<br /><br />
              <b>Web Dev:</b> MERN Stack, Next.js, Flask, Django, Firebase, React.js, TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
