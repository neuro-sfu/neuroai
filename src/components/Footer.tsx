export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
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
