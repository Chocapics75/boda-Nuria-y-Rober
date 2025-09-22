import { useEffect, useRef, useState } from "react";

export function Player() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    // Restaurar estado al montar
    const savedTime = localStorage.getItem("audioTime");
    const savedPlaying = localStorage.getItem("audioPlaying") === "true";

    if (savedTime) audio.currentTime = parseFloat(savedTime);
    if (savedPlaying) {
      audio.play().catch(() => {}); // evitar error si autoplay bloqueado
      setPlaying(true);
    }

    // Guardar periódicamente
    const interval = setInterval(() => {
      localStorage.setItem("audioTime", audio.currentTime);
      localStorage.setItem("audioPlaying", !audio.paused);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/music.mp3"
      controls
      onPlay={() => setPlaying(true)}
      onPause={() => setPlaying(false)}
      className="h-6 "
    />
  );
}