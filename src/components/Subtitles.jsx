import { useEffect, useState } from "react";

import { voiceTimeline } from "../ai/voiceSync";

export default function Subtitles() {
  const [currentText, setCurrentText] =
    useState("");

  useEffect(() => {
    const audio = document.querySelector(
      "audio"
    );

    if (!audio) return;

    const updateSubtitle = () => {
      const time = audio.currentTime;

      const active =
        voiceTimeline.find(
          (item) =>
            time >= item.start &&
            time <= item.end
        );

      setCurrentText(
        active?.text || ""
      );
    };

    audio.addEventListener(
      "timeupdate",
      updateSubtitle
    );

    return () => {
      audio.removeEventListener(
        "timeupdate",
        updateSubtitle
      );
    };
  }, []);

  return (
    <div className="subtitle">
      {currentText}
    </div>
  );
}