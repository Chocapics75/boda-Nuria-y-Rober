const Pause = () => {
    <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16">
        <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
    </svg>
}

const Play = () => {
    <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16">
        <path d="M8 5.14v14l11-7-11-7z"></path>
    </svg>
}
import { useState, useRef, useEffect } from 'react';

export function Player() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    
    useEffect(() => {
        audioRef.current.src = `/music.mp3`;
        audioRef.current.play();
        audioRef.current.volume = 0.3; // Ajusta el volumen al 30%
    }, [])

    const handleClick = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
            audioRef.current.volume = 0.3; // Ajusta el volumen al 30%
        }

        setIsPlaying(!isPlaying);
    }

    return (
        <div className="flex flex-row justify-between w-full px-4 z-50">
            <div>
                {/* Nombre de cancion */}
            </div>

            <div className="grid place-content-center gap-4 flex-1">
                <div className="flex justify-center">
                    <button className="bg-white rounded-full p-2 text-black" onClick={handleClick}>
                        {isPlaying ? "Pausa" : "Reproducir"}
                    </button>
                </div>
            </div>

            <div>
                {/* Volumen */}
            </div>

            <audio ref={audioRef} />
        </div>
    )
}