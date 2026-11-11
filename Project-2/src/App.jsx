import "./App.css";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactHeader from "./Components/ContactHeader/ContactHeader";
import Navigation from "./Components/Navigation/Navigation";

function App() {
  return (
    <div className="app_wrapper">
      <Navigation />
      <main className="main_container">
        <ContactHeader />
        <ContactForm />
      </main>
      <footer className="footer">
        <div className="footer_content">
          <p>© {new Date().getFullYear()} Do Some Coding. All rights reserved.</p>
          <div className="footer_links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#support">Support Center</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
