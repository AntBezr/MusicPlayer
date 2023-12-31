import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMusicPlayer } from "../hooks/useMusicPlayer";

const TrackList = () => {
    const music = useMusicPlayer();

    return (
    <div className="trackList">
        {music.trackList.map((track, index) => (
            <div key={`${track}_${index}`} className="trackInlist">
                <div>{index+1+'.'} {track.name}</div>
                <button onClick={() => music.playTrack(index)}>
                    {music.isPlaying && music.currentTrackIndex === index ? (
                        <FontAwesomeIcon icon={faPause} />
                    ) : (
                        <FontAwesomeIcon icon={faPlay} />
                    )}
                </button>
                
            </div>
        )
        )}
    </div>
    )

}

export default TrackList;