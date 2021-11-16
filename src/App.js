import "./styles.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main className="main">
        <h1>Netflix ITK</h1>
        <h2>Welcome!</h2>
        <Main />
      </main>
      <footer className="footer">By Ignacio Cruz</footer>
    </div>
  );
}
