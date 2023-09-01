import { faPause, faPlay, faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMusicPlayer } from "../hooks/useMusicPlayer";

const PlayerControls = () => {
    const music = useMusicPlayer();

    return (
        <div className='mainPlayer'>
        <div className="trackName">
        <marquee>{music.currentTrackName}</marquee>
        </div>
        <div className="buttonsArea">
        <button>
            <FontAwesomeIcon 
            icon={faStepBackward}
            onClick={music.playPreviousTrack}
            />
        </button>
        <button onClick={music.togglePlay}>
            {music.isPlaying ? (
            <FontAwesomeIcon icon={faPause} />)
             : (
             <FontAwesomeIcon icon={faPlay} />)}
        </button>
        <button>
            <FontAwesomeIcon icon={faStepForward}
            onClick={music.playNextTrack} /> 
        </button>
        </div>
        </div>

    )


}

export { PlayerControls };
