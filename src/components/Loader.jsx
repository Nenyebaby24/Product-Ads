import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="loader">
        <h2>Loading AI Experience</h2>

        <div className="loader-bar">
          <div
            className="loader-fill"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <p>{progress.toFixed(0)}%</p>
      </div>
    </Html>
  );
}