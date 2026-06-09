import HeroScene from "./components/HeroScene";
import VoicePlayer from "./components/VoicePlayer";
import Subtitles from "./components/Subtitles";
import FeatureCards from "./components/FeatureCards";

import { adScript } from "./ai/adScript";

export default function App() {
  return (
    <>
      <VoicePlayer />

      <HeroScene />

      <Subtitles />

      <div className="overlay">
        <div className="badge">
          SMARTWATCH 
        </div>

        <h1>
          {adScript[0]} <br />
        </h1>

        <p>
          {adScript[1]}
        </p>

        <button>
          Discover More
        </button>
      </div>

      <FeatureCards />
    </>
  );
}
