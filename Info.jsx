import "./styles.css";
import financeImage from "../finance.png";
import worldLiteracy from "../worldLiteracy.png";
import sdg8 from "../SDG-8.png";
import { useEffect } from "react";

export default function Info() {
  useEffect(() => {
    // simple scroll-reveal
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) =>
          e.target.classList.toggle("visible", e.isIntersecting)
        );
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div
      className="App"
      style={{ backgroundColor: "#C8E3D6", minHeight: "100vh" }}
    >
      <h1>
        {" "}
        <u> Personal Finance </u>
      </h1>
      <h2 style={{ textAlign: "left", marginLeft: "20px" }}>
        <u>What is Personal Finance?</u>
      </h2>
      <h3 style={{ textAlign: "left", marginLeft: "20px" }}>
        {" "}
        Personal finance refers to how you manage your money as an individual or
        family. This includes the ways you save, invest, and budget. There are
        additional aspects to it too such as: planning and insurance coverage.{" "}
      </h3>
      <img
        src={financeImage}
        alt="Finance"
        style={{ width: "300px", marginTop: "20px" }}
      />
      <br />
      <br />
      <h2 style={{ textAlign: "left", marginLeft: "20px" }}>
        {" "}
        <u> Why is Personal Finance Important? </u>
      </h2>
      <h3 style={{ textAlign: "left", marginLeft: "20px" }}>
        {" "}
        So that now we know what personal finance is, why is personal finance
        important? Well, it is not just about managing your finances in the
        short run, it is also about securing your financial future. It has the
        following benefits:
        <ul>
          <li>Track your expenses.</li>
          <li>Achieving your financial goals.</li>
          <li>Reduced Stress.</li>
          <li>You learn good saving habits.</li>
          <li>You get into new beneficial practices, such as investment. </li>
        </ul>{" "}
        <figure className="figure">
          <img
            src={worldLiteracy}
            alt="World map showing financial literacy rates by country"
            style={{ width: "500px", marginTop: "20px" }}
          />
          <figcaption className="credit">
            Source:{" "}
            <a
              href="https://blogs.illinois.edu/view/7550/558591870#image-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Financial Literacy Report (2020)
            </a>
            . Map © PATROBAS SIRABO WAFULA— License: CC BY 4.0.
          </figcaption>
        </figure>
      </h3>
      <br />
      <h3 style={{ textAlign: "left", marginLeft: "20px" }}>
        As the image shows, financial literacy is still unrecognized in numerous
        regions around the world. When you understand how to manage your money,
        you can rise from financial challenges.You’ll be able to recognize
        opportunities and take advantage of them. And being responsible with
        your money can give you a whole level of confidence. This is exactly why
        personal finance is crucial.{" "}
      </h3>
      <br />
      <section
        className="sdg8 reveal"
        style={{ marginLeft: "20px", textAlign: "left" }}
      >
        <h2 className="underline-animate">The Sustainable Development Front</h2>
        <p>
          The 8th SDG of United Nations aims to “Promote sustained, inclusive
          and sustainable economic growth, full and productive employment and
          decent work for all”.
        </p>

        <ul className="sdg8-points">
          <li>
            <strong>8.10 Financial inclusion:</strong> access to safe accounts &
            credit.
          </li>
          <li>
            <strong>8.3 Entrepreneurship:</strong> support small businesses &
            decent jobs.
          </li>
          <li>
            <strong>8.5 Decent work:</strong> fair pay, upskilling, productive
            employment.
          </li>
        </ul>
      </section>
      <figure className="figure">
        <img
          src={sdg8}
          alt="United Nations 8th SDG"
          style={{ width: "250px", marginTop: "20px" }}
        />
        <figcaption className="credit">
          Source:{" "}
          <a
            href="https://sdgs.un.org/goals/goal8"
            target="_blank"
            rel="noopener noreferrer"
          >
            SDG Report (2025)
          </a>
          . Map © United Nations— License: CC BY 4.0.
        </figcaption>
      </figure>
    </div>
  );
}
