export default function BackgroundVideo() {
  return (
    <video
      className="background-video"
      autoPlay
      muted
      loop
      playsInline
      onLoadedData={() =>

        console.log(" Video loaded")
      }
    >
      <source
        src="/videos/ai-city-background.mp4"
        type="video/mp4"
      />
    </video>
  );
}