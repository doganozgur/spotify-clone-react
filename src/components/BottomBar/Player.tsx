import { useEffect, useMemo } from "react";
import { useAudio } from "react-use";
import {
  setControls,
  setPlayerSidebar,
  setPlaying,
} from "../../redux/playerSlice";

import { useAppDispatch, useAppSelector } from "../../hooks/useAppStore";
import { Icon } from "../../utils/Icons";
import { secondsToTime } from "../../utils/secondsToTime";
import CustomRange from "../CustomRange";

export default function Player() {
  const { current, playerSidebar } = useAppSelector((state) => state.player);
  const dispatch = useAppDispatch();

  const [audio, state, controls] = useAudio({
    src: current?.src!,
  });

  useEffect(() => {
    dispatch(setControls(controls));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(setPlaying(state.playing));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.playing]);

  useEffect(() => {
    controls.play();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const volumeIcon = useMemo(() => {
    if (state.volume === 0 || state.muted) return "volumeMuted";
    else if (state.volume > 0 && state.volume < 0.33) return "volumeLow";
    else if (state.volume >= 0.33 && state.volume < 0.66) return "volumeNormal";
    else return "volumeFull";
  }, [state.volume, state.muted]);

  return (
    <div className="flex justify-between items-center h-full px-4">
      {/* Menu: Left */}
      <div className="flex justify-start min-w-[11.25rem] w-[30%]">
        {current && (
          <>
            {/* Photo */}
            <div className="flex items-center space-x-2 mr-4">
              {!playerSidebar && (
                <div className="relative w-14 group">
                  <button
                    onClick={() => dispatch(setPlayerSidebar())}
                    className="absolute right-1 top-1 rotate-90 w-6 h-6 bg-black bg-opacity-40 rounded-full hover:bg-opacity-60 hidden group-hover:flex items-center justify-center hover:scale-[1.1]"
                  >
                    <Icon name="chevronLeft" size={16} />
                  </button>
                  <img
                    className="w-full"
                    src={current?.image}
                    alt={current?.title}
                  />
                </div>
              )}
              <div>
                <h6 className="text-sm font-normal line-clamp-1">
                  {current?.title}
                </h6>
                <small className=" text-gray-400 text-xs">
                  {current?.artist}
                </small>
              </div>
            </div>
            {/* Icons */}
            <div className="flex items-center">
              <button className="h-8 w-8 flex justify-center items-center text-white text-opacity-70 hover:text-opacity-100">
                <Icon name="heart" size={16} />
              </button>
              <button className="h-8 w-8 flex justify-center items-center text-white text-opacity-70 hover:text-opacity-100">
                <Icon name="pictureInPicture" size={16} />
              </button>
            </div>
          </>
        )}
      </div>
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
          {/* Button: Play/Pause */}
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
