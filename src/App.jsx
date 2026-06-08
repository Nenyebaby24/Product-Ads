import HeroScene from "./components/HeroScene";

export default function App() {
  return (
    <div className="container">
      <HeroScene />

      <div className="overlay">
        <h1>Luxury AI Watch</h1>
        <p>Powered by Intelligence</p>
      </div>
    </div>
  );
}
