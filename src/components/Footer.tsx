export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <a className="sfu-logo footer-logo" href="https://www.sfu.ca" target="_blank" rel="noreferrer">
            <img src={`${import.meta.env.BASE_URL}images/sfu-logo.png`} alt="Simon Fraser University" />
          </a>
          <h2>SFU Neuro+AI</h2>
          <p>
            A collaboration between the SFU{" "}
            <a href="https://www.sfu.ca/neuro-institute.html" target="_blank" rel="noreferrer">
              Institute for Neuroscience and Neurotechnology
            </a>{" "}
            and the SFU{" "}
            <a href="https://vinci.sfu.ca/" target="_blank" rel="noreferrer">
              Visual, Interactive, and Intelligent Computing Institute
            </a>
            .
          </p>
          <p className="copyright">© Simon Fraser University.</p>
          <p className="made-with">Website made with Claude Code.</p>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#mission">Mission</a>
          <a href="#training">Training</a>
          <a href="#team">Team</a>
          <a href="#get-involved">Get Involved</a>
        </nav>
      </div>
    </footer>
  );
}
