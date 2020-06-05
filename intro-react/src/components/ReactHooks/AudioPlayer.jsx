import React, { useRef, useState } from 'react'

const AudioPlayer = () => {
  const [volumen, setVolumen] = useState(100)
  const audioRef = useRef(new Audio());


  const cambiarVolumen = (e) => {
    const nuevoVolumen = e.target.value
    audioRef.current.volume = nuevoVolumen / 100;
    setVolumen(nuevoVolumen)
  }

  const play = () => {
    audioRef.current.play()
  }

  const pause = () => {
    audioRef.current.pause()
  }

  return (
    <div>
      <audio src="/assets/sonido-piolin.mp3" ref={audioRef}></audio>

      <button type="button" onClick={play}>Play</button>
      <button type="button" onClick={pause}>Pause</button>

      <label htmlFor="volumen">Volumen:</label>
      <input type="range" id="volumen" min="0" max="100" value={volumen} onChange={cambiarVolumen} />
    </div>
  )
}

export default AudioPlayer
