import "./App.css";
import ResumePDF from "./ResumePDF";

function App() {
  return (
    <div className="App">
      <main className="resume-page">
        <header className="resume-header">
          <h1>My Professional Resume</h1>

          <p className="resume-title">
            Frontend Developer | React Developer
          </p>

          <p className="resume-description">
            Thank you for taking the time to review my resume. You can view
            my qualifications below or download a copy for your records.
          </p>
        </header>

        <ResumePDF />

        <footer className="resume-footer">
          <p>© {new Date().getFullYear()} • Professional Resume</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
