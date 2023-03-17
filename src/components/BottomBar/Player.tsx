import { useMemo } from "react";
import { useAudio } from "react-use";

import { Icon } from "../../utils/Icons";
import { secondsToTime } from "../../utils/secondsToTime";
import CustomRange from "../CustomRange";

export default function Player() {
  const [audio, state, controls] = useAudio({
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  });

  /**
   * Changing current icon of the volume. Whether it's muted, low, normal or full
   * @returns {string} - Icon name
   */
  const volumeIcon = useMemo(() => {
    if (state.volume === 0 || state.muted) return "volumeMuted";
    else if (state.volume > 0 && state.volume < 0.33) return "volumeLow";
    else if (state.volume >= 0.33 && state.volume < 0.66) return "volumeNormal";
    else return "volumeFull";
  }, [state.volume, state.muted]);

  return (
    <div className="flex justify-between items-center h-full px-4">
      {/* Menu: Left */}
      <div className="flex justify-start min-w-[11.25rem] w-[30%]">div sol</div>
      {/* Menu: Middle */}
      <div className="flex flex-col items-center max-w-[45.125rem] w-2/5">
        <div className="flex items-center">
          {/* Button: Shuffle */}
          <button className="h-8 w-8 flex justify-center items-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="shuffle" size={16} />
          </button>
          {/* Button: Previous */}
          <button className="h-8 w-8 flex justify-center items-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="playerPrev" size={16} />
          </button>
          {/* Button: Pause */}
          <button
            onClick={controls[state?.playing ? "pause" : "play"]}
            className="h-8 w-8 flex justify-center items-center bg-white rounded-full text-black hover:scale-[1.06] transition ease-in-out delay-75"
          >
            <Icon name={state?.playing ? "pause" : "play"} size={16} />
          </button>
          {/* Button: Next */}
          <button className="h-8 w-8 flex justify-center items-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="playerNext" size={16} />
          </button>
          {/* Button: Repeat */}
          <button className="h-8 w-8 flex justify-center items-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="repeat" size={16} />
          </button>
        </div>
        <div className="w-full flex items-center gap-x-2">
          {/* Audio */}
          {audio}
          {/* Time passed */}
          <div>{secondsToTime(state?.time)}</div>

          <CustomRange
            step={0.1}
            min={0}
            max={state?.duration || 1}
            value={[state?.time]}
            onChange={(value) => controls.seek(value)}
          />
          {/* Time remaining */}
          {secondsToTime(state?.duration || 1)}
        </div>
      </div>
      {/* Menu: Right */}
      <div className="flex justify-end min-w-[11.25rem] w-[30%]">
        <div className="flex items-center gap-x-3">
          {/* Button: Lyrics */}
          <button className="h-8 w-8 flex justify-center items-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="lyrics" size={16} />
          </button>
          {/* Button: Queue */}
          <button className="h-8 w-8 flex justify-center items-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="queue" size={16} />
          </button>
          {/* Button: Device */}
          <button className="h-8 w-8 flex justify-center items-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="device" size={16} />
          </button>
          {/* Button: Volume */}
          <button
            className="h-8 w-8 flex justify-center items-center text-white text-opacity-70 hover:text-opacity-100"
            onClick={controls[state.muted ? "unmute" : "mute"]}
          >
            <Icon name={volumeIcon} size={16} />
          </button>
          {/* Volume bar */}
          <CustomRange
            step={0.01}
            min={0}
            max={1}
            value={[state.muted ? 0 : state?.volume]}
            onChange={(value) => {
              controls.unmute();
              controls.volume(value);
            }}
          />
          {/* Button: Full screen */}
          <button className="h-8 w-8 flex justify-center items-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="fullScreen" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
