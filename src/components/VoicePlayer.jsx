import { useRef, useState, useEffect } from "react";

export default function VoicePlayer() {
  const audioRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive breakpoint
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Check on initial mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/audio/ai-voiceover.mp3"
      controls
      style={{
        position: "absolute",
        top: "20px",
        left: "20px",
        zIndex: 9999,
        
        // --- RESPONSIVE SCALING MECHANISM ---
        // Keeps it at 1 (100%) on desktop, shrinks to 0.50 (50%) on mobile
        transform: isMobile ? "scale(0.50)" : "scale(1)",
        
        // Ensures the scaled element clips to the top-left corner instead of centering itself
        transformOrigin: "top left",
      }}
    />
  );
}