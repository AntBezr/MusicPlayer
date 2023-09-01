import { useState } from 'react';
import './App.css';
import { PlayerControls } from './components/PlayerControls';
import TrackList from './components/TrackList';
import { MusicContext } from './contexts/MusicContext';
import miracleMusic from './assests/miracle.mp3'
import insideYou from './assests/insideYou.mp3'
import upbeat from './assests/upbeat.mp3'



function App() {

  const [state, setState] = useState({
    audioPlayer: new Audio(miracleMusic),
    tracks: [
      {
        name: "Miracle",
        file: miracleMusic,
      },
      {
        name: "upbeat",
        file: upbeat,
      },
      {
        name: "Inside you",
        file: insideYou,
      }
    ],
    currentTrackIndex: 0,
    isPlaying: false,
  })

  console.log("State: ", state)

  return (
    <MusicContext.Provider value={[state, setState]}>
    <div className="App">
      
    <PlayerControls/>
    
    <TrackList/>
    </div>
    </MusicContext.Provider>
  );
}

export default App;
