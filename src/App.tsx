import { useEffect, useState } from 'react'
import './App.css'

type DrumPadProps = {
  keyName: string;
  src: string;
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
}

function DrumPad({keyName, src, setDisplay} : DrumPadProps) {
  const fccAudioSrc = "https://s3.amazonaws.com/freecodecamp/drums/";

  const handleClick = () => {
    const sound = document.getElementById(keyName) as HTMLAudioElement;
    sound.play();
    setDisplay(src);
  }  

  return (
    <div id={src} className='drum-pad' onClick={handleClick}>
      <audio id={keyName} src={fccAudioSrc + src + ".mp3"} className='clip'></audio>
      {keyName}
    </div>
  )
}

function App() {
  const [display, setDisplay] = useState("");

  const handleKeyDown = (e : KeyboardEvent) => {
    if(e.key.toUpperCase() == "Q") {
      const sound = document.getElementById("Q") as HTMLAudioElement;
      (sound.parentNode as HTMLDivElement).click();
    } else if(e.key.toUpperCase() == "W") {
      const sound = document.getElementById("W") as HTMLAudioElement;
      (sound.parentNode as HTMLDivElement).click();
    } else if(e.key.toUpperCase() == "E") {
      const sound = document.getElementById("E") as HTMLAudioElement;
      (sound.parentNode as HTMLDivElement).click();
    } else if(e.key.toUpperCase() == "A") {
      const sound = document.getElementById("A") as HTMLAudioElement;
      (sound.parentNode as HTMLDivElement).click();
    } else if(e.key.toUpperCase() == "S") {
      const sound = document.getElementById("S") as HTMLAudioElement;
      (sound.parentNode as HTMLDivElement).click();
    } else if(e.key.toUpperCase() == "D") {
      const sound = document.getElementById("D") as HTMLAudioElement;
      (sound.parentNode as HTMLDivElement).click();
    } else if(e.key.toUpperCase() == "Z") {
      const sound = document.getElementById("Z") as HTMLAudioElement;
      (sound.parentNode as HTMLDivElement).click();
    } else if(e.key.toUpperCase() == "X") {
      const sound = document.getElementById("X") as HTMLAudioElement;
      (sound.parentNode as HTMLDivElement).click();
    } else if(e.key.toUpperCase() == "C") {
      const sound = document.getElementById("C") as HTMLAudioElement;
      (sound.parentNode as HTMLDivElement).click();
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <div id="drum-machine">
        <div id="display">{display}</div>
        <div id="buttons">
          <DrumPad keyName="Q" src="Heater-1" setDisplay={setDisplay} />
          <DrumPad keyName="W" src="Heater-2" setDisplay={setDisplay} />
          <DrumPad keyName="E" src="Heater-3" setDisplay={setDisplay} />
          <DrumPad keyName="A" src="Heater-4_1" setDisplay={setDisplay} />
          <DrumPad keyName="S" src="Heater-6" setDisplay={setDisplay} />
          <DrumPad keyName="D" src="Dsc_Oh" setDisplay={setDisplay} />
          <DrumPad keyName="Z" src="Kick_n_Hat" setDisplay={setDisplay} />
          <DrumPad keyName="X" src="RP4_KICK_1" setDisplay={setDisplay} />
          <DrumPad keyName="C" src="Cev_H2" setDisplay={setDisplay} />
        </div>
      </div>
      <div id="me">
        by <a href="https://github.com/stixbunny" target="_blank" rel="noreferrer">stixbunny</a>
      </div>
    </>
  )
}

export default App
